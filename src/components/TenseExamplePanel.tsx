import { showTenseExamplePanel } from "../spanish";
import { useStoreState } from "../store/hooks";
import { SpanishPronoun, SpanishVerb, SpanishVerbTenseIdCode } from "../types";

interface IProps {
	sv: SpanishVerb;
	tenseIdCode: SpanishVerbTenseIdCode;
	pronoun: SpanishPronoun,
	pronounIndex: number
}

export const TenseExamplePanel = ({ sv, tenseIdCode, pronoun, pronounIndex }: IProps) => {
	const { appMode } = useStoreState((state) => state.profileModel);
	const { spanishExamples } = useStoreState((state) => state.profileModel);
	return (
		<tr className="bg-gray-300 text-[#222] font-mono text-xs">
			<td colSpan={7} style={{ outline: '5px solid #aaa', borderRadius: '.5rem', padding: '1rem' }} >
				<div dangerouslySetInnerHTML={{ __html: showTenseExamplePanel('main', sv, tenseIdCode, appMode, spanishExamples, pronoun, pronounIndex) }}></div>
			</td>
		</tr>
	)
}