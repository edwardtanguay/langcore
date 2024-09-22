import _rawDutchVerbs from "./data/dutchVerbs.json";
import _rawDutchVerbExamples from "./data/dutchVerbExamples.json";
import { RawDutchVerb, RawDutchVerbExample } from "./types";
import { DutchVerb } from "./types";
import * as qstr from "./qtools/qstr";

const rawDutchVerbs: RawDutchVerb[] = _rawDutchVerbs;
const rawDutchVerbExamples: RawDutchVerbExample[] = _rawDutchVerbExamples;

const getParticipleParts = (participle: string) => {
	const parts = qstr.breakIntoParts(participle, " ");
	return [parts[0], parts[1]];
};

const getExampleLink = (word: string) => {
	return `https://tatoeba.org/de/sentences/search?from=nld&query=%3D${word}&to=eng`;
};

const getConjugationLink = (word: string) => {
	return `https://en.bab.la/conjugation/dutch/${word}`;
};

export const getDutchVerbs = (): DutchVerb[] => {
	const dutchVerbs: DutchVerb[] = [];

	for (const rawDutchVerb of rawDutchVerbs) {
		const [participleHelper, participleVerb] = getParticipleParts(
			rawDutchVerb.participle
		);
		const dutchVerb: DutchVerb = {
			dpodId: rawDutchVerb.dpodId,
			dpodWhenCreated: rawDutchVerb.dpodWhenCreated,
			english: rawDutchVerb.english,
			infinitive: rawDutchVerb.infinitive,
			infinitiveExampleLink: getExampleLink(rawDutchVerb.infinitive),
			present: rawDutchVerb.present,
			presentExampleLink: getExampleLink(rawDutchVerb.present),
			imperfectSingular: rawDutchVerb.imperfectSingular,
			imperfectSingularExampleLink: getExampleLink(
				rawDutchVerb.imperfectSingular
			),
			imperfectPlural: rawDutchVerb.imperfectPlural,
			imperfectPluralExampleLink: getExampleLink(
				rawDutchVerb.imperfectPlural
			),
			participleVerb,
			participleNoun: "ik",
			participleHelper,
			participleExampleLink: getExampleLink(participleVerb),
			rank: Number(rawDutchVerb.rank),
			extras: rawDutchVerb.extras,
			conjugationLink: getConjugationLink(rawDutchVerb.infinitive),
			isOpen: false,
			examples: rawDutchVerbExamples
				.filter((m) => m.verb === rawDutchVerb.infinitive)
				.map((m) => {
					return {
						dpodId: m.dpodId,
						verb: m.verb,
						english: m.english,
						dutch: m.dutch,
						isOpen: false,
					};
				}),
			exampleDatapodText: "nnn",
		};
		dutchVerbs.push(dutchVerb);
	}
	dutchVerbs.sort((a, b) => (a.rank < b.rank ? 1 : -1));
	return dutchVerbs;
};
