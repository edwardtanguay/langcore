import * as printerOutput from "./printerOutput.ts";
import { getDutchVerbs } from "./dataModel";

const dutchVerbs = getDutchVerbs();

export const print = (idCode: string) => {
	switch (idCode) {
		case "testAll":
			return printerOutput.printTestAll();
		default:
			return "unknown view";
	}
};

export const pageHeader = () => {
	return `
<div style="font-size: .9rem; margin-bottom: -.5rem; font-style: italic;color: #555">Edward's Language Core Site</div>
<div style="font-size: 1.5rem; margin-bottom: -.3rem">Dutch Verbs - Test All</div>	
<div style="font-size: .9rem; margin-bottom: .5rem; font-style: italic">https://langcore.vercel.app/dutchVerbs</div>	
	`;
};

export const printTestAll = () => {
	let r = "";
	r += printerOutput.pageHeader();
	let count = 1;
	for (const dv of dutchVerbs) {
		r += `
<div class="mb-6">
	<p>${count}. ${dv.english}</p>
	<div>
	 ${dv.present} - ${dv.infinitive} - ${dv.imperfectSingular} - ${dv.imperfectPlural} - ${dv.participleHelper} ${dv.participleVerb}
	</div>
</div>
`;
		count++;
	}
	return r;
};
