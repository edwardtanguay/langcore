import { createContext, useEffect, useState } from "react";
import { DutchVerb } from "./types";
import { getDutchVerbs } from "./dataModel";

interface IAppContext {
	dutchVerbs: DutchVerb[];
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

	return (
		<AppContext.Provider
			value={{
				dutchVerbs
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
