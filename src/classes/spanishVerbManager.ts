import { PersonalPronouns, SpanishVerb } from "../types";
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

	private create_2IMPE(verbType: string, verbBase: string): PersonalPronouns {
		if (verbType === "ar") {
			return {
				yo: `${verbBase}aba`,
				tu: `${verbBase}abas`,
				el: `${verbBase}aba`,
				nosotros: `${verbBase}ábamos`,
				vosotros: `${verbBase}abais`,
				ellos: `${verbBase}aban`,
			};
		} else {
			return {
				yo: `${verbBase}ía`,
				tu: `${verbBase}ías`,
				el: `${verbBase}ía`,
				nosotros: `${verbBase}íamos`,
				vosotros: `${verbBase}íais`,
				ellos: `${verbBase}ían`,
			};
		}
	}

	private create_2PRET(verbType: string, verbBase: string): PersonalPronouns {
		switch (verbType) {
			case "ar":
				return {
					yo: `${verbBase}${tenses._2PRET.endings.ar.yo}`,
					tu: `${verbBase}${tenses._2PRET.endings.ar.tu}`,
					el: `${verbBase}${tenses._2PRET.endings.ar.el}`,
					nosotros: `${verbBase}${tenses._2PRET.endings.ar.nosotros}`,
					vosotros: `${verbBase}${tenses._2PRET.endings.ar.vosotros}`,
					ellos: `${verbBase}${tenses._2PRET.endings.ar.ellos}`,
				};
			case "er":
				return {
					yo: `${verbBase}${tenses._2PRET.endings.er.yo}`,
					tu: `${verbBase}${tenses._2PRET.endings.er.tu}`,
					el: `${verbBase}${tenses._2PRET.endings.er.el}`,
					nosotros: `${verbBase}${tenses._2PRET.endings.er.nosotros}`,
					vosotros: `${verbBase}${tenses._2PRET.endings.er.vosotros}`,
					ellos: `${verbBase}${tenses._2PRET.endings.er.ellos}`,
				};
			case "ir":
			default:
				return {
					yo: `${verbBase}${tenses._2PRET.endings.ir.yo}`,
					tu: `${verbBase}${tenses._2PRET.endings.ir.tu}`,
					el: `${verbBase}${tenses._2PRET.endings.ir.el}`,
					nosotros: `${verbBase}${tenses._2PRET.endings.ir.nosotros}`,
					vosotros: `${verbBase}${tenses._2PRET.endings.ir.vosotros}`,
					ellos: `${verbBase}${tenses._2PRET.endings.ir.ellos}`,
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
							_2PRES: this.create_2PRES(verbType, verbBase),
							_2IMPE: this.create_2IMPE(verbType, verbBase),
							_2PRET: this.create_2PRET(verbType, verbBase),
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
		return this.spanishVerbs.sort((a, b) => (a.rank > b.rank ? -1 : 1));
	}
}
