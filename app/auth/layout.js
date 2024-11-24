import {Header} from "../_component/header";
import {Footer} from "../_component/footer";


export default function MainLayout({ children }) {


	return (
		<div>
			<header>
				<Header />
			</header>

			<div className={" min-h-[40vh] mb-10"}>
				<main className={``}>
					<>{children}</>
				</main>
			</div>

			<footer className='bg-home'>
				<Footer />
			</footer>
		</div>
	)
}
