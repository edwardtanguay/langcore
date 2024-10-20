import {
	SpanishPronoun,
	SpanishTense,
	SpanishTenseObject,
	SpanishVerb,
	SpanishVerbType,
} from "./types";
import * as qstr from "./qtools/qstr";

export const tenses: SpanishTenseObject = {
	_2PRES: {
		idCode: "_2PRES",
		title: "present",
		spanishTitles: ["presente"],
		prefixes: {
			yo: "",
			tu: "",
			el: "",
			nosotros: "",
			vosotros: "",
			ellos: "",
		},
		rules: [
			{
				description: "action happening now",
				idCode: "now",
				examples: [
					{
						spanish: "Ellos estudian para el examen.",
						english: "They are studying for the exam.",
					},
				],
				type: "general",
			},
			{
				description: "habitual action",
				idCode: "habit",
				examples: [
					{
						spanish: "Todos los días camino al trabajo.",
						english: "Every day, I walk to work.",
					},
				],
				type: "general",
			},
			{
				description: "general fact",
				idCode: "fact",
				examples: [
					{
						spanish: "El sol sale por el este.",
						english: "The sun rises in the east.",
					},
				],
				type: "limited",
			},
			{
				description: "near future action",
				idCode: "nearFuture",
				examples: [
					{
						spanish: "Voy al cine mañana.",
						english: "I am going to the cinema tomorrow.",
					},
				],
				type: "general",
			},
			{
				description: "description of current state",
				idCode: "currentState",
				examples: [
					{
						spanish: "Estoy cansado.",
						english: "(I am tired.",
					},
				],
				type: "limited",
			},
			{
				description: "instruction",
				idCode: "instruction",
				examples: [
					{
						spanish: "Doblas a la derecha en la esquina.",
						english: "You turn right at the corner.",
					},
				],
				type: "limited",
			},
			{
				description: "command",
				idCode: "command",
				examples: [
					{
						spanish: "Tú hablas español en clase, ¿entiendes?",
						english:
							"You speak Spanish in class, do you understand?",
					},
				],
				type: "limited",
			},
		],
		endings: {
			ar: {
				yo: "o",
				tu: "as",
				el: "a",
				nosotros: "amos",
				vosotros: "áis",
				ellos: "an",
			},
			er: {
				yo: "o",
				tu: "es",
				el: "e",
				nosotros: "emos",
				vosotros: "éis",
				ellos: "en",
			},
			ir: {
				yo: "o",
				tu: "es",
				el: "e",
				nosotros: "imos",
				vosotros: "ís",
				ellos: "en",
			},
		},
	},
	_2IMPE: {
		idCode: "_2IMPE",
		title: "imperfect",
		spanishTitles: ["pretérito imperfecto", "imperfecto"],
		prefixes: {
			yo: "",
			tu: "",
			el: "",
			nosotros: "",
			vosotros: "",
			ellos: "",
		},
		rules: [
			{
				description: "ongoing action in the past",
				idCode: "ongoingAction",
				examples: [
					{
						spanish: "Estaba leyendo un libro.",
						english: "I was reading a book.",
					},
				],
				type: "general",
			},
			{
				description: "habitual action in the past",
				idCode: "habitInPast",
				examples: [
					{
						spanish: "Cada verano íbamos a la playa.",
						english: "Every summer, we used to go to the beach.",
					},
				],
				type: "general",
			},
			{
				description: "background information in the past",
				idCode: "backgroundInformation",
				examples: [
					{
						spanish: "Era una noche oscura y tormentosa.",
						english: "It was a dark and stormy night.",
					},
				],
				type: "limited",
			},
			{
				description: "physical state in the past",
				idCode: "physicalStateInPast",
				examples: [
					{
						spanish: "Ella estaba cansada.",
						english: "She was tired.",
					},
				],
				type: "limited",
			},
			{
				description: "mental state in the past",
				idCode: "mentalStateInPast",
				examples: [
					{
						spanish: "Ella estaba estresada.",
						english: "She was stressed.",
					},
				],
				type: "limited",
			},
			{
				description: "emotional state in the past",
				idCode: "emotionalStateInPast",
				examples: [
					{
						spanish: "Ella estaba triste.",
						english: "She was sad.",
					},
				],
				type: "limited",
			},
			{
				description: "age in the past",
				idCode: "ageInPast",
				examples: [
					{
						spanish: "Tenía diez años cuando me mudé.",
						english: "I was ten years old when I moved.",
					},
				],
				type: "limited",
			},
			{
				description: "two simultaneous actions in the past",
				idCode: "twoActionsInPast",
				examples: [
					{
						spanish:
							"Mientras él estudiaba, ella escuchaba música.",
						english:
							"While he was studying, she was listening to music.",
					},
				],
				type: "general",
			},
			{
				description: "a desire in the past",
				idCode: "desireInPast",
				examples: [
					{
						spanish: "Quería un coche nuevo.",
						english: "I wanted a new car.",
					},
				],
				type: "limited",
			},
		],
		endings: {
			ar: {
				yo: "aba",
				tu: "abas",
				el: "aba",
				nosotros: "ábamos",
				vosotros: "abais",
				ellos: "aban",
			},
			er: {
				yo: "ía",
				tu: "ías",
				el: "ía",
				nosotros: "íamos",
				vosotros: "íais",
				ellos: "ían",
			},
			ir: {
				yo: "ía",
				tu: "ías",
				el: "ía",
				nosotros: "íamos",
				vosotros: "íais",
				ellos: "ían",
			},
		},
	},
	_2PRET: {
		idCode: "_2PRET",
		title: "preterite",
		spanishTitles: ["pretérito", "pretérito perfecto simple"],
		prefixes: {
			yo: "",
			tu: "",
			el: "",
			nosotros: "",
			vosotros: "",
			ellos: "",
		},
		rules: [
			{
				description: "completed action in the past",
				idCode: "completedActionInPast",
				examples: [
					{
						spanish: "Ayer estudié para el examen.",
						english: "Yesterday, I studied for the exam.",
					},
				],
				type: "general",
			},
			{
				description: "specific time in the past",
				idCode: "specificTimeFrameInPast",
				examples: [
					{
						spanish: "El año pasado viajamos a España.",
						english: "Last year, we traveled to Spain.",
					},
				],
				type: "general",
			},
			{
				description: "sequential actions in the past",
				idCode: "sequentialActionsInPast",
				examples: [
					{
						spanish: "Me levanté, me duché y desayuné.",
						english: "I got up, took a shower, and had breakfast.",
					},
				],
				type: "general",
			},
			{
				description: "interrupting action in the past",
				idCode: "interruptingActionInPast",
				examples: [
					{
						spanish: "Estaba estudiando cuando sonó el teléfono.",
						english: "I was studying when the phone rang.",
					},
				],
				type: "general",
			},
			{
				description: "change in state in the past",
				idCode: "changeInStateInPast",
				examples: [
					{
						spanish: "Ella se puso feliz al recibir la noticia.",
						english: "She became happy upon receiving the news.",
					},
				],
				type: "limited",
			},
			{
				description:
					"action with a clear beginning and end in the past",
				idCode: "clearBeginningAndEndInPast",
				examples: [
					{
						spanish: "Viví en México por cinco años.",
						english: "I lived in Mexico for five years.",
					},
				],
				type: "general",
			},
			{
				description: "notable event in the past",
				idCode: "notableEventInPast",
				examples: [
					{
						spanish: "Nos casamos en 2010.",
						english: "We got married in 2010.",
					},
				],
				type: "general",
			},
		],
		endings: {
			ar: {
				yo: "é",
				tu: "aste",
				el: "ó",
				nosotros: "amos",
				vosotros: "asteis",
				ellos: "aron",
			},
			er: {
				yo: "í",
				tu: "iste",
				el: "ió",
				nosotros: "imos",
				vosotros: "isteis",
				ellos: "ieron",
			},
			ir: {
				yo: "í",
				tu: "iste",
				el: "ió",
				nosotros: "imos",
				vosotros: "isteis",
				ellos: "ieron",
			},
		},
	},
	_2PRPE: {
		idCode: "_2PRPE",
		title: "present perfect",
		spanishTitles: ["pretérito perfecto"],
		prefixes: {
			yo: "he",
			tu: "has",
			el: "ha",
			nosotros: "hemos",
			vosotros: "habéis",
			ellos: "han",
		},
		rules: [
			{
				description:
					"action that happened in the past and continued to the present",
				idCode: "inPastContinueToPresent",
				examples: [
					{
						spanish: "He vivido aquí durante cinco años.",
						english: "I have lived here for five years.",
					},
				],
				type: "general",
			},
			{
				description: "action completed in the recent past",
				idCode: "completedInRecentPast",
				examples: [
					{
						spanish: "He comido ya.",
						english: "I've eaten already.",
					},
					{
						spanish: "Hemos terminado el proyecto.",
						english: "We've finished the project.",
					},
				],
				type: "general",
			},
			{
				description: "life experience or achievement",
				idCode: "lifeExperienceInPast",
				examples: [
					{
						spanish: "He visitado París.",
						english: "I have visited Paris.",
					},
					{
						spanish: "Nunca he estado en México.",
						english: "I have never been to Mexico.",
					},
				],
				type: "limited",
			},
			{
				description: "repeated action up to now",
				idCode: "repeatedActionUpToNow",
				examples: [
					{
						spanish: "Siempre he leído antes de dormir.",
						english: "I have always read before sleeping.",
					},
				],
				type: "general",
			},
		],
		endings: {
			ar: {
				yo: "ado",
				tu: "ado",
				el: "ado",
				nosotros: "ado",
				vosotros: "ado",
				ellos: "ado",
			},
			er: {
				yo: "ido",
				tu: "ido",
				el: "ido",
				nosotros: "ido",
				vosotros: "ido",
				ellos: "ido",
			},
			ir: {
				yo: "ido",
				tu: "ido",
				el: "ido",
				nosotros: "ido",
				vosotros: "ido",
				ellos: "ido",
			},
		},
	},
	_2PAPE: {
		idCode: "_2PAPE",
		title: "past perfect",
		spanishTitles: ["pluscuamperfecto"],
		prefixes: {
			yo: "había",
			tu: "habías",
			el: "había",
			nosotros: "habíamos",
			vosotros: "habíais",
			ellos: "habían",
		},
		rules: [
			{
				description:
					"an action that happened before another past action",
				idCode: "happenedBeforeAnotherAction",
				examples: [
					{
						spanish:
							"Cuando llegué a la fiesta, todos ya se habían ido.",
						english:
							"When I arrived at the party, everyone had already left.",
					},
				],
				type: "general",
			},
			{
				description:
					"an action that was completed at some point before a specific time in the past",
				idCode: "completedBeforeTimeInPast",
				examples: [
					{
						spanish:
							"Había terminado mi trabajo antes de las cinco.",
						english: "I had finished my work before five o'clock.",
					},
				],
				type: "general",
			},
			{
				description:
					"an event that occurred earlier in a sequence of past actions",
				idCode: "earlierInSequenceOfPastActions",
				examples: [
					{
						spanish:
							"Nunca había visto una película tan emocionante hasta entonces.",
						english:
							"I had never seen such an exciting movie until then.",
					},
				],
				type: "general",
			},
		],
		endings: {
			ar: {
				yo: "ado",
				tu: "ado",
				el: "ado",
				nosotros: "ado",
				vosotros: "ado",
				ellos: "ado",
			},
			er: {
				yo: "ido",
				tu: "ido",
				el: "ido",
				nosotros: "ido",
				vosotros: "ido",
				ellos: "ido",
			},
			ir: {
				yo: "ido",
				tu: "ido",
				el: "ido",
				nosotros: "ido",
				vosotros: "ido",
				ellos: "ido",
			},
		},
	},
};

