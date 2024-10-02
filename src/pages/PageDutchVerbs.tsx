import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useStoreState } from "../store/hooks.ts"
import { SingularDutchVerb } from "../components/SingularDutchVerb.tsx";

export const PageDutchVerbs = () => {
	const { dutchVerbs } = useContext(AppContext);
	const { learnedVerbs } = useStoreState((state) => state.profileModel);

	const percent = ((learnedVerbs.length / dutchVerbs.length) * 100).toFixed(0);

	return (
		<>
			<h2 className="mb-4 text-center">You have learned {learnedVerbs.length} of {dutchVerbs.length} verbs: <b>{percent}%</b></h2>
			{dutchVerbs.map(dutchVerb => {
				return <SingularDutchVerb dutchVerb={dutchVerb} learnedVerbs={learnedVerbs}/>
			})}
		</>
	)
}
