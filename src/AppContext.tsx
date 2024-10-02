import { createContext, useEffect, useState } from "react";
import { DutchVerb } from "./types";
import { getDutchVerbs } from "./dataModel";
import { useStoreActions, useStoreState } from "./store/hooks";

interface IAppContext {
	dutchVerbs: DutchVerb[];
	setDutchVerbs: React.Dispatch<React.SetStateAction<DutchVerb[]>>;
	handleIsOpenToggle: (dutchVerb: DutchVerb) => void
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [dutchVerbs, setDutchVerbs] = useState<DutchVerb[]>([]);
	const { userVerbs } = useStoreState((state) => state.profileModel);
	const { setUserVerbs } = useStoreActions((actions) => actions.profileModel);

	useEffect(() => {
		setDutchVerbs(getDutchVerbs())
	}, []);

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
			}
		}
	}

	return (
		<AppContext.Provider
			value={{
				dutchVerbs,
				setDutchVerbs,
				handleIsOpenToggle
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
