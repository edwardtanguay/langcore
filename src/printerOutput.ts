import * as printerOutput from "./printerOutput.ts";
import { getDutchVerbs } from "./dataModel";

const dutchVerbs = getDutchVerbs();

export const print = (idCode: string) => {
	switch (idCode) {
		case "testAll":
			return printerOutput.printTestAll();
		default:
			return 'unknown view';
	}
};

export const printTestAll = () => {
	let r = '';
	let count = 1;
	for (const dutchVerb of dutchVerbs) {
		r += `<p>${count}. ${dutchVerb.english}</p>`;
		count++;
	}
	return r;
};
