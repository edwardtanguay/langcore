import { NavLink } from "react-router-dom";
import { useStoreState } from "../store/hooks";
import { useSelectors } from "../store/useSelectors";

export const PageWelcome = () => {
	const { dutchVerbs } = useStoreState((state) => state.profileModel);
	const { getTestNumber, getTestMessage, getRandomNotAnsweredCorrectlyVerb } = useSelectors();

	const randomeVerb = getRandomNotAnsweredCorrectlyVerb();

	return (
		<>
			<p>Welcome to the Language Core, currently we have <NavLink className="underline" to="/dutchVerbs"
			>Dutch Verbs</NavLink>.</p>

			<p>test 001: {dutchVerbs.map(m => m.infinitive).join(', ')}</p>

			<p>test 002: {getTestNumber()}</p>
			<p>test 003: {getTestMessage()}</p>
			<p>test 004: {randomeVerb.infinitive}</p>
		</>
	)
}