import * as printerOutput from "./printerOutput.ts";
import { getDutchVerbs } from "./dataModel";
import * as qstr from "./qtools/qstr.ts";
import { DutchVerb } from "./types.ts";

const dutchVerbs = getDutchVerbs();
const blank = "_".repeat(50);

export const print = (idCode: string) => {
	switch (idCode) {
		case "testAll":
			return printerOutput.printTestAll();
		case "testExamples":
			return printerOutput.printTestExamples();
		default:
			return "unknown view";
	}
};

export const pageHeader = (title: string) => {
	return `
<div style="font-size: .9rem; margin-bottom: -.5rem; font-style: italic;color: #555">Edward's Language Core Site</div>
<div style="font-size: 1.5rem; margin-bottom: -.3rem">${title}</div>	
<div style="font-size: .9rem; margin-bottom: 1rem; font-style: italic">https://langcore.vercel.app/dutchVerbs</div>	
	`;
};

export const printTestAll = () => {
	let r = "";
	r += printerOutput.pageHeader("Dutch Verbs - Basic Tenses");
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

const blankOutText = (dv: DutchVerb, text: string) => {
	const verbParts = qstr.breakIntoParts(dv.mainTestAnswer, " ");
	verbParts.reverse();
	for (const verbPart of verbParts) {
		text = text.replace(verbPart, '______________');
	}
	return text;
};

export const printTestExamples = () => {
	let r = "";
	r += printerOutput.pageHeader("Verb Example Test");
	r += `<div class="">`;
	let count = 1;
	qstr.randomizeInPlaceArray(dutchVerbs);
	for (const dv of dutchVerbs) {
		qstr.randomizeInPlaceArray(dv.examples);
		r += `<span>(${count}) ${dv.examples
			.map((example) => {
				const blankedDutch = blankOutText(dv, example.dutch);
				return ` <span class="font-semibold">${example.english}</span> <span>${blankedDutch}</span> `;
			})
			.join(" ")}</span> <span class="text-sm">[${dv.mainTestAnswer}] </span>`;
		count++;
	}
	r += `</div>`;
	return r;
};
