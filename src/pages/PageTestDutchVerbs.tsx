import { useContext } from "react";
import { AppContext } from "../AppContext";
import * as qstr from '../qtools/qstr';

export const PageTestDutchVerbs = () => {
	const { dutchVerbs } = useContext(AppContext);

	qstr.randomizeArray(dutchVerbs);

	return (
		<>
			<h2 className="text-xl mb-3">Test Yourself on Dutch Verbs</h2>
			{dutchVerbs.map(dv => {
				return (
					<div key={dv.dpodId}>
						<p>{dv.infinitive}</p>
						<p className="text-xs">{dv.mainTextAnswer}</p>
					</div>
				)
			})}
		</>
	)
}
