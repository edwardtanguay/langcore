import { ExampleCountObject, SpanishExample } from "../types";
import * as qstr from "../qtools/qstr";

export class SpanishExampleManager {
	private spanishExampleText = "";
	private exampleLines: string[] = [];
	private spanishExamples: SpanishExample[] = [];
	private exampleCountObject: ExampleCountObject = {};

	constructor(spanishExampleText: string) {
		this.spanishExampleText = spanishExampleText;
		this.exampleLines = qstr.convertStringBlockToLines(
			this.spanishExampleText
		);
		this.parseExamples();
	}

	public getExamples() {
		return this.spanishExamples;
	}

	private getExampleLineParts(line: string): {
		verb: string;
		tenseIdCode: string;
		pronounIdCode: string;
		reasonIdCode: string;
		spanish: string;
		english: string;
	} {
		const parts = qstr.breakIntoParts(line, ";");
		return {
			verb: parts[0],
			tenseIdCode: parts[1],
			pronounIdCode: parts[2],
			reasonIdCode: parts[3],
			spanish: parts[4],
			english: parts[5],
		};
	}

	public static buildCountIdCode(
		verb: string,
		tense: string,
		pronoun: string
	) {
		return `${verb}-${tense}-${pronoun}`;
	}

	public static getCount(
		verb: string,
		tense: string,
		pronoun: string,
		exampleCountObject: ExampleCountObject
	): number {
		const countIdCode = SpanishExampleManager.buildCountIdCode(
			verb,
			tense,
			pronoun
		);
		const possibleCount = exampleCountObject[countIdCode];
		if (possibleCount) {
			return possibleCount;
		} else {
			return 0;
		}
	}

	public getExampleCountObject() {
		return this.exampleCountObject;
	}

	private parseExamples() {
		for (const _line of this.exampleLines) {
			const line = _line.trim();
			if (line !== "" && line.includes(";")) {
				const {
					verb,
					tenseIdCode,
					pronounIdCode,
					reasonIdCode,
					spanish,
					english,
				} = this.getExampleLineParts(line);
				const spanishExample: SpanishExample = {
					verb,
					tense: tenseIdCode,
					pronoun: pronounIdCode,
					reason: reasonIdCode,
					spanish,
					english,
				};
				this.spanishExamples.push(spanishExample);

				const countIdCode = SpanishExampleManager.buildCountIdCode(
					verb,
					tenseIdCode,
					pronounIdCode
				);
				if (this.exampleCountObject[countIdCode]) {
					this.exampleCountObject[countIdCode]++;
				} else {
					this.exampleCountObject[countIdCode] = 1;
				}
			}
		}
		console.log(333, this.exampleCountObject);
	}
}
