import { NavLink } from "react-router-dom";
import { useStoreState } from "../store/hooks";

export const PageWelcome = () => {
	const { dutchVerbs } = useStoreState((state) => state.profileModel);

	return (
		<>
			<p>Welcome to the Language Core, currently we have <NavLink className="underline" to="/dutchVerbs"
			>Dutch Verbs</NavLink>.</p>

			<p>test: there are {dutchVerbs.length} dutch verbs</p>
		</>
	)
}