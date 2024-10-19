import { useState } from "react";
import { SpanishVerb, SpanishVerbTenseIdCode } from "../types";
import { getTenseHelp } from "../spanish";
import { useStoreState } from "../store/hooks";
import { buildTatoebaLinkElement } from "../spanish";

interface IProps {
	sv: SpanishVerb;
	title: string;
	tenseIdCode: SpanishVerbTenseIdCode;
}

export const SpanishTenseBlock = ({ sv, title, tenseIdCode }: IProps) => {
	const [showInfo, setShowInfo] = useState(false);
	const { appMode } = useStoreState((state) => state.profileModel);

	const tenseClass = "tense" + tenseIdCode;

	const handleToggleShowInfo = () => {
		setShowInfo(!showInfo);
	}

	return (
		<>
			<tr className="text-[.8rem]">
				<td><span onClick={handleToggleShowInfo} className="cursor-pointer select-none hover:underline">{title}</span></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLinkElement(sv.conj.indicative[tenseIdCode].yo) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLinkElement(sv.conj.indicative[tenseIdCode].tu) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLinkElement(sv.conj.indicative[tenseIdCode].el) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLinkElement(sv.conj.indicative[tenseIdCode].nosotros) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLinkElement(sv.conj.indicative[tenseIdCode].vosotros) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLinkElement(sv.conj.indicative[tenseIdCode].ellos) }}></td>
			</tr>
			{showInfo && (
				<tr className="bg-gray-300 text-[#222] font-mono text-xs">
					<td colSpan={7} style={{ outline: '5px solid #aaa', borderRadius: '.5rem', padding: '1rem' }} >
						<div dangerouslySetInnerHTML={{ __html: getTenseHelp(sv, tenseIdCode, appMode) }}></div>
					</td>
				</tr>
			)}
		</>
	)
}