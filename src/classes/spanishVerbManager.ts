import {
	PersonalPronouns,
	SpanishVerb,
	SpanishVerbTenseIdCode,
} from "../types";
import * as qstr from "../qtools/qstr";
import { tenses } from "../spanish";

export class SpanishVerbManager {
	private spanishVerbText = "";
	private verbLines: string[] = [];
	private spanishVerbs: SpanishVerb[] = [];

	constructor(spanishVerbText: string) {
		this.spanishVerbText = spanishVerbText;
		this.verbLines = qstr.convertStringBlockToLines(this.spanishVerbText);
		this.parseVerbs();
	}

	private create_1PRPA(verbType: string, verbBase: string) {
		if (verbType === "ar") {
			return `${verbBase}ando`;
		} else {
			return `${verbBase}iendo`;
		}
	}

	private create_1PAPA(verbType: string, verbBase: string) {
		if (verbType === "ar") {
			return `${verbBase}ado`;
		} else {
			return `${verbBase}ido`;
		}
	}

	private createVerbTenses(
		verbType: string,
		verbBase: string,
		verbTenseIdCode: SpanishVerbTenseIdCode
	): PersonalPronouns {
		switch (verbType) {
			case "ar":
				return {
					yo: `${tenses[verbTenseIdCode].prefixes.yo} ${verbBase}${tenses[verbTenseIdCode].endings.ar.yo}`.trim(),
					tu: `${tenses[verbTenseIdCode].prefixes.tu} ${verbBase}${tenses[verbTenseIdCode].endings.ar.tu}`.trim(),
					el: `${tenses[verbTenseIdCode].prefixes.el} ${verbBase}${tenses[verbTenseIdCode].endings.ar.el}`.trim(),
					nosotros:
						`${tenses[verbTenseIdCode].prefixes.nosotros} ${verbBase}${tenses[verbTenseIdCode].endings.ar.nosotros}`.trim(),
					vosotros:
						`${tenses[verbTenseIdCode].prefixes.vosotros} ${verbBase}${tenses[verbTenseIdCode].endings.ar.vosotros}`.trim(),
					ellos: `${tenses[verbTenseIdCode].prefixes.ellos} ${verbBase}${tenses[verbTenseIdCode].endings.ar.ellos}`.trim(),
				};
			case "er":
				return {
					yo: `${tenses[verbTenseIdCode].prefixes.yo} ${verbBase}${tenses[verbTenseIdCode].endings.er.yo}`.trim(),
					tu: `${tenses[verbTenseIdCode].prefixes.tu} ${verbBase}${tenses[verbTenseIdCode].endings.er.tu}`.trim(),
					el: `${tenses[verbTenseIdCode].prefixes.el} ${verbBase}${tenses[verbTenseIdCode].endings.er.el}`.trim(),
					nosotros:
						`${tenses[verbTenseIdCode].prefixes.nosotros} ${verbBase}${tenses[verbTenseIdCode].endings.er.nosotros}`.trim(),
					vosotros:
						`${tenses[verbTenseIdCode].prefixes.vosotros} ${verbBase}${tenses[verbTenseIdCode].endings.er.vosotros}`.trim(),
					ellos: `${tenses[verbTenseIdCode].prefixes.ellos}${verbBase}${tenses[verbTenseIdCode].endings.er.ellos}`.trim(),
				};
			case "ir":
			default:
				return {
					yo: `${tenses[verbTenseIdCode].prefixes.yo} ${verbBase}${tenses[verbTenseIdCode].endings.ir.yo}`.trim(),
					tu: `${tenses[verbTenseIdCode].prefixes.tu} ${verbBase}${tenses[verbTenseIdCode].endings.ir.tu}`.trim(),
					el: `${tenses[verbTenseIdCode].prefixes.el} ${verbBase}${tenses[verbTenseIdCode].endings.ir.el}`.trim(),
					nosotros:
						`${tenses[verbTenseIdCode].prefixes.nosotros} ${verbBase}${tenses[verbTenseIdCode].endings.ir.nosotros}`.trim(),
					vosotros:
						`${tenses[verbTenseIdCode].prefixes.vosotros} ${verbBase}${tenses[verbTenseIdCode].endings.ir.vosotros}`.trim(),
					ellos: `${tenses[verbTenseIdCode].prefixes.ellos} ${verbBase}${tenses[verbTenseIdCode].endings.ir.ellos}`.trim(),
				};
		}
	}

	private getVerbLineParts(line: string): {
		verb: string;
		english: string;
		rank: number;
	} {
		const parts = qstr.breakIntoParts(line, ";");
		return {
			verb: parts[0],
			english: parts[1],
			rank: parts[2] ? Number(parts[2]) : 3.0,
		};
	}

	private parseVerbs() {
		for (const _line of this.verbLines) {
			const line = _line.trim();
			if (line !== "" && line.includes(";")) {
				// e.g. "cantar; sing; 3.8"
				const { verb, english, rank } = this.getVerbLineParts(line);
				const verbType = verb.slice(-2); // ar, er, ir
				const verbBase = verb.slice(0, -2); // habl
				const spanishVerb: SpanishVerb = {
					spanish: verb,
					english,
					rank,
					verbBase,
					verbType,
					conjugation1Url: `https://www.123teachme.com/spanish_verb_conjugation/${verb}`,
					conjugation2Url: `https://conjugator.reverso.net/conjugation-spanish-verb-${verb}.html`,
					conj: {
						base: {
							_1INFI: verb,
							_1PRPA: this.create_1PRPA(verbType, verbBase),
							_1PAPA: this.create_1PAPA(verbType, verbBase),
						},
						indicative: {
							_2PRES: this.createVerbTenses(
								verbType,
								verbBase,
								"_2PRES"
							),
							_2IMPE: this.createVerbTenses(
								verbType,
								verbBase,
								"_2IMPE"
							),
							_2PRET: this.createVerbTenses(
								verbType,
								verbBase,
								"_2PRET"
							),
							_2PRPE: this.createVerbTenses(
								verbType,
								verbBase,
								"_2PRPE"
							),
							_2PAPE: this.createVerbTenses(
								verbType,
								verbBase,
								"_2PAPE"
							),
							_2PREP: "hablarás", // Present (You speak)
							_2FUIN: "hablaré", // Future (I will speak)
							_2FUTU: "hablará", // Future (He/She/You formal will speak)
							_2FUTP: "hablaremos", // Future (We will speak)
							_2COND: "hablarían", // Conditional (They would speak)
							_2CONP: "hablarías", // Conditional (You would speak)
						},
						subjunctive: {
							_3PRES: "hable", // Present (I speak)
							_3IMP1: "hablase", // Imperfect (I spoke)
							_3IMP2: "hablara", // Imperfect (I spoke)
							_3PRPE: "hablare", // Future (I will speak)
							_3PAP1: "hable", // Present (I speak)
							_3PAP2: "habléis", // Present (You all speak)
							_3FUTU: "hablare", // Future (I will speak)
							_3FUTP: "hablaran", // Future (They will speak)
						},
						imperative: {
							_4AFFI: "habla", // Affirmative (Speak!)
							_4NEGA: "no hables", // Negative (Don't speak!)
						},
					},
				};
				this.spanishVerbs.push(spanishVerb);
			}
		}
	}

	public getVerbs() {
		return this.spanishVerbs.sort((a, b) => (a.rank > b.rank ? -1 : 1));
	}
}
