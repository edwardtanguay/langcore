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
	const [showingAnswer, setShowingAnswer] = useState(false);
	const [verbIsCorrect, setVerbIsCorrect] = useState(false);

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
			setVerbIsCorrect(true);
		} else {
			setVerbIsCorrect(false);
		}
		setShowingAnswer(true);
	}

	const handleNext = () => {
		setAnswerVerb('');
		setDv(getRandomNotAnsweredCorrectlyVerb());
		setShowingAnswer(false);
	}

	return (
		<>
			{dv && (
				<>
					<h2 className="text-xl mb-3">{verbsTestedCorrect.length} of {dutchVerbs.length} Verbs Answered Correctly</h2>
					<form onSubmit={(e) => handleCheckAnswer(e)}>
						<div key={dv.dpodId}>
							<p className="text-xl">{dv.english}</p>
						</div>
						<div>
							<input value={answerVerb} onChange={(e) => handleChangeAnswerVerb(e)} autoComplete="off" spellCheck="false" className="w-full text-sm" />
							{!showingAnswer && (
								<div className="text-xs">
									<p className="text-gray-500"><span>e.g.</span><span className="italic"> heb hebben had hadden gehad</span></p>
								</div>
							)}
						</div>
						{showingAnswer && (
							<div>
								<p className={`text-sm ${verbIsCorrect ? 'text-green-900' : 'text-red-700'}`}>{dv.mainTestAnswer}</p>
								<button type="button" onClick={handleNext} className="buttonNormal mt-3 w-full" >NEXT</button>
							</div>
						)}
						{!showingAnswer && (
							<button className="buttonNormal mt-3 w-full" >check answer</button>
						)}
					</form>
				</>
			)}
		</>
	)
}
