import { createContext, useState } from "react";
import { DutchVerb } from "./types";
import { getDutchVerbs } from "./dataModel";
import { useStoreActions, useStoreState } from "./store/hooks";

interface IAppContext {
	dutchVerbs: DutchVerb[];
	setDutchVerbs: React.Dispatch<React.SetStateAction<DutchVerb[]>>;
	handleIsOpenToggle: (dutchVerb: DutchVerb) => void;
	getRandomNotAnsweredCorrectlyVerb: () => DutchVerb;
}

interface IAppProvider {
	children: React.ReactNode;
}

const initialDutchVerbs = getDutchVerbs();

const getRandomVerb = (dutchVerbs: DutchVerb[]): DutchVerb => {
	console.log(dutchVerbs.map(m => m.english));
	const randomIndex = Math.floor(Math.random() * dutchVerbs.length);
	return dutchVerbs[randomIndex];
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [dutchVerbs, setDutchVerbs] = useState<DutchVerb[]>(initialDutchVerbs);
	const { userVerbs, verbsTestedCorrect } = useStoreState((state) => state.profileModel);
	const { setUserVerbs } = useStoreActions((actions) => actions.profileModel);

	const getRandomNotAnsweredCorrectlyVerb = () => {
		console.log(verbsTestedCorrect);
		const notAnsweredVerbs = dutchVerbs.filter(m => !verbsTestedCorrect.includes(m.dpodId) )
		const randomVerb = getRandomVerb(notAnsweredVerbs);
		return randomVerb;
	}

	const handleIsOpenToggle = (dutchVerb: DutchVerb) => {
		dutchVerb.isOpen = !dutchVerb.isOpen;
		const _dutchVerbs = structuredClone(dutchVerbs);
		setDutchVerbs(_dutchVerbs);

		// update number of times opened
		if (dutchVerb.isOpen) {
			const userVerb = userVerbs.find(m => m.dpodId === dutchVerb.dpodId);
			if (userVerb) {
				userVerb.timesOpened++;
				setUserVerbs(userVerbs);
			} else {
				userVerbs.push({
					dpodId: dutchVerb.dpodId,
					timesOpened: 1
				})
			}
		}
	}

	return (
		<AppContext.Provider
			value={{
				dutchVerbs,
				// randomDutchVerbs,
				setDutchVerbs,
				// setRandomDutchVerbs,
				handleIsOpenToggle,
				getRandomNotAnsweredCorrectlyVerb
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
