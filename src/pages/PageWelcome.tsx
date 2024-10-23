import { NavLink } from "react-router-dom";
import { useStoreActions, useStoreState } from "../store/hooks";

export const PageWelcome = () => {
	const { user } = useStoreState((state) => state.profileModel);
	const { setUser } = useStoreActions((actions) => actions.profileModel);

	const handleIncreaseScore = () => {
		user.score += 10;
		setUser(user);
	}

	return (
		<>
			<p>Welcome to the Language Core, currently we have <NavLink className="underline" to="/dutchVerbs"
			>Dutch and Spanish Verbs</NavLink>.</p>
			<button className="mt-3 buttonNormal" onClick={handleIncreaseScore}>increase score</button>
		</>
	)
}