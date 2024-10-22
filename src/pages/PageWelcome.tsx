import { NavLink } from "react-router-dom";
import { useStoreState } from "../store/hooks";

export const PageWelcome = () => {
	const { dutchVerbs } = useStoreState((state) => state.profileModel);

	return (
		<>
			<p>Welcome to the Language Core, currently we have <NavLink className="underline" to="/dutchVerbs"
			>Dutch Verbs</NavLink>.</p>

			<p>{dutchVerbs.map(m => m.infinitive).join(', ')}</p>
		</>
	)
}