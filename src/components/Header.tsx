import { Nav } from "./Nav";

export const Header = () => {
	return (
		<>
			<div className="flex items-center justify-between">
			<h1 className="text-3xl mb-3 text-slate-800">Language Core</h1>
			<p>TESTING</p>
			</div>
			<Nav/>
		</>
	);
};
