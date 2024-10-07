/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { DutchVerb } from "../types";
import { useStoreActions, useStoreState } from "../store/hooks";

export const PageTestDutchVerbs = () => {
	const { getRandomNotAnsweredCorrectlyVerb, dutchVerbs } = useContext(AppContext);
	const [answerVerb, setAnswerVerb] = useState('');
	const [dv, setDv] = useState<DutchVerb | null>(null);
	const { verbsTestedCorrect } = useStoreState((state) => state.profileModel);
	const { addVerbsTestedCorrect: addVerbTestedCorrect } = useStoreActions((actions) => actions.profileModel);

	useEffect(() => {
		setDv(getRandomNotAnsweredCorrectlyVerb());
	}, [])

	const handleChangeAnswerVerb = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setAnswerVerb(value.toLowerCase());
	}

	const handleCheckAnswer = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (answerVerb === dv?.mainTestAnswer) {
			addVerbTestedCorrect(dv.dpodId);
		} else {
			console.log('incorrect');
		}
		setAnswerVerb('');
		setDv(getRandomNotAnsweredCorrectlyVerb());
	}

	return (
		<>
			{dv && (
				<>
					<p>ver 2.0</p>
					<h2 className="text-xl mb-3">{verbsTestedCorrect.length} of {dutchVerbs.length} Verbs Answered Correctly</h2>
					<form onSubmit={(e) => handleCheckAnswer(e)}>
						<div key={dv.dpodId}>
							<p className="text-orange-900 text-xl">{dv.english}</p>
						</div>
						<div>
							<input value={answerVerb} onChange={(e) => handleChangeAnswerVerb(e)} autoComplete="off" spellCheck="false" type="email" className="w-full text-sm" />
							<div className="text-xs">
								<p className="text-gray-500"><span>e.g.</span><span className="italic"> heb hebben had hadden gehad</span></p>
							</div>
						</div>
						<button className="buttonNormal mt-3 w-full" >check answer</button>
					</form>
				</>
			)}
		</>
	)
}
