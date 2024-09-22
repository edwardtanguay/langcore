import { Action, action } from "easy-peasy";

export interface ProfileModel {
	// variables
	firstName: string;
	learnedVerbs: string[];

	// actions
	setFirstName: Action<this, string>;
	addVerbLearned: Action<this, string>;
	removeVerbLearned: Action<this, string>;
	resetAllLearningHistory: Action<this>;
}

export const profileModel: ProfileModel = {
	firstName: "",
	learnedVerbs: [],
	setFirstName: action((state, firstName) => {
		state.firstName = firstName;
	}),
	addVerbLearned: action((state, verbIdCode) => {
		console.log("ADD", verbIdCode);
		state.learnedVerbs.push(verbIdCode);
	}),
	removeVerbLearned: action((state, verbIdCode) => {
		console.log("REMOVE", verbIdCode);
		state.learnedVerbs = state.learnedVerbs.filter((m) => m !== verbIdCode);
	}),
	resetAllLearningHistory: action((state) => {
		state.learnedVerbs = [];
	}),
};
