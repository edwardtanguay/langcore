export type RawDutchVerb = {
	dpodId: string;
	dpodWhenCreated: string;
	english: string;
	infinitive: string;
	present: string;
	imperfectSingular: string;
	imperfectPlural: string;
	participle: string;
	rank: string;
	extras: string;
};

export type DutchVerb = {
	dpodId: string;
	dpodWhenCreated: string;
	english: string;
	infinitive: string;
	infinitiveExampleLink: string;
	present: string;
	presentExampleLink: string;
	imperfectSingular: string;
	imperfectSingularExampleLink: string;
	imperfectPlural: string;
	imperfectPluralExampleLink: string;
	participleNoun: string;
	participleHelper: string;
	participleVerb: string;
	participleExampleLink: string;
	rank: number;
	extras: string;
	conjugationLink: string;
	isOpen: boolean;
	examples: DutchVerbExample[];
	exampleDatapodText: string;
};

export type RawDutchVerbExample = {
	dpodId: string;
	verb: string;
	english: string;
	dutch: string;
	extras: string;
};

export type DutchVerbExample = {
	dpodId: string;
	verb: string;
	english: string;
	dutch: string;
	isOpen: boolean;
};
