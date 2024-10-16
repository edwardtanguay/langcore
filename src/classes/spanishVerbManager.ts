import { PersonalPronouns, SpanishVerb } from "../types";
import * as qstr from "../qtools/qstr";

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

	private create_2PRES(verbType: string, verbBase: string): PersonalPronouns {
		if (verbType === "ar") {
			return {
				yo: `${verbBase}o`,
				tu: `${verbBase}as`,
				el: `${verbBase}a`,
				nosotros: `${verbBase}amos`,
				vosotros: `${verbBase}áis`,
				ellos: `${verbBase}an`,
			};
		} else if (verbType === "er") {
			return {
				yo: `${verbBase}o`,
				tu: `${verbBase}es`,
				el: `${verbBase}e`,
				nosotros: `${verbBase}emos`,
				vosotros: `${verbBase}éis`,
				ellos: `${verbBase}en`,
			};
		} else {
			return {
				yo: `${verbBase}o`,
				tu: `${verbBase}es`,
				el: `${verbBase}e`,
				nosotros: `${verbBase}imos`,
				vosotros: `${verbBase}ís`,
				ellos: `${verbBase}en`,
			};
		}
	}

	private getVerbLineParts(line: string) {
		const parts = qstr.breakIntoParts(line, ";");
		return {
			verb: parts[0],
			english: parts[1],
		};
	}

	private parseVerbs() {
		for (const _line of this.verbLines) {
			const line = _line.trim();
			if (line !== "" && line.includes(";")) {
				// e.g. "cantar; sing"
				const { verb, english } = this.getVerbLineParts(line);
				const verbType = verb.slice(-2); // ar, er, ir
				const verbBase = verb.slice(0, -2); // habl
				const spanishVerb: SpanishVerb = {
					english,
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
							_2PRES: this.create_2PRES(verbType, verbBase),
							_2IMPE: "habla", // Imperfect (I was speaking)
							_2PRET: "hablé", // Preterite (I spoke)
							_2PRPE: "hablaré", // Future (I will speak)
							_2PAPE: "hablaría", // Conditional (I would speak)
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
		return this.spanishVerbs;
	}
}
