import React from "react";
import { useStoreState, useStoreActions } from "../store/hooks.ts"

export const PageProfile = () => {
	const { firstName } = useStoreState((state) => state.profileModel);
	const { setFirstName } = useStoreActions((actions) => actions.profileModel);


	const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setFirstName(value);
	}

	return (
		<form>
			<div className="formRow">
				<label htmlFor="firstName">First Name:</label>
				<input type="text" id="firstName" onChange={e => handleChangeFirstName(e)} value={firstName}></input>
			</div>
		</form>
	)
}
