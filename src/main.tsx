import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { AppProvider } from "./AppContext.tsx";
import { PageDutchVerbs } from "./pages/PageDutchVerbs.tsx";
import { PageProfile } from "./pages/PageProfile.tsx";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/store.ts";
import * as printerOutput from './printerOutput.ts';
import { PageTestDutchVerbs } from "./pages/PageTestDutchVerbs.tsx";
import { PageSpanishVerbs } from "./pages/PageSpanishVerbs.tsx";

const getUrlParams = () => {
	const params = new URLSearchParams(window.location.search);
	let mode = params.get('mode');
	let view = params.get('view');
	mode = mode ? mode : '';
	view = view ? view : '';
	return { mode, view };
}

const { mode, view } = getUrlParams();

if (mode === 'print') {
	document.body.style.backgroundColor = '#fff';
	const rootElement = document.getElementById('root');
	rootElement?.classList.remove('justify-center');
	rootElement?.classList.add('justify-start');
}

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/welcome",
				element: <PageWelcome />,
			},
			{
				path: "dutchVerbs",
				element: <PageDutchVerbs />
			},
			{
				path: "profile",
				element: <PageProfile />,
			},
			{
				path: "test-dutch-verbs",
				element: <PageTestDutchVerbs />,
			},
			{
				path: "spanishVerbs",
				element: <PageSpanishVerbs/>
			},
			{
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "/",
				element: <Navigate to="/welcome" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<>
		{mode === 'print' && (
			<section style={{ background: '#fff' }} dangerouslySetInnerHTML={{ __html: printerOutput.print(view) }}>
			</section>
		)}
		{mode !== 'print' && (
			<StoreProvider store={store}>
				<AppProvider>
					<RouterProvider router={router} />
				</AppProvider>
			</StoreProvider>
		)}
	</>
);
