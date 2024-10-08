import * as printerOutput from "./printerOutput.ts";
import { getDutchVerbs } from "./dataModel";

const dutchVerbs = getDutchVerbs();
const blank = "_".repeat(50);

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
<div style="font-size: 1.5rem; margin-bottom: -.3rem">Dutch Verbs - Basic Tenses</div>	
<div style="font-size: .9rem; margin-bottom: 1rem; font-style: italic">https://langcore.vercel.app/dutchVerbs</div>	
	`;
};

export const printTestAll = () => {
	let r = "";
	r += printerOutput.pageHeader();
	r += `<div class="flex gap-x-[2rem] flex-wrap justify-between">`;
	let count = 1;
	for (const dv of dutchVerbs) {
		r += `
<div class="text-[.7rem] no-break mb-2">
	<div class="font-mono">
		<div>
		${blank}
		</div>
		<div class="font-bold">${count}. ${dv.english}</div>
		<div class="text-[#999] text-[.7rem] font-sans">
		${dv.present}/${dv.infinitive} - ${dv.imperfectSingular}/${dv.imperfectPlural} - ${dv.participleHelper} ${dv.participleVerb}
		</div>
	</div>
</div>
`;
		count++;
	}
	r += `</div>`;
	return r;
};
