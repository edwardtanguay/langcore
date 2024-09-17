import _dutchVerbs from './data/dutchVerbs.json';
import { DutchVerb } from "./types";

export const getDutchVerbs = (): DutchVerb[] => {
	_dutchVerbs.sort((a, b) => a.rank < b.rank ? 1 : -1);
	return _dutchVerbs;
}