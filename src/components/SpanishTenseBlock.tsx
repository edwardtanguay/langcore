import { useState } from "react";
import { SpanishVerb, SpanishVerbTense } from "../types";
import { getTenseHelp } from "../spanish";

interface IProps {
	sv: SpanishVerb;
	title: string;
	tenseClass: string;
	tenseIdCode: SpanishVerbTense;
}

export const SpanishTenseBlock = ({ sv, title, tenseClass, tenseIdCode }: IProps) => {
	const [showInfo, setShowInfo] = useState(false);

	const buildTatoebaLink = (word: string) => {
		return `<a target="_blank" class="hover:underline" href="${`https://tatoeba.org/de/sentences/search?from=spa&query=%3D${word}&to=eng&page=1`}">${word}</a>`;
	}

	const handleToggleShowInfo = () => {
		setShowInfo(!showInfo);
	}

	return (
		<>
			<tr>
				<td><span onClick={handleToggleShowInfo} className="cursor-pointer select-none hover:underline">{title}</span></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].yo) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].tu) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].el) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].nosotros) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].vosotros) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].ellos) }}></td>
			</tr>
			{showInfo && (
				<tr className="bg-yellow-200 text-[#222] font-mono text-xs">
					<td colSpan={7} dangerouslySetInnerHTML={{__html: getTenseHelp(tenseIdCode)}}></td>
				</tr>
			)}
		</>
	)
}