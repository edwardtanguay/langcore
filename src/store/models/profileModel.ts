import { Action, action } from "easy-peasy";

export interface ProfileModel {
	// variables
	firstName: string;

	// actions
	setFirstName: Action<this, string>;
}

export const profileModel: ProfileModel = {
	firstName: '',
	setFirstName: action((state, firstName) => {
		state.firstName = firstName; 
	})
};