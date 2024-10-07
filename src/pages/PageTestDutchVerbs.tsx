import { useContext } from "react";
import { AppContext } from "../AppContext";
import * as qstr from '../qtools/qstr';

export const PageTestDutchVerbs = () => {
	const { dutchVerbs } = useContext(AppContext);

	qstr.randomizeArray(dutchVerbs);
	// const dv = dutchVerbs.find(m => m.infinitive === 'hebben')
	const dv = dutchVerbs[0]

	return (
		<>
			{dv && (
				<>
					<h2 className="text-xl mb-3">Test Yourself on Dutch Verbs</h2>
					<form>
						<div key={dv.dpodId}>
							<p className="text-orange-900 mb-2 text-xl">{dv.infinitive}</p>
							{/* <p>{dv.mainTextAnswer}</p> */}
						</div>
						<div>
							<input className="w-full text-sm" />
							<button className="buttonNormal mt-3 w-full" type="button">check answer</button>
						</div>
						<div className="mt-6">
							<p><span>e.g.</span><span className="italic"> heb hebben had hadden gehad</span></p>
						</div>
					</form>
				</>
			)}
		</>
	)
}
