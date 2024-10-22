import { DutchVerb } from "../types";
import { useStoreState } from "./hooks";

export const useSelectors = () => {
	const { dutchVerbs } = useStoreState((state) => state.profileModel);
	const { verbsTestedCorrect } = useStoreState((state) => state.profileModel);

	const getTestNumber = (): number => {
		return verbsTestedCorrect.length;
	}
	const getTestMessage = () => {
		return `There are ${dutchVerbs.length} verbs.`
	}

	const getRandomVerb = (dutchVerbs: DutchVerb[]): DutchVerb => {
		const randomIndex = Math.floor(Math.random() * dutchVerbs.length);
		return dutchVerbs[randomIndex];
	}
	const getRandomNotAnsweredCorrectlyVerb = () => {
		const notAnsweredVerbs = dutchVerbs.filter(m => !verbsTestedCorrect.includes(m.dpodId))
		const randomVerb = getRandomVerb(notAnsweredVerbs);
		return randomVerb;
	}

	return { getTestNumber, getTestMessage, getRandomNotAnsweredCorrectlyVerb };
	// return [getTestNumber, getTestMessage];
}



