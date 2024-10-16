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

	private parseVerbs() {
		for (const _line of this.verbLines) {
			const line = _line.trim();

			if (line !== "") {
				const verbType = line.slice(-2);
				const base = line.slice(0, -2);
				const spanishVerb: SpanishVerb = {
					verb: line,
					verbType,
					base,
				};
				this.spanishVerbs.push(spanishVerb);
			}
		}
	}

	public getVerbs() {
		return this.spanishVerbs;
	}
}
