import * as printerOutput from "./printerOutput.ts";
import { getDutchVerbs } from "./dataModel";

const dutchVerbs = getDutchVerbs();
const blank = "_______";

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
	let count = 1;
	r += `<div class="flex gap-[2rem] flex-wrap justify-between">`;
	for (const dv of dutchVerbs) {
		r += `
<div class="mb-2 text-[.7rem] no-break">
	<p>${count}. ${dv.english}</p>
	
	<div class="font-mono">
		<div class="mb-3">
		${blank}|${blank} ${blank}|${blank} ${blank}${blank}
		</div>
		<div class="text-[#ccc] text-[.7rem]">
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
