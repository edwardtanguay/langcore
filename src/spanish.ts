import {
	SpanishPronoun,
	SpanishTense,
	SpanishVerb,
	SpanishVerbTenseIdCode,
	SpanishVerbType,
} from "./types";
import { spanishPronounTexts } from "./types";
import { spanishPronounIdCodes } from "./types";

export const tenses = {
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
				examples: [
					{
						spanish: "Ellos estudian para el examen.",
						english: "They are studying for the exam.",
					},
				],
			},
			{
				description: "habitual action",
				examples: [
					{
						spanish: "Todos los días camino al trabajo.",
						english: "Every day, I walk to work.",
					},
				],
			},
			{
				description: "general fact",
				examples: [
					{
						spanish: "El sol sale por el este.",
						english: "The sun rises in the east.",
					},
				],
			},
			{
				description: "near future action",
				examples: [
					{
						spanish: "Voy al cine mañana.",
						english: "I am going to the cinema tomorrow.",
					},
				],
			},
			{
				description: "description of current state",
				examples: [
					{
						spanish: "Estoy cansado.",
						english: "(I am tired.",
					},
				],
			},
			{
				description: "instruction or command",
				examples: [
					{
						spanish: "Doblas a la derecha en la esquina.",
						english: "You turn right at the corner.",
					},
				],
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
				examples: [
					{
						spanish: "Estaba leyendo un libro.",
						english: "I was reading a book.",
					},
				],
			},
			{
				description: "habitual action in the past",
				examples: [
					{
						spanish: "Cada verano íbamos a la playa.",
						english: "Every summer, we used to go to the beach.",
					},
				],
			},
			{
				description: "background information in the past",
				examples: [
					{
						spanish: "Era una noche oscura y tormentosa.",
						english: "It was a dark and stormy night.",
					},
				],
			},
			{
				description: "physical, mental or emotional state in the past",
				examples: [
					{
						spanish: "Ella estaba cansada y triste.",
						english: "She was tired and sad.",
					},
				],
			},
			{
				description: "age in the past",
				examples: [
					{
						spanish: "Tenía diez años cuando me mudé.",
						english: "I was ten years old when I moved.",
					},
				],
			},
			{
				description: "two simultaneous actions in the past",
				examples: [
					{
						spanish:
							"Mientras él estudiaba, ella escuchaba música.",
						english:
							"While he was studying, she was listening to music.",
					},
				],
			},
			{
				description: "request or desire in the past",
				examples: [
					{
						spanish: "Quería un coche nuevo.",
						english: "I wanted a new car.",
					},
				],
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
				examples: [
					{
						spanish: "Ayer estudié para el examen.",
						english: "Yesterday, I studied for the exam.",
					},
				],
			},
			{
				description: "specific time frame in the past",
				examples: [
					{
						spanish: "El año pasado viajamos a España.",
						english: "Last year, we traveled to Spain.",
					},
				],
			},
			{
				description: "sequential actions in the past",
				examples: [
					{
						spanish: "Me levanté, me duché y desayuné.",
						english: "I got up, took a shower, and had breakfast.",
					},
				],
			},
			{
				description: "interrupting action in the past",
				examples: [
					{
						spanish: "Estaba estudiando cuando sonó el teléfono.",
						english: "I was studying when the phone rang.",
					},
				],
			},
			{
				description: "change in state or condition in the past",
				examples: [
					{
						spanish: "Ella se puso feliz al recibir la noticia.",
						english: "She became happy upon receiving the news.",
					},
				],
			},
			{
				description:
					"action with a clear beginning and end in the past",
				examples: [
					{
						spanish: "Viví en México por cinco años.",
						english: "I lived in Mexico for five years.",
					},
				],
			},
			{
				description: "notable event or milestone in the past",
				examples: [
					{
						spanish: "Nos casamos en 2010.",
						english: "We got married in 2010.",
					},
				],
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
				examples: [
					{
						spanish: "He vivido aquí durante cinco años.",
						english: "I have lived here for five years.",
					},
				],
			},
			{
				description: "action completed in the recent past",
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
			},
			{
				description: "life experience",
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
			},
			{
				description: "action that just happened",
				examples: [
					{
						spanish: "Ya he terminado el trabajo.",
						english: "I have already finished the work.",
					},
					{
						spanish: "Todavía no hemos decidido qué hacer.",
						english: "We haven't decided what to do yet.",
					},
				],
			},
			{
				description: "ongoing or repeated action up to now",
				examples: [
					{
						spanish: "Siempre he leído antes de dormir.",
						english: "I have always read before sleeping.",
					},
				],
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
				examples: [
					{
						spanish:
							"Cuando llegué a la fiesta, todos ya se habían ido.",
						english:
							"When I arrived at the party, everyone had already left.",
					},
				],
			},
			{
				description:
					"an action that was completed at some point before a specific time in the past",
				examples: [
					{
						spanish:
							"Había terminado mi trabajo antes de las cinco.",
						english: "I had finished my work before five o'clock.",
					},
				],
			},
			{
				description:
					"an experience or event that occurred earlier in a sequence of past actions",
				examples: [
					{
						spanish:
							"Nunca había visto una película tan emocionante hasta entonces.",
						english:
							"I had never seen such an exciting movie until then.",
					},
				],
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

export const htmlListVerbConjugations = (
	tense: SpanishTense,
	verbType: SpanishVerbType
) => {
	const tenseClass = `tense${tense.idCode}`;
	return `
<div class="ml-3">
	<span>${verbType.toUpperCase()}: </span>
	${Object.entries(tense.endings[verbType as SpanishVerbType])
		.map((entry, index) => {
			const pronoun = entry[0] as SpanishPronoun;
			const ending = entry[1];
			return `<span key=${index} class="${tenseClass}"><span class="font-bold">${tense.prefixes[pronoun]}</span> -${ending}</span>`.trim();
		})
		.join(" | ")}
</div>
	`;
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
			const text = `list 3 Spanish sentences using &quot;${fullVerbPhrase}&quot; with English translations, without parentheses`;
			verbConjugations.push(text);
		}
	);
	return verbConjugations;
};

