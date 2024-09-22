import { Nav } from "./Nav";
import { useStoreState } from "../store/hooks.ts"

export const Header = () => {
	const { firstName } = useStoreState((state) => state.profileModel);

	return (
		<>
			<div className="flex items-center justify-between">
			<h1 className="text-3xl mb-3 text-slate-800">Language Core</h1>
				<p>{firstName}</p>
			</div>
			<Nav/>
		</>
	);
};
