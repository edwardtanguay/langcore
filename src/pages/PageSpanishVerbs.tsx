import { useStoreState } from "../store/hooks";

export const PageSpanishVerbs = () => {
	const { spanishVerbs } = useStoreState((state) => state.profileModel);

	return (
		<>
			<p>There are {spanishVerbs.length} Spanish verbs.</p>
		</>
	)
}
