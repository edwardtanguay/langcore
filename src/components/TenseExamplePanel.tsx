import { htmlListVerbConjugations } from "../spanish";
import { useStoreState } from "../store/hooks";
import { SpanishPronoun, SpanishTenseRule, SpanishVerb, SpanishVerbTenseIdCode } from "../types";
import { tenses } from '../spanish';
import { spanishPronounTexts } from "../types";
import { spanishPronounIdCodes } from "../types";

interface IProps {
	areaIdCode: string;
	sv: SpanishVerb;
	tenseIdCode: SpanishVerbTenseIdCode;
	pronoun: SpanishPronoun,
	pronounIndex: number
}

export const TenseExamplePanel = ({ areaIdCode, sv, tenseIdCode, pronoun, pronounIndex }: IProps) => {
	const { appMode } = useStoreState((state) => state.profileModel);
	const { spanishExamples } = useStoreState((state) => state.profileModel);

	const tense = tenses[tenseIdCode];
	const tenseClass = `tense${tenseIdCode}`;
	const conjugationText = sv.conj.indicative[tenseIdCode][pronoun];
	const localSpanishExamples = spanishExamples.filter(
		(m) => m.verb === sv.spanish && m.tense === tenseIdCode
	);


	const genericExamples = (rule: SpanishTenseRule, areaId: string) => {
		if (areaId === "main") {
			return `
			${rule.examples
					.map((example) => {
						return `<li class="text-gray-600 italic">${example.spanish}
						<ul class="list-disc ml-6">
							<li>${example.english}</li>
						</ul>
					</li>`;
					})
					.join("")}
	`;
		} else {
			return "";
		}
	};


	const getAiExampleGenerationText = (
		conjugationText: string,
		pronounText: string,
		rule: SpanishTenseRule
	) => {
		return `list 3 Spanish sentences using &quot;${conjugationText}&quot; and &quot;${pronounText}&quot; for ${rule.description} with English translations, without parentheses, each Spanish/English with a period at the end and the sentences separated by a semi-colon, like this: Sentence one.;Sentence two.`;
	};


	const displayDevModeBaseTextForAiExampleGeneration = (
		appMode: string,
		sv: SpanishVerb,
		tenseIdCode: SpanishVerbTenseIdCode,
		pronounIdCode: string,
		pronounText: string,
		conjugationText: string,
		rule: SpanishTenseRule
	) => {
		if (appMode === "dev") {
			return `<fieldset class="ml-3 border border-gray-800 rounded bg-gray-400" style="padding: .3rem .6rem .6rem .6rem">
					<legend class="bg-gray-700 px-1 py-0 text-gray-200">AI generation text</legend>
					<input class="w-full mb-2 bg-gray-300 text-[.6rem]" value="${getAiExampleGenerationText(
				conjugationText,
				pronounText,
				rule
			)}"/>
					<div class="flex gap-2 h-[1rem]">
						<div style="white-space: nowrap" class="justify-center align-middle">add to spanishExamples.spe.txt:</div>
						<input class="bg-gray-300 w-full" readonly value="${`${sv.spanish}; ${tenseIdCode}; ${pronounIdCode}; ${rule.idCode}; `}"/> 
					</div>
				</fieldset>
`;
		} else {
			return "";
		}
	};


	return (
		<tr className="bg-gray-300 text-[#222] font-mono text-xs">
			<td colSpan={7} style={{ outline: '5px solid #aaa', borderRadius: '.5rem', padding: '1rem' }} >
				{areaIdCode === 'main' && (
					<div className="mb-6">
						<h2 className="mb-3">1. <span className="font-bold">${tense.title}</span> tense regular verb endings:</h2>
						${htmlListVerbConjugations(tense, "ar")}
						${htmlListVerbConjugations(tense, "er")}
						${htmlListVerbConjugations(tense, "ir")}
					</div>
				)}

				{areaIdCode === 'main' ? (
					<h2 className="mb-3">2. {tense.title} tense is used for:</h2>
				) : (
					<div className="flex justify-between">
						<h2 className="mb-3">Examples of <span className={`font-bold ${tenseClass}`}>{conjugationText}</span> (<span className={tenseClass}>{spanishPronounTexts[pronounIndex]}</span>) in various uses of the TITLE tense:</h2>
					</div>
				)}



				<ul className="list-disc ml-6">
					{tense.rules
						.map((rule, index) => {
							const reasonElement =
								appMode === "dev" ? `<span class="text-gray-500" ></span>` : "";
							const localSpanishExamplesWithReason = localSpanishExamples.filter(
								(m) => m.reason === rule.idCode
							);

							if (
								areaIdCode === "main" ||
								(areaIdCode !== "main" && rule.type === "general")
							) {
								return `
			<li key=${index} class="mt-3 mb-1"> <span class="font-bold text-[.9rem]">${rule.description
									}</span> ${reasonElement}</li>
			<ul class="list-disc ml-6">
				${localSpanishExamplesWithReason
										.filter((m) => m.pronoun === pronoun || areaIdCode === "main")
										.map((m) => {
											return `
						<li class="mb-1"><span class="tense${m.tense}">${m.spanish}</span>
							<ul class="list-disc ml-6">
								<li>${m.english}</li>
							</ul>
						</li>`;
										})
										.join("")}
			${genericExamples(rule, areaIdCode)}
			</ul>
			<div>
				${displayDevModeBaseTextForAiExampleGeneration(
											appMode,
											sv,
											tenseIdCode,
											spanishPronounIdCodes[pronounIndex],
											spanishPronounTexts[pronounIndex],
											conjugationText,
											rule
										)}
			</div>
			`;
							}
						})
						.join("")}
				</ul>

				<p className="mt-4 pt-3 border-t border-slate-400">look for examples at Tatoeba: <a target="_blank" href="${buildTatoebaUrl(
		conjugationText
	)}" className="${tenseClass}">${conjugationText}</a></p>
			</td>
		</tr >



	)
}