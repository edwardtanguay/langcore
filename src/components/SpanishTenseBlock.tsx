import { SpanishVerb, SpanishVerbTense } from "../types";

interface IProps {
	sv: SpanishVerb;
	title: string;
	tenseClass: string;
	tenseIdCode: SpanishVerbTense;
}

export const SpanishTenseBlock = ({ sv, title, tenseClass, tenseIdCode }: IProps) => {

	const buildTatoebaLink = (word: string) => {
		return `<a target="_blank" href="${`https://tatoeba.org/de/sentences/search?from=spa&query=%3D${word}&to=eng&page=1`}">${word}</a>`;
	}

	return (
		<>
			<tr>
				<td>{title}</td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].yo) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].tu) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].el) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].nosotros) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].vosotros) }}></td>
				<td className={tenseClass} dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative[tenseIdCode].ellos) }}></td>
			</tr>
			<tr>
				<td colSpan={7}>skdjfskdjf skdfj sdkfj sdkjf </td>
			</tr>
		</>
	)
}