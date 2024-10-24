import { SpanishVerb, SpanishVerbTenseIdCode, SpanishTenseRule } from "../types"

interface IProps {
	sv: SpanishVerb,
	tenseIdCode: SpanishVerbTenseIdCode,
	pronounIdCode: string,
	pronounText: string,
	conjugationText: string,
	rule: SpanishTenseRule,
	devMode: boolean
}

const getAiExampleGenerationText = (
	conjugationText: string,
	pronounText: string,
	rule: SpanishTenseRule
) => {
	// if(rule.idCode === '')
	return `list 3 Spanish sentences using "${conjugationText}" and "${pronounText}" for ${rule.description} with English translations, without parentheses, each Spanish/English with a period at the end and the sentences separated by a semi-colon, like this: Sentence one.;Sentence two.`;
};


export const AiExampleGeneration = ({ sv, tenseIdCode, pronounIdCode, pronounText, conjugationText, rule, devMode }: IProps) => {
	return (
		<>
			{devMode && (
				<fieldset className="ml-3 border border-gray-800 rounded bg-gray-400" style={{ padding: '.3rem .6rem .6rem .6rem' }} >
					<legend className="bg-gray-700 px-1 py-0 text-gray-200">AI generation text</legend>
					<input className="w-full mb-2 bg-gray-300 text-[.6rem]" value={getAiExampleGenerationText(
						conjugationText,
						pronounText,
						rule
					)} />
					<div className="flex gap-2 h-[1rem]">
						<div style={{ whiteSpace: 'nowrap' }} className="justify-center align-middle">add to spanishExamples.spe.txt:</div>
						<input className="bg-gray-300 w-full" readOnly value={`${sv.spanish}; ${tenseIdCode}; ${pronounIdCode}; ${rule.idCode};`} />
					</div>
				</fieldset>
			)}
		</>
	)
}