
export class SpanishExampleManager {
	private spanishExampleText = "";

	constructor(spanishExampleText: string) {
		this.spanishExampleText = spanishExampleText
		console.log(111, this.spanishExampleText);
	}

	getExamples() {
		return [];
	}
}