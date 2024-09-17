import _rawDutchVerbs from "./data/dutchVerbs.json";
import { RawDutchVerb } from "./types";
import { DutchVerb } from "./types";

const rawDutchVerbs: RawDutchVerb[] = _rawDutchVerbs;

export const getDutchVerbs = (): DutchVerb[] => {
	const dutchVerbs: DutchVerb[] = [];
	for (const rawDutchVerb of rawDutchVerbs) {
		const dutchVerb: DutchVerb = {
			dpodId: rawDutchVerb.dpodId,
			dpodWhenCreated: rawDutchVerb.dpodWhenCreated,
			english: rawDutchVerb.english,
			infinitive: rawDutchVerb.infinitive,
			present: rawDutchVerb.present,
			imperfectSingular: rawDutchVerb.imperfectSingular,
			imperfectPlural: rawDutchVerb.imperfectPlural,
			participle: rawDutchVerb.participle,
			rank: Number(rawDutchVerb.rank),
			extras: rawDutchVerb.extras
		};
		dutchVerbs.push(dutchVerb);
	}
	dutchVerbs.sort((a, b) => a.rank < b.rank ? 1 : -1);
	return dutchVerbs;
};
