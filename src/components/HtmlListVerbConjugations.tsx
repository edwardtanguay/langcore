import { SpanishPronoun, SpanishTense, SpanishVerbType } from "../types";

interface IProps {
	tense: SpanishTense,
	verbType: SpanishVerbType
}

export const HtmlListVerbConjugations = ({ tense, verbType }: IProps) => {
	const tenseClass = `tense${tense.idCode}`;
	return (
		<div className="ml-3">
			<span>{verbType.toUpperCase()}: </span>
			{Object.entries(tense.endings[verbType as SpanishVerbType]).map((entry, index) => {
				const pronoun = entry[0] as SpanishPronoun;
				const ending = entry[1];
				return (<span key={index} className={tenseClass}><span className="font-bold">{tense.prefixes[pronoun]}</span> -{ending}</span>)
			})}
		</div>
	)
};