import { SpanishVerb } from "../types";
import * as qstr from "../qtools/qstr";
import { SpanishVerbBuilder } from "./spanishVerbBuilder";

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
		for (const verbLine of this.verbLines) {
			const svb = new SpanishVerbBuilder(verbLine);
			if (svb.isVerb()) {
				this.spanishVerbs.push(svb.getVerb());
			}
		}
	}

	public getVerbs() {
		return this.spanishVerbs.sort((a, b) => (a.rank > b.rank ? -1 : 1));
	}
}
