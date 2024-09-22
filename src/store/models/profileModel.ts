import { Action, action } from "easy-peasy";

export interface ProfileModel {
	// variables
	firstName: string;
	learnedVerbs: string[];

	// actions
	setFirstName: Action<this, string>;
}

export const profileModel: ProfileModel = {
	firstName: '',
	learnedVerbs: ['QkrYyM', 'dTX5Nf'],
	setFirstName: action((state, firstName) => {
		state.firstName = firstName; 
	})
};