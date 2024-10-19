import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { useEffect } from "react";
import { useStoreActions } from "./store/hooks";

function App() {
	const { loadSpanishVerbs, loadSpanishExamples, loadAppMode } = useStoreActions((actions) => actions.profileModel);

	useEffect(() => {
		loadSpanishVerbs();
		loadSpanishExamples();
		loadAppMode();
	}, [])

	return (
		<main className="bg-slate-400 p-4 w-full md:w-[60rem] mt-0 md:mt-6">
			<Header />
			<main className="py-4">
				<Outlet />
			</main>
		</main>
	);
}

export default App;
