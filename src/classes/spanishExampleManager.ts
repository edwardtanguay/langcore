import { SpanishExample } from "../types";
import * as qstr from "../qtools/qstr";

export class SpanishExampleManager {
	private spanishExampleText = "";
	private exampleLines: string[] = [];
	private spanishExamples: SpanishExample[] = [];

	constructor(spanishExampleText: string) {
		this.spanishExampleText = spanishExampleText;
		this.exampleLines = qstr.convertStringBlockToLines(
			this.spanishExampleText
		);
		this.parseExamples();
	}

	public getExamples() {
		return [];
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

	private parseExamples() {
		for (const _line of this.exampleLines) {
			const line = _line.trim();
			if (line !== "" && line.includes(";")) {
				console.log(line);
			}
		}
	}
}
