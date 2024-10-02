import { Action, action } from "easy-peasy";
import { UserVerb } from "../../types";

export interface ProfileModel {
	// variables
	firstName: string;
	learnedVerbs: string[];
	userVerbs: UserVerb[];

	// actions
	setFirstName: Action<this, string>;
	addVerbLearned: Action<this, string>;
	removeVerbLearned: Action<this, string>;
	resetAllLearningHistory: Action<this>;
	setUserVerbs: Action<this, UserVerb[]>;
}

export const profileModel: ProfileModel = {
	// state
	firstName: "",
	learnedVerbs: [],
	userVerbs: [],

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
	}),
	setUserVerbs: action((state, userVerbs) => {
		state.userVerbs = userVerbs;
	}),
};
