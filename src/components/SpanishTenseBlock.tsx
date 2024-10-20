import { useState } from "react";
import { SpanishVerb, SpanishVerbTenseIdCode } from "../types";
import { showTenseExamplePanel } from "../spanish";
import { useStoreState } from "../store/hooks";
import { buildTatoebaLinkElement } from "../spanish";
import { SpanishExampleManager } from "../classes/spanishExampleManager";
import { TenseExamplePanel } from "./TenseExamplePanel";

const _initialShowInfos = {
	main: false,
	yo: false,
	tu: false,
	el: false,
	nosotros: false,
	vosotros: false,
	ellos: false,
}

interface IProps {
	sv: SpanishVerb;
	title: string;
	tenseIdCode: SpanishVerbTenseIdCode;
}

export const SpanishTenseBlock = ({ sv, title, tenseIdCode }: IProps) => {
	const [showInfos, setShowInfos] = useState(_initialShowInfos);
	const { appMode } = useStoreState((state) => state.profileModel);
	const { spanishExamples } = useStoreState((state) => state.profileModel);
	const { exampleCountObject } = useStoreState((state) => state.profileModel);

	const tenseClass = "tense" + tenseIdCode;

	const handleToggleShowInfos = (areaIdCode: string) => {
		const _showInfos = structuredClone(_initialShowInfos);
		switch (areaIdCode) {
			case 'main':
				if (showInfos.main) {
					_showInfos.main = false;
				} else {
					_showInfos.main = true;
				}
				break;
			case 'yo':
				if (showInfos.yo) {
					_showInfos.yo = false;
				} else {
					_showInfos.yo = true;
				}
				break;
			case 'tu':
				if (showInfos.tu) {
					_showInfos.tu = false;
				} else {
					_showInfos.tu = true;
				}
				break;
		}
		console.log(111, _showInfos);
		setShowInfos(_showInfos);
	}

	return (
		<>
			<tr className="text-[.8rem] verbBlock">
				<td><span onClick={() => handleToggleShowInfos('main')} className="cursor-pointer select-none hover:underline" style={{ fontWeight: showInfos.main ? 'bold' : 'normal' }}>{title}</span></td>

				<td><span className={`${tenseClass} cursor-pointer select-none hover:underline`} onClick={() => handleToggleShowInfos('yo')} style={{ fontWeight: showInfos.yo ? 'bold' : 'normal' }}>{sv.conj.indicative[tenseIdCode].yo}</span><sup className={SpanishExampleManager.getCount(sv.spanish, tenseIdCode, "yo", exampleCountObject) === 0 ? 'zero' : 'hasValue'}>{SpanishExampleManager.getCount(sv.spanish, tenseIdCode, "yo", exampleCountObject)}</sup></td>

				<td><span className={`${tenseClass} cursor-pointer select-none hover:underline`} onClick={() => handleToggleShowInfos('tu')} style={{ fontWeight: showInfos.tu ? 'bold' : 'normal' }}>{sv.conj.indicative[tenseIdCode].tu}</span><sup className={SpanishExampleManager.getCount(sv.spanish, tenseIdCode, "tu", exampleCountObject) === 0 ? 'zero' : 'hasValue'}>{SpanishExampleManager.getCount(sv.spanish, tenseIdCode, "tu", exampleCountObject)}</sup></td>

				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLinkElement(sv.conj.indicative[tenseIdCode].el) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLinkElement(sv.conj.indicative[tenseIdCode].nosotros) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLinkElement(sv.conj.indicative[tenseIdCode].vosotros) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLinkElement(sv.conj.indicative[tenseIdCode].ellos) }}></td>
			</tr>
			{showInfos.main && (
				<TenseExamplePanel areaIdCode="main" sv={sv} tenseIdCode={tenseIdCode} pronoun="yo" pronounIndex={0} />
			)}
			{showInfos.yo && (
				<TenseExamplePanel areaIdCode="yo" sv={sv} tenseIdCode={tenseIdCode} pronoun="yo" pronounIndex={0} />
			)}
			{showInfos.tu && (
				<TenseExamplePanel areaIdCode="tu" sv={sv} tenseIdCode={tenseIdCode} pronoun="tu" pronounIndex={1} />
			)}
		</>
	)
}