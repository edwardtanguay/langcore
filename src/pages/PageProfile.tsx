import React from "react";
import { useStoreState, useStoreActions } from "../store/hooks.ts"

export const PageProfile = () => {
	const { firstName, learnedVerbs } = useStoreState((state) => state.profileModel);
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

			<h2>Learned verbs:</h2>
			<ul>
				{learnedVerbs.map(suuid => {
					return (
						<li key={suuid}>{suuid}</li>
					)
				})}
			</ul>
		</form>
	)
}
