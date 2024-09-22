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
	<StoreProvider store={store}>
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	</StoreProvider>
);
