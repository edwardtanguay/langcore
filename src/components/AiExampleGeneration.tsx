import { useStoreState } from "../store/hooks";
import { SpanishVerb, SpanishVerbTenseIdCode, SpanishTenseRule } from "../types"

interface IProps {
	sv: SpanishVerb,
	tenseIdCode: SpanishVerbTenseIdCode,
	pronounIdCode: string,
	pronounText: string,
	conjugationText: string,
	rule: SpanishTenseRule
}

export const AiExampleGeneration = ({ sv, tenseIdCode, pronounIdCode, pronounText, conjugationText, rule }: IProps) => {
	const { appMode } = useStoreState((state) => state.profileModel);
	return (
		<>
			{appMode === 'dev' && (
				<fieldset className="ml-3 border border-gray-800 rounded bg-gray-400" style={{ padding: '.3rem .6rem .6rem .6rem' }} >
					<legend className="bg-gray-700 px-1 py-0 text-gray-200">AI generation text</legend>
					<input className="w-full mb-2 bg-gray-300 text-[.6rem]" value="${getAiExampleGenerationText(
				conjugationText,
				pronounText,
				rule
			)}"/>
					<div className="flex gap-2 h-[1rem]">
						<div style={{ whiteSpace: 'nowrap' }} className="justify-center align-middle">add to spanishExamples.spe.txt:</div>
						<input className="bg-gray-300 w-full" readOnly value="${`${sv.spanish}; ${tenseIdCode}; ${pronounIdCode}; ${rule.idCode}; `}" />
					</div>
				</fieldset>
			)}
		</>
	)
}