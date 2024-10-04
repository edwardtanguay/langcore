import { useContext } from "react";
import { AppContext } from "../AppContext";
import { DutchVerbExample } from "../types";
import { PiSpeakerHighFill } from "react-icons/pi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { useStoreActions, useStoreState } from "../store/hooks";

interface IProps {
	examples: DutchVerbExample[]
}


export const ExampleArea = ({ examples }: IProps) => {
	const { dutchVerbs, setDutchVerbs } = useContext(AppContext);
	const { learnedExamples } = useStoreState((state) => state.profileModel);
	const { addExampleLearned, removeExampleLearned } = useStoreActions((actions) => actions.profileModel);

	const handleExampleToggle = (example: DutchVerbExample) => {
		example.isOpen = !example.isOpen;
		const _dutchVerbs = structuredClone(dutchVerbs);
		setDutchVerbs(_dutchVerbs);
	}

	const handleGoToAudioSite = (example: DutchVerbExample) => {
		window.open(`https://translate.google.com/saved?sl=nl&tl=en&text=${example.dutch}&op=translate`, '_blank');
	}

	const handleToggleExampleLearned = (example: DutchVerbExample) => {
		const exampleIdCode = learnedExamples.find(m => m === example.dpodId);
		if (exampleIdCode) {
			removeExampleLearned(example.dpodId);
		} else {
			addExampleLearned(example.dpodId);
		}
	}



	return (
		<div className="text-sm -mt-3">
			{examples.map(example => {
				const exampleIsLearned = learnedExamples.find(m => m === example.dpodId);
				return (
					<div key={example.dpodId} className="mt-3">
						[TEST: exampleIsLearned: {exampleIsLearned ? 'TRUE' : 'false'}]
						<div onClick={() => handleExampleToggle(example)} className={`border rounded-t-md py-1 px-2 bg-slate-200 italic text-slate-800 cursor-pointer border-r-slate-400 border-l-slate-400 border-t-slate-400 ${exampleIsLearned ? 'bg-green-400' : ''}`}>{example.english}</div>
						{example.isOpen && (
							<div className={`border rounded-b-md py-1 px-2 bg-slate-300 font-bold border-r-slate-400 border-l-slate-400 border-b-slate-400`}>{example.dutch}<PiSpeakerHighFill onClick={() => handleGoToAudioSite(example)} className="cursor-pointer inline-block ml-1" />
								{exampleIsLearned && (
									<MdOutlineCheckBox onClick={() => handleToggleExampleLearned(example)} className="cursor-pointer inline-block ml-1" />
								)}
								{!exampleIsLearned && (
									<MdOutlineCheckBoxOutlineBlank onClick={() => handleToggleExampleLearned(example)} className="cursor-pointer inline-block ml-1" />
								)}
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}