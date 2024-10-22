import { Action, action, Computed, computed } from "easy-peasy";
import {
	DutchVerb,
	ExampleCountObject,
	SpanishExample,
	SpanishVerb,
	UserVerb,
} from "../../types";
import { SpanishVerbManager } from "../../classes/spanishVerbManager";
import spanishVerbText from "../../data/spanishVerbs.spv.txt?raw";
import spanishExamplesText from "../../data/spanishExamples.spe.txt?raw";
import { SpanishExampleManager } from "../../classes/spanishExampleManager";
import { getDutchVerbs } from "../../dataModel";

export interface ProfileModel {
	// state variables
	firstName: string;
	learnedVerbs: string[];
	userVerbs: UserVerb[];
	learnedExamples: string[];
	verbsTestedCorrect: string[];
	spanishVerbs: SpanishVerb[];
	appMode: string;
	spanishExamples: SpanishExample[];
	exampleCountObject: ExampleCountObject;
	dutchVerbs: DutchVerb[];

	// computed variables
	getNumberOfVerbsTestedCorrect: Computed<this, number>;

	// actions
	setFirstName: Action<this, string>;
	addVerbLearned: Action<this, string>;
	removeVerbLearned: Action<this, string>;
	resetAllLearningHistory: Action<this>;
	setUserVerbs: Action<this, UserVerb[]>;
	addExampleLearned: Action<this, string>;
	removeExampleLearned: Action<this, string>;
	addVerbsTestedCorrect: Action<this, string>;
	loadSpanishVerbs: Action<this>;
	loadAppMode: Action<this>;
	loadSpanishExamples: Action<this>;
	loadExampleCountObject: Action<this>;
	updateSpanishExample: Action<this, SpanishExample>;
	loadDutchVerbs: Action<this>;
	handleIsOpenToggle: Action<this, DutchVerb>;
	
}

export const profileModel: ProfileModel = {
	// state variables
	firstName: "",
	learnedVerbs: [],
	userVerbs: [],
	learnedExamples: [],
	verbsTestedCorrect: [],
	spanishVerbs: [],
	appMode: "",
	spanishExamples: [],
	exampleCountObject: {},
	dutchVerbs: [],

	// computed variables
	getNumberOfVerbsTestedCorrect: computed((state) => {
		return state.verbsTestedCorrect.length;
	}),

	// actions
	setFirstName: action((state, firstName) => {
		state.firstName = firstName;
	}),
	addVerbLearned: action((state, verbIdCode) => {
		state.learnedVerbs.push(verbIdCode);
	}),
	removeVerbLearned: action((state, verbIdCode) => {
		state.learnedVerbs = state.learnedVerbs.filter((m) => m !== verbIdCode);
	}),
	resetAllLearningHistory: action((state) => {
		state.learnedVerbs = [];
		state.userVerbs = [];
		state.verbsTestedCorrect = [];
	}),
	setUserVerbs: action((state, userVerbs) => {
		state.userVerbs = userVerbs;
	}),
	addExampleLearned: action((state, exampleIdCode) => {
		state.learnedExamples.push(exampleIdCode);
	}),
	removeExampleLearned: action((state, verbIdCode) => {
		state.learnedExamples = state.learnedExamples.filter(
			(m) => m !== verbIdCode
		);
	}),
	addVerbsTestedCorrect: action((state, verbIdCode) => {
		state.verbsTestedCorrect.push(verbIdCode);
	}),
	loadSpanishVerbs: action((state) => {
		const spanishVerbManager = new SpanishVerbManager(spanishVerbText);
		state.spanishVerbs = spanishVerbManager.getVerbs();
	}),
	loadAppMode: action((state) => {
		state.appMode = import.meta.env.VITE_APPMODE;
	}),
	loadSpanishExamples: action((state) => {
		const spanishExampleManager = new SpanishExampleManager(
			spanishExamplesText
		);
		state.spanishExamples = spanishExampleManager.getExamples();
	}),
	loadExampleCountObject: action((state) => {
		const spanishExampleManager = new SpanishExampleManager(
			spanishExamplesText
		);
		state.exampleCountObject =
			spanishExampleManager.getExampleCountObject();
	}),
	updateSpanishExample: action((state, spanishExample) => {
		state.spanishExamples = state.spanishExamples.map((m) =>
			m.spanish === spanishExample.spanish ? spanishExample : m
		);
	}),
	loadDutchVerbs: action((state) => {
		state.dutchVerbs = getDutchVerbs();
	}),
	handleIsOpenToggle: action((state, dutchVerb) => {
		const _dutchVerb = state.dutchVerbs.find(
			(m) => m.dpodId === dutchVerb.dpodId
		);
		if (_dutchVerb) {
			_dutchVerb.isOpen = !dutchVerb.isOpen;
		}
		if (dutchVerb.isOpen) {
			const userVerb = state.userVerbs.find(
				(m) => m.dpodId === dutchVerb.dpodId
			);
			if (userVerb) {
				userVerb.timesOpened++;
			} else {
				state.userVerbs.push({
					dpodId: dutchVerb.dpodId,
					timesOpened: 1,
				});
			}
		}
	}),
};
