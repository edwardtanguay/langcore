import { createContext, useEffect, useState } from "react";
import _dutchVerbs from './data/dutchVerbs.json';
import { DutchVerb } from "./types";

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
		_dutchVerbs.sort((a, b) => a.rank < b.rank ? 1 : -1);
		setDutchVerbs(_dutchVerbs);
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
