/* eslint-disable @typescript-eslint/no-explicit-any */
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
	exampleDatapodTextLines: string[];
	mainTestAnswer: string;
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

export type UserVerb = {
	dpodId: string;
	timesOpened: number;
};

export type SortedItem = {
	[key: string]: any;
};

export type PersonalPronouns = {
	yo: string;
	tu: string;
	el: string;
	nosotros: string;
	vosotros: string;
	ellos: string;
};

export type SpanishVerb = {
	spanish: string;
	english: string;
	rank: number;
	verbType: SpanishVerbType;
	verbBase: string;
	conjugation1Url: string;
	conjugation2Url: string;
	conj: {
		base: {
			_1INFI: string;
			_1PRPA: string;
			_1PAPA: string;
		};
		indicative: {
			_2PRES: PersonalPronouns;
			_2IMPE: PersonalPronouns;
			_2PRET: PersonalPronouns;
			_2PRPE: PersonalPronouns;
			_2PAPE: PersonalPronouns;
			_2PREP: string;
			_2FUIN: string;
			_2FUTU: string;
			_2FUTP: string;
			_2COND: string;
			_2CONP: string;
		};
		subjunctive: {
			_3PRES: string;
			_3IMP1: string;
			_3IMP2: string;
			_3PRPE: string;
			_3PAP1: string;
			_3PAP2: string;
			_3FUTU: string;
			_3FUTP: string;
		};
		imperative: {
			_4AFFI: string;
			_4NEGA: string;
		};
	};
};

export type LookupLinkKind = "conjugate123teachme" | "conjugateReverso";

export type SpanishVerbTenseIdCode =
	| "_2PRES"
	| "_2IMPE"
	| "_2PRET"
	| "_2PRPE"
	| "_2PAPE";

export type SpanishVerbType = "ar" | "er" | "ir";

export type SpanishPronoun =
	| "yo"
	| "tu"
	| "el"
	| "nosotros"
	| "vosotros"
	| "ellos";
export const spanishPronounTexts = [
	"yo",
	"tú",
	"él / ella / Usted",
	"nosotros / nosotras",
	"vosotros / vosotras",
	"ellos / ellas / Ustedes",
];
export const spanishPronounIdCodes = [
	"yo",
	"tu",
	"el",
	"nosotros",
	"vosotros",
	"ellos",
];

type SpanishTenseExample = {
	spanish: string;
	english: string;
};

export type SpanishTenseRule = {
	description: string;
	idCode: string;
	examples: SpanishTenseExample[];
	type: "general" | "limited";
};

type SpanishTenseEndings = {
	yo: string;
	tu: string;
	el: string;
	nosotros: string;
	vosotros: string;
	ellos: string;
};

type SpanishVerbPrefixes = {
	yo: string;
	tu: string;
	el: string;
	nosotros: string;
	vosotros: string;
	ellos: string;
};

export type SpanishTense = {
	idCode: string;
	title: string;
	spanishTitles: string[];
	prefixes: SpanishVerbPrefixes;
	rules: SpanishTenseRule[];
	endings: {
		ar: SpanishTenseEndings;
		er: SpanishTenseEndings;
		ir: SpanishTenseEndings;
	};
};

export type SpanishExample = {
	verb: string;
	tense: string;
	pronoun: string;
	reason: string;
	spanish: string;
	english: string;
};

export type SpanishTenseObject = {
	[key: string]: SpanishTense;
};

export type ExampleCountObject = {
	[key: string]: number;
};
