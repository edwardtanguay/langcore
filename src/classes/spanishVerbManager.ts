import { SpanishVerb } from "../types";
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

	private create1PRPA(verbType: string, verbBase: string) {
		if (verbType === "ar") {
			return `${verbBase}ando`;
		} else {
			return `${verbBase}iendo`;
		}
	}

	private create1PAPA(verbType: string, verbBase: string) {
		if (verbType === "ar") {
			return `${verbBase}ado`;
		} else {
			return `${verbBase}ido`;
		}
	}

	private parseVerbs() {
		for (const _line of this.verbLines) {
			const line = _line.trim();

			if (line !== "") {
				const verb = line;
				const verbType = line.slice(-2); // ar, er, ir
				const verbBase = line.slice(0, -2); // habl
				const spanishVerb: SpanishVerb = {
					verbBase,
					verbType,
					conjugationUrl: `https://www.123teachme.com/spanish_verb_conjugation/${verb}`,
					conj: {
						base: {
							_1INFI: verb,
							_1PRPA: this.create1PRPA(verbType, verbBase),
							_1PAPA: this.create1PAPA(verbType, verbBase),
						},
						indicative: {
							_2PRES: "hablo", // Present (I speak)
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
