// import { useStoreState } from "../store/hooks";
import { SpanishPronoun, SpanishVerb, SpanishVerbTenseIdCode } from "../types";
import { tenses } from '../spanish';
import { spanishPronounTexts } from "../types";
import { HtmlListVerbConjugations } from "./HtmlListVerbConjugations";
import { useStoreState } from "../store/hooks";
import { GenericExamples } from "./GenericExamples";
import { spanishPronounIdCodes } from "../types";
import { AiExampleGeneration } from "./AiExampleGeneration";
import { useState } from "react";

interface IProps {
	areaIdCode: string;
	sv: SpanishVerb;
	tenseIdCode: SpanishVerbTenseIdCode;
	pronoun: SpanishPronoun,
	pronounIndex: number
}

export const TenseExamplePanel = ({ areaIdCode, sv, tenseIdCode, pronoun, pronounIndex }: IProps) => {
	const { spanishExamples } = useStoreState((state) => state.profileModel);
	const { appMode } = useStoreState((state) => state.profileModel);
	const [localDevMode, setLocalDevMode] = useState(false);

	const tense = tenses[tenseIdCode];
	const tenseClass = `tense${tenseIdCode}`;
	const conjugationText = sv.conj.indicative[tenseIdCode][pronoun];
	const localSpanishExamples = spanishExamples.filter(
		(m) => m.verb === sv.spanish && m.tense === tenseIdCode
	);

	return (
		<tr className="bg-gray-300 text-[#222] font-mono text-xs">
			<td colSpan={7} style={{ outline: '5px solid #aaa', borderRadius: '.5rem', padding: '1rem' }} >
				{areaIdCode === 'main' && (
					<div className="mb-6">
						<h2 className="mb-3">1. <span className="font-bold">{tense.title}</span> tense regular verb endings:</h2>
						<HtmlListVerbConjugations tense={tense} verbType="ar" />
						<HtmlListVerbConjugations tense={tense} verbType="er" />
						<HtmlListVerbConjugations tense={tense} verbType="ir" />
					</div>
				)}

				<div className="flex justify-between">
					{areaIdCode === 'main' ? (
						<h2 className="mb-3">2. {tense.title} tense is used for:</h2>
					) : (
						<div className="flex justify-between">
							<h2 className="mb-3 text-[1rem]">Examples of <span className={`font-bold ${tenseClass}`}>{conjugationText}</span> (<span className={tenseClass}>{spanishPronounTexts[pronounIndex]}</span>) in various uses of the <span className="font-bold">{tense.title}</span> tense:</h2>
						</div>
					)}
					{appMode === 'dev' && (
						<button className="buttonNormalDarker" onClick={() => setLocalDevMode(!localDevMode)}>DEV</button>
					)}
				</div>

				<ul className="list-disc ml-6">
					{tense.rules.map((rule, index) => {

						const localSpanishExamplesWithReason = localSpanishExamples.filter(
							(m) => m.reason === rule.idCode
						);

						return (
							<div>
								<li key={index} className="mt-3 mb-1"> <span className="font-bold text-[.9rem]">{rule.description}</span> </li>
								<div>
									{localSpanishExamplesWithReason
										.filter((m) => m.pronoun === pronoun || areaIdCode === "main")
										.map((m, index) => (
											<div key={index} className="mb-2 w-fit">
												<div className="bg-gray-100 py-1 px-2 rounded-t-md">{m.english}</div>
												<div className={`tense${m.tense} bg-gray-200 text-yellow-300 py-1 px-2 rounded-b-md`}>{m.spanish}</div>
											</div>
										))}
									<GenericExamples rule={rule} areaIdCode={areaIdCode} />
								</div>

								<div>
									<AiExampleGeneration
										sv={sv}
										tenseIdCode={tenseIdCode}
										pronounIdCode={spanishPronounIdCodes[pronounIndex]}
										pronounText={spanishPronounTexts[pronounIndex]}
										conjugationText={conjugationText}
										rule={rule}
										devMode={localDevMode}
									/>
								</div>
							</div>
						)
					})}
				</ul>


			</td>
		</tr >



	)
}