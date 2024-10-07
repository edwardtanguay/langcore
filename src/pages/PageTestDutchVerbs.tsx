import { useContext } from "react";
import { AppContext } from "../AppContext";
import * as qstr from '../qtools/qstr';

export const PageTestDutchVerbs = () => {
	const { dutchVerbs } = useContext(AppContext);

	qstr.randomizeArray(dutchVerbs);
	const dv = dutchVerbs[0]

	return (
		<>
			{dv && (
				<>
					<h2 className="text-xl mb-3">Test Yourself on Dutch Verbs</h2>
					<div key={dv.dpodId}>
						<p>{dv.infinitive}</p>
						<p className="text-xs">{dv.mainTextAnswer}</p>
					</div>
				</>
			)}
		</>
	)
}
