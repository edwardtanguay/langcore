import { createContext, useEffect, useState } from "react";
import { DutchVerb } from "./types";
import { getDutchVerbs } from "./dataModel";

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

	useEffect(() => {
		setDutchVerbs(getDutchVerbs())
	}, []);

	const handleIsOpenToggle = (dutchVerb: DutchVerb) => {
		dutchVerb.isOpen = !dutchVerb.isOpen;
		const _dutchVerbs = structuredClone(dutchVerbs);
		setDutchVerbs(_dutchVerbs);
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
