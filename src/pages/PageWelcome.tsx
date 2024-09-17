import { NavLink } from "react-router-dom";

export const PageWelcome = () => {

	return (
		<p>Welcome to the Language Core, currently we have <NavLink className="underline" to="/dutchVerbs"
		>Dutch Verbs</NavLink>.</p>
	)
}