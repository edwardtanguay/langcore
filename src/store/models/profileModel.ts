import { Action, action } from "easy-peasy";

export interface ProfileModel {
	// variables
	firstName: string;

	// actions
	setChangeFirstName: Action<this, string>;
}

export const profileModel: ProfileModel = {
	firstName: '',
	setChangeFirstName: action((state, firstName) => {
		state.firstName = firstName; 
	})
};