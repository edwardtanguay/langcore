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

export const pageHeader = () => {
	return `
<div style="font-size: 1.2rem; margin-bottom: -.5rem">Dutch Verbs - Test All</div>	
<div style="font-size: .9rem; margin-bottom: .5rem; font-style: italic">Edward's Language Core Site</div>	
	`;
}

export const printTestAll = () => {
	let r = '';
	r += printerOutput.pageHeader();
	let count = 1;
	for (const dutchVerb of dutchVerbs) {
		r += `<p>${count}. ${dutchVerb.english}</p>`;
		count++;
	}
	return r;
};
