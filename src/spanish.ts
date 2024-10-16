import { SpanishVerb, SpanishVerbTense, SpanishVerbType } from "./types";

export const tenses = {
	_2PRES: {
		title: "present",
		rules: [],
		endings: {
			ar: {
				yo: "nnné",
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
	_2IMPE: {
		title: "imperfect",
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
				description: "physical and emotional states in the past",
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
				description: "a request or desire in the past",
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
		title: "preterite",
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
				description: "a notible event or milestone in the past",
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
};

export const getTenseHelp = (
	sv: SpanishVerb,
	tenseIdCode: SpanishVerbTense
) => {
	const tense = tenses[tenseIdCode];
	const boldVerbType = `<span class="font-bold uppercase">${sv.verbType}</span>`;
	const boldTitle = `<span class="font-bold">${tense.title}</span>`;
	return `
<h2>endings for ${boldVerbType} verbs in the ${boldTitle} tense: </h2>
<div class="mt-2 ml-3">
	${Object.entries(tense.endings[sv.verbType as SpanishVerbType]).map(
		(entry, index) => {
			return `<span key=${index}>-${entry[1]}</span>`
		}
	).join(', ')}
</div>

<h2 class="mt-3 mb-3">use the ${boldTitle} tense for:</h2>
<ul class="list-disc ml-6">
${tense.rules
	.map((rule, index) => {
		return `<li key=${index}> ${rule.description} </li>`;
	})
	.join("")}
</ul>
	`;
};
