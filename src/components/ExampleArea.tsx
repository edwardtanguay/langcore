import { useContext } from "react";
import { AppContext } from "../AppContext";
import { DutchVerbExample } from "../types";
import { PiSpeakerHighFill } from "react-icons/pi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

interface IProps {
	examples: DutchVerbExample[]
}


export const ExampleArea = ({ examples }: IProps) => {
	const { dutchVerbs, setDutchVerbs } = useContext(AppContext);

	const handleExampleToggle = (example: DutchVerbExample) => {
		example.isOpen = !example.isOpen;
		const _dutchVerbs = structuredClone(dutchVerbs);
		setDutchVerbs(_dutchVerbs);
	}

	const handleGoToAudioSite = (example: DutchVerbExample) => {
		window.open(`https://translate.google.com/saved?sl=nl&tl=en&text=${example.dutch}&op=translate`, '_blank');
	}

	const handleToggleExampleLearned = (example: DutchVerbExample) => {
		// toggle
	}


	return (
		<div className="text-sm -mt-3">
			{examples.map(example => {
				return (
					<div key={example.dpodId} className="mt-3">
						<div onClick={() => handleExampleToggle(example)} className="border rounded-t-md py-1 px-2 bg-slate-200 italic text-slate-800 cursor-pointer border-r-slate-400 border-l-slate-400 border-t-slate-400">{example.english}</div>
						{example.isOpen && (
							<div className="border rounded-b-md py-1 px-2 bg-slate-300 font-bold border-r-slate-400 border-l-slate-400 border-b-slate-400">{example.dutch}<PiSpeakerHighFill onClick={() => handleGoToAudioSite(example)} className="cursor-pointer inline-block ml-1" /><MdOutlineCheckBoxOutlineBlank onClick={() => handleToggleExampleLearned(example)} className="cursor-pointer inline-block ml-1" /></div>
						)}
					</div>
				)
			})}
		</div>
	)
}