const displayDevBox = (
	sv: SpanishVerb,
	tense: SpanishTense,
	tenseIdCode: SpanishVerbTenseIdCode
) => {
	const chatGptQuestionTexts = getChatGptQuestionTexts(
		sv,
		tense,
		sv.verbType
	);
	const fullVerbPhrases = getFullVerbPhrases(sv, tense, sv.verbType);
	return `
		<fieldset class="mt-6 bg-gray-400 p-3 border-gray-600 border-3">
			<legend class="px-1 text-gray-200 font-bold bg-gray-500">Devbox</legend>
			<div class="flex flex-col">
				<h3 class="text-[1.1rem] font-semibold mb-3">Generate example sentences</h3>
				${chatGptQuestionTexts
					.map((chatGptQuestionText, index) => {
						const baseExampleText = `${sv.spanish}; ${tenseIdCode}; ${spanishPronounIdCodes[index]}; SPANISH; ENGLISH`;
						const fullVerbPhrase = fullVerbPhrases[index];
						return `
						<fieldset class="border border-gray-600 rounded mb-3 p-2">
							<legend class="flex gap-1 text-[1rem] ml-1">
								<div class="font-semibold">${fullVerbPhrase}</div> <div>(${spanishPronounTexts[index]})</div>
							</legend>
							<div class="flex flex-col gap-1">
								<div>spanishExamples.spe.txt: <input class="w-[20rem]" value="${baseExampleText}"/></div>
								<div><input class="w-full text-[.7rem]" value="${chatGptQuestionText}"/></div>
							</div>
						</fieldset>
						`;
					})
					.join("")}
			</div>
		</fieldset>
	`;
};

export const getTenseHelp = (
	sv: SpanishVerb,
	tenseIdCode: SpanishVerbTenseIdCode,
	appMode: string
) => {
	let r = "";

	const tense = tenses[tenseIdCode];
	const boldTitle = `<span class="font-bold">${tense.title}</span>`;

	r += `
<h2 class="mb-3">1. ${boldTitle} tense is used for:</h2>
<ul class="list-disc ml-6">
${tense.rules
	.map((rule, index) => {
		return `
		<li key=${index}> <span class="font-bold">${rule.description}</span></li>
		<ul class="list-disc ml-6">
			${rule.examples
				.map((example, index) => {
					return `<li key=${index} class="tense${tenseIdCode}">${example.spanish}</li>`;
				})
				.join("")}
		</ul>
		`;
	})
	.join("")}
</ul>
<h2 class="mt-5 mb-3">2. ${boldTitle} tense regular verb endings:</h2>
${htmlListVerbConjugations(tense, "ar")}
${htmlListVerbConjugations(tense, "er")}
${htmlListVerbConjugations(tense, "ir")}

	`;

	if (appMode === "dev") {
		r += displayDevBox(sv, tense, tenseIdCode);
	} else {
		r += "NOT IN DEV MODE";
	}

	return r;
};
