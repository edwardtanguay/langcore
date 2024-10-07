import { useContext, useState } from "react";
import { AppContext } from "../AppContext";

export const PageTestDutchVerbs = () => {
	const { getRandomNotAnsweredCorrectlyVerb } = useContext(AppContext);
	const [answerVerb, setAnswerVerb] = useState('nnn');

	// const dv = dutchVerbs.find(m => m.infinitive === 'hebben')
	const dv = getRandomNotAnsweredCorrectlyVerb();

	const handleChangeAnswerVerb = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setAnswerVerb(value);
	}

	return (
		<>
			{dv && (
				<>
					<h2 className="text-xl mb-3">Test Yourself on Dutch Verbs</h2>
					<form>
						<div key={dv.dpodId}>
							<p className="text-orange-900 mb-2 text-xl">{dv.english}</p>
							{/* <p>{dv.mainTextAnswer}</p> */}
						</div>
						<div>
							<input value={answerVerb} onChange={(e) => handleChangeAnswerVerb(e)} className="w-full text-sm" />
							<button className="buttonNormal mt-3 w-full" type="button">check answer</button>
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
