import { SpanishVerb } from "../types";

export class SpanishVerbManager {

	private spanishVerbText = '';
	private spanishVerbs: SpanishVerb[] = [];

	constructor(spanishVerbText: string) {
		this.spanishVerbText = spanishVerbText;
		this.parseVerbs();
	}

	private parseVerbs() {
		this.spanishVerbs = [
			{
				verb: "vvv001",
				type: "ar",
				base: "bbb",
			},
			{
				verb: "vvv002",
				type: "ar",
				base: "bbb",
			},
			{
				verb: "vvv003",
				type: "ar",
				base: "bbb",
			},
		];
	}

	public getVerbs() {
		return this.spanishVerbs;
	}
}