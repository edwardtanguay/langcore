import { Action, action, Computed, computed } from "easy-peasy";
import { SpanishVerb, UserVerb } from "../../types";
import { SpanishVerbManager } from "../../classes/spanishVerbManager";
import spanishVerbText from '../../data/spanishVerbs.spv.txt?raw';

export interface ProfileModel {
	// variables
	firstName: string;
	learnedVerbs: string[];
	userVerbs: UserVerb[];
	learnedExamples: string[];
	verbsTestedCorrect: string[];
	spanishVerbs: SpanishVerb[];

	// computed
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
}

export const profileModel: ProfileModel = {
	// state
	firstName: "",
	learnedVerbs: [],
	userVerbs: [],
	learnedExamples: [],
	verbsTestedCorrect: [],
	spanishVerbs: [],

	//computed
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
		console.log(111, spanishVerbText);
		const spanishVerbManager = new SpanishVerbManager(spanishVerbText);
		state.spanishVerbs = spanishVerbManager.getVerbs();
	}),
};
