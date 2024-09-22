import React from "react";
import { useStoreState } from "../store/hooks.ts"

export const PageProfile = () => {
	const { firstName } = useStoreState((state) => state.profileModel);

	const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		console.log(111, value);
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
