/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { DutchVerb } from "../types";
import { useStoreActions, useStoreState } from "../store/hooks";

export const PageTestDutchVerbs = () => {
	const { getRandomNotAnsweredCorrectlyVerb } = useContext(AppContext);
	const [answerVerb, setAnswerVerb] = useState('');
	const [dv, setDv] = useState<DutchVerb | null>(null);
	const { verbsTestedCorrect } = useStoreState((state) => state.profileModel);
	const { addVerbsTestedCorrect: addVerbTestedCorrect } = useStoreActions((actions) => actions.profileModel);

	useEffect(() => {
		setDv(getRandomNotAnsweredCorrectlyVerb());
	}, [])

	const handleChangeAnswerVerb = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setAnswerVerb(value);
	}

	const handleCheckAnswer = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (answerVerb === dv?.mainTestAnswer) {
			addVerbTestedCorrect(dv.dpodId);
		} else {
			console.log('incorrect: ' + dv?.mainTestAnswer);
		}
		setDv(getRandomNotAnsweredCorrectlyVerb());
	}

	return (
		<>
			{dv && (
				<>
					<h2 className="text-xl mb-3">Test Yourself on Dutch Verbs</h2>
					[{verbsTestedCorrect.join(',')}]
					<form onSubmit={(e) => handleCheckAnswer(e)}>
						<div key={dv.dpodId}>
							<p className="text-orange-900 mb-2 text-xl">{dv.english}</p>
						</div>
						<div>
							<input value={answerVerb} onChange={(e) => handleChangeAnswerVerb(e)} className="w-full text-sm" />
							<button className="buttonNormal mt-3 w-full" >check answer</button>
						</div>
						<div className="mt-6">
							<p className="text-gray-500"><span>e.g.</span><span className="italic"> heb hebben had hadden gehad</span></p>
						</div>
					</form>
				</>
			)}
		</>
	)
}