export const getFullVerbPhrase = (
	sv: SpanishVerb,
	tense: SpanishTense,
	pronoun: SpanishPronoun,
	ending: string
) => {
	return `${tense.prefixes[pronoun]} ${sv.verbBase}${ending}`.trim();
};

export const getFullVerbPhrases = (
	sv: SpanishVerb,
	tense: SpanishTense,
	verbType: SpanishVerbType
) => {
	const fullVerbPhrases: string[] = [];
	Object.entries(tense.endings[verbType as SpanishVerbType]).forEach(
		(entry) => {
			const pronoun = entry[0] as SpanishPronoun;
			const ending = entry[1];
			const fullVerbPhrase = getFullVerbPhrase(
				sv,
				tense,
				pronoun,
				ending
			);
			fullVerbPhrases.push(fullVerbPhrase);
		}
	);
	return fullVerbPhrases;
};

export const getChatGptQuestionTexts = (
	sv: SpanishVerb,
	tense: SpanishTense,
	verbType: SpanishVerbType
) => {
	const verbConjugations: string[] = [];
	Object.entries(tense.endings[verbType as SpanishVerbType]).forEach(
		(entry) => {
			const pronoun = entry[0] as SpanishPronoun;
			const ending = entry[1];
			const fullVerbPhrase = getFullVerbPhrase(
				sv,
				tense,
				pronoun,
				ending
			);
			const text = `list 3 Spanish sentences using &quot;${fullVerbPhrase}&quot; and @@PRONOUNTEXT for @@REASON with English translations, without parentheses`;
			verbConjugations.push(text);
		}
	);
	return verbConjugations;
};

export const buildTatoebaUrl = (word: string) => {
	return `https://tatoeba.org/de/sentences/search?from=spa&query=%3D%22${qstr.replaceAll(
		word,
		" ",
		"+"
	)}%22&to=eng&page=1`;
};

export const buildTatoebaLinkElement = (word: string) => {
	return `<a target="_blank" class="hover:underline" href="${buildTatoebaUrl(
		word
	)}">${word}</a>`;
};
