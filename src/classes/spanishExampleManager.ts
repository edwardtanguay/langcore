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

	private parseExamples() {
		for (const _line of this.exampleLines) {
			const line = _line.trim();
			console.log(line);
		}
	}
}
