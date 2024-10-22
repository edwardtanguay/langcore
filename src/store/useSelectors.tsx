import { useStoreState } from "./hooks";

export const useSelectors = () => {
	const { dutchVerbs } = useStoreState((state) => state.profileModel);

	const getTestNumber = () => {
		return 999;
	}
	const getTestMessage = () => {
		return `There are ${dutchVerbs.length} verbs.`
	}

	return [getTestNumber, getTestMessage];
}