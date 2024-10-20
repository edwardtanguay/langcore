import { useStoreState } from "../store/hooks";
import { SpanishVerb, SpanishVerbTenseIdCode, SpanishTenseRule } from "../types"

interface IProps {
	sv: SpanishVerb,
	tenseIdCode: SpanishVerbTenseIdCode,
	pronounIdCode: string,
	pronounText: string,
	conjugationText: string,
	rule: SpanishTenseRule
}

export const AiExampleGeneration = ({ sv, tenseIdCode, pronounIdCode, pronounText, conjugationText, rule }: IProps) => {
	const { appMode } = useStoreState((state) => state.profileModel);
	return (
		<>
			{appMode === 'dev' && (
				<p>okok</p>
			)}
		</>
	)
}