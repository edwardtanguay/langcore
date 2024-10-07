import { createContext, useEffect, useState } from "react";
import { DutchVerb } from "./types";
import { getDutchVerbs } from "./dataModel";
import { useStoreActions, useStoreState } from "./store/hooks";

interface IAppContext {
	dutchVerbs: DutchVerb[];
	randomDutchVerbs: DutchVerb[];
	setDutchVerbs: React.Dispatch<React.SetStateAction<DutchVerb[]>>;
	setRandomDutchVerbs: React.Dispatch<React.SetStateAction<DutchVerb[]>>;
	handleIsOpenToggle: (dutchVerb: DutchVerb) => void
}

interface IAppProvider {
	children: React.ReactNode;
}

export const randomizeVerbs = (
	arr: DutchVerb[]): DutchVerb[] => {
	return arr.sort(() => Math.random() - 0.5);
};


export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [dutchVerbs, setDutchVerbs] = useState<DutchVerb[]>([]);
	const [randomDutchVerbs, setRandomDutchVerbs] = useState<DutchVerb[]>([]);
	const { userVerbs } = useStoreState((state) => state.profileModel);
	const { setUserVerbs } = useStoreActions((actions) => actions.profileModel);

	useEffect(() => {
		setDutchVerbs(getDutchVerbs());
		setRandomDutchVerbs(randomizeVerbs(getDutchVerbs()));
	}, []);

	const getRandomNotAnsweredCorrectlyVerb = () => {
		
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
				randomDutchVerbs,
				setDutchVerbs,
				setRandomDutchVerbs,
				handleIsOpenToggle
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
