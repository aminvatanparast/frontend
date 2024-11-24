
import {Sidebar} from "../_component/sidebar/sidebar";
import HeaderMain from "../_component/headerMain/headerMain";


export default function MainLayout({ children }) {


    return (
        <div>
            <Sidebar/>
            <div className={"w-[100% - 284px] ml-[284px]"}>
                <HeaderMain/>
                <main className={``}>
                    <>{children}</>
                </main>
            </div>
        </div>
    )
}
