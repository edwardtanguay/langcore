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
}

export type DutchVerb = {
	dpodId: string;
	dpodWhenCreated: string;
	english: string;
	infinitive: string;
	present: string;
	imperfectSingular: string;
	imperfectPlural: string;
	participle: string;
	rank: number;
	extras: string;
}