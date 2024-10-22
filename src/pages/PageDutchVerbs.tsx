import { useStoreState } from "../store/hooks.ts"
import { SingularDutchVerb } from "../components/SingularDutchVerb.tsx";
import * as config from '../config.ts';

export const PageDutchVerbs = () => {
	const { dutchVerbs } = useStoreState((state) => state.profileModel);
	const { learnedVerbs } = useStoreState((state) => state.profileModel);

	const percent = ((learnedVerbs.length / dutchVerbs.length) * 100).toFixed(0);

	const infinitivesWithoutExamples = dutchVerbs.filter(m => m.examples.length === 0).map(m => m.infinitive);

	return (
		<>
			<span>count: {dutchVerbs.length}</span>
			{/* <pre>obj: {JSON.stringify(dutchVerbs[0], null, 2)}</pre> */}
			<h2 className="mb-4 text-center">You have learned {learnedVerbs.length} of {dutchVerbs.length} verbs: <b>{percent}%</b></h2>
			{config.devMode() && infinitivesWithoutExamples.length > 0 && (
				<p className="text-xs text-red-700 mb-3">There are {infinitivesWithoutExamples.length} verbs without examples: {infinitivesWithoutExamples.join(', ')}</p>
			)}
			{dutchVerbs.map(dutchVerb => {
				return <SingularDutchVerb key={dutchVerb.dpodId} dutchVerb={dutchVerb} learnedVerbs={learnedVerbs}/>
			})}
		</>
	)
}
