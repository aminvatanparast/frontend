"use client";

import React, { useEffect, useRef, useState } from "react";
import { Map, Marker, Popup, NavigationControl, Source, Layer } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

const MAPBOX_TOKEN = "pk.eyJ1IjoiYml0bmV2aXMiLCJhIjoiY20zNDc2MzVyMThvYzJrcjY0aXR6ZXJpeSJ9.p3Sa2ypERmgFXjX3ZXI_0A";

function MyMap({location , property}) {
    const [viewState, setViewState] = useState({
        longitude: 55.2744,
        latitude: 25.1972,
        zoom: 15.5,
        pitch: 60,
        bearing: -17.6,
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [markerCoordinates, setMarkerCoordinates] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);



    const handleSearch = async () => {
        if (!searchTerm) return;
        try {
            const response = await axios.get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchTerm)}.json`,
                { params: { access_token: MAPBOX_TOKEN } }
            );

            if (response.data.features.length > 0) {
                const bestMatch = response.data.features[0];
                const [longitude, latitude] = bestMatch.geometry.coordinates;
                setViewState({ ...viewState, longitude, latitude, zoom: 14 });
                setMarkerCoordinates({ longitude, latitude });
            } else {
                console.warn("No results found for this location.");
            }
        } catch (error) {
            console.error("Error fetching location:", error);
        }
    };


    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
    };

    return (
        <div className="flex flex-row flex-wrap w-full p-1">
            <div className="flex flex-col w-10/12 pr-2">
                <div className="bg-gray-50 w-full">
                    <Map
                        {...viewState}
                        style={{ width: "100%", height: 600 }}
                        mapStyle="mapbox://styles/mapbox/satellite-v9"
                        mapboxAccessToken={MAPBOX_TOKEN}
                        onMove={(evt) => setViewState(evt.viewState)}
                    >
                        {/* Clip Layer to Remove Building */}
                        <Source
                            id="eraser"
                            type="geojson"
                            data={{
                                type: "FeatureCollection",
                                features: [
                                    {
                                        type: "Feature",
                                        geometry: {
                                            type: "Polygon",
                                            coordinates: [
                                                [
                                                    [55.273, 25.197],
                                                    [55.274, 25.198],
                                                    [55.275, 25.197],
                                                    [55.273, 25.197],
                                                ],
                                            ],
                                        },
                                    },
                                ],
                            }}
                        >
                            <Layer
                                id="eraser"
                                type="clip"
                                layout={{
                                    "clip-layer-types": ["symbol", "model"],
                                    "clip-layer-scope": ["basemap"],
                                }}
                            />
                        </Source>

                        {/* Model Layer */}
                        <Source
                            id="model"
                            type="geojson"
                            data={{
                                type: "Feature",
                                geometry: { type: "Point", coordinates: [55.2744, 25.1972] },
                                properties: {
                                    "model-uri": "https://docs.mapbox.com/mapbox-gl-js/assets/tower.glb",
                                },
                            }}
                        >
                            <Layer
                                id="tower"
                                type="model"
                                layout={{ "model-id": ["get", "model-uri"] }}
                                paint={{
                                    "model-opacity": 1,
                                    "model-rotation": [0.0, 0.0, 35.0],
                                    "model-scale": [0.8, 0.8, 1.2],
                                    "model-color-mix-intensity": 0,
                                    "model-cast-shadows": true,
                                    "model-emissive-strength": 0.8,
                                }}
                            />
                        </Source>
                        {/* Predefined Markers */}
                        {location?.map((marker) => (
                            marker?.location?.map((item , index) => {
                                return (
                                    <Marker
                                        key={index}
                                        longitude={item?.longitude}
                                        latitude={item?.latitude}
                                        color="red"
                                        onClick={() => {
                                            handleMarkerClick(item)
                                            setSelectedLocation(index)
                                        }}
                                    />
                                )
                            })
                        ))}

                        {
                            property &&
                            <>
                                {location?.map((marker) => (
                                    marker?.property?.location?.map((item , index) => {
                                        return (
                                            <Marker
                                                key={index}
                                                longitude={item?.longitude}
                                                latitude={item?.latitude}
                                                color="red"
                                                onClick={() => {
                                                    handleMarkerClick(item)
                                                    setSelectedLocation(index)
                                                }}
                                            />
                                        )
                                    })
                                ))}
                            </>
                        }
                        {markerCoordinates && (
                            <Marker
                                longitude={markerCoordinates.longitude}
                                latitude={markerCoordinates.latitude}
                                color="green"
                                onClick={() => handleMarkerClick(markerCoordinates)}
                            />
                        )}
                        <div style={{ position: "absolute", right: 10, top: 10 }}>
                            <NavigationControl />
                        </div>
                    </Map>
                </div>
            </div>

            {/* Search and Input Panel */}
            <div className="flex flex-col w-2/12 bg-slate-100 border-l p-2">
                <div className="flex flex-row w-full rounded border border-teal-500">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search Place"
                        className="bg-white h-8 w-8/12 rounded-r text-xs rounded-lg"
                        style={{ padding: 10 }}
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-teal-500 text-slate-50 w-4/12 h-8 text-xs"
                    >
                        Search
                    </button>
                </div>
            </div>

            {selectedMarker && (
                <div className="fixed bottom-0 left-0 bg-white p-4 border border-gray-300 shadow-lg">
                    <h3 className="text-lg font-semibold">Place Information</h3>
                    <p>Longitude: {selectedMarker.longitude}</p>
                    <p>Latitude: {selectedMarker.latitude}</p>
                    <p>developerName: {location[selectedLocation].developerName}</p>
                    <p>projectName: {location[selectedLocation].projectName}</p>
                    <p>unitType: {
                        location[selectedLocation].unitType?.map((item ,index) => {
                            return(
                                <>
                                    <span>{item?.value}</span>
                                    {
                                        location[selectedLocation].unitType?.length !== index + 1 &&
                                        <span>{" / "}</span>
                                    }
                                </>
                            )
                        })
                    }</p>
                    <p>amenities: {
                        location[selectedLocation].amenities?.map((item ,index) => {
                            return(
                                <>
                                    <span>{item?.value}</span>
                                    {
                                        location[selectedLocation].amenities?.length !== index + 1 &&
                                        <span>{" / "}</span>
                                    }
                                </>
                            )
                        })
                    }</p>
                    <p>size: {
                        location[selectedLocation].size?.map((item , index) => {
                            return(
                                <>
                                    <span>{item?.value}</span>
                                    {
                                        location[selectedLocation].size?.length !== index + 1 &&
                                        <span>{" / "}</span>
                                    }
                                </>
                            )
                        })
                    }</p>
                    <p>projectName: {location[selectedLocation].totaPrice}</p>
                    <p>paymentPlan: {
                        location[selectedLocation].paymentPlan?.map((item , index) => {
                            return(
                                <>
                                    <span>{item?.value}</span>
                                    {
                                        location[selectedLocation].paymentPlan?.length !== index + 1 &&
                                        <span>{" / "}</span>
                                    }
                                </>
                            )
                        })
                    }</p>
                    <p>view: {location[selectedLocation].view}</p>
                    <p>handOverTime: {location[selectedLocation].handOoverTime}</p>

                    {/* Add more details as needed */}
                </div>
            )}

        </div>
    );
}

export default MyMap;
