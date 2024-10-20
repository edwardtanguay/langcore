// import { useStoreState } from "../store/hooks";
import { SpanishPronoun, SpanishVerb, SpanishVerbTenseIdCode } from "../types";
import { tenses } from '../spanish';
import { spanishPronounTexts } from "../types";
import { HtmlListVerbConjugations } from "./HtmlListVerbConjugations";
// import { spanishPronounIdCodes } from "../types";

interface IProps {
	areaIdCode: string;
	sv: SpanishVerb;
	tenseIdCode: SpanishVerbTenseIdCode;
	pronoun: SpanishPronoun,
	pronounIndex: number
}

export const TenseExamplePanel = ({ areaIdCode, sv, tenseIdCode, pronoun, pronounIndex }: IProps) => {
	// const { appMode } = useStoreState((state) => state.profileModel);
	// const { spanishExamples } = useStoreState((state) => state.profileModel);

	const tense = tenses[tenseIdCode];
	const tenseClass = `tense${tenseIdCode}`;
	const conjugationText = sv.conj.indicative[tenseIdCode][pronoun];
	// const localSpanishExamples = spanishExamples.filter(
	// 	(m) => m.verb === sv.spanish && m.tense === tenseIdCode
	// );



	return (
		<tr className="bg-gray-300 text-[#222] font-mono text-xs">
			<td colSpan={7} style={{ outline: '5px solid #aaa', borderRadius: '.5rem', padding: '1rem' }} >
				{areaIdCode === 'main' && (
					<div className="mb-6">
						<h2 className="mb-3">1. <span className="font-bold">{tense.title}</span> tense regular verb endings:</h2>
						<HtmlListVerbConjugations tense={tense} verbType="ar"/>
						<HtmlListVerbConjugations tense={tense} verbType="er"/>
						<HtmlListVerbConjugations tense={tense} verbType="ir"/>
					</div>
				)}

				{areaIdCode === 'main' ? (
					<h2 className="mb-3">2. {tense.title} tense is used for:</h2>
				) : (
					<div className="flex justify-between">
						<h2 className="mb-3">Examples of <span className={`font-bold ${tenseClass}`}>{conjugationText}</span> (<span className={tenseClass}>{spanishPronounTexts[pronounIndex]}</span>) in various uses of the TITLE tense:</h2>
					</div>
				)}



			</td>
		</tr >



	)
}