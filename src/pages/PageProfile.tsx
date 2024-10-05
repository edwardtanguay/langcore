import React, { useState } from "react";
import { useStoreState, useStoreActions } from "../store/hooks.ts"
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { NavLink } from "react-router-dom";

export const PageProfile = () => {
	const { firstName, learnedVerbs, userVerbs } = useStoreState((state) => state.profileModel);
	const { setFirstName, resetAllLearningHistory } = useStoreActions((actions) => actions.profileModel);
	const { dutchVerbs } = useContext(AppContext);
	const [askingIfSure, setAskingIfSure] = useState(false);

	const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setFirstName(value);
	}

	const percent = ((learnedVerbs.length / dutchVerbs.length) * 100).toFixed(0);

	const askIfSure = () => {
		setAskingIfSure(true);
	}

	const resetData = () => {
		resetAllLearningHistory();
		setAskingIfSure(false)
	}

	const cancelReset = () => {
		setAskingIfSure(false)
	}

	return (
		<form>
			<div className="formRow">
				<label htmlFor="firstName">First Name:</label>
				<input type="text" id="firstName" onChange={e => handleChangeFirstName(e)} value={firstName}></input>
			</div>
			{firstName !== "" && (
				<>
					<div className="formRow mt-3">
						<label className="-mb-1">Stats:</label>
						<p>You have learned {learnedVerbs.length} of {dutchVerbs.length} Dutch verbs: <b>{percent}%</b></p>
					</div>
					<div className="formRow mt-3">
						<label>Learn:</label>
						{learnedVerbs.length === 0 && userVerbs.length === 0 ? (
							<p><NavLink to="/dutchVerbs" className="underline">Start learning Dutch verbs</NavLink></p>
						) : (
							<p><NavLink to="/dutchVerbs" className="underline">Continue learning Dutch verbs</NavLink></p>
						)}
					</div>
					{(learnedVerbs.length !== 0 || userVerbs.length !== 0) && (
						<div className="formRow mt-3">
							<label>Reset all learning history:</label>
							<button type="button" className="buttonNormal mt-1" onClick={askIfSure}>RESET ALL DATA NOW</button>
							{askingIfSure && (
								<div className="ml-3 mt-1">
									<p>Are you sure?</p>
									<div className="flex gap-2">
										<button type="button" className="buttonNormal mt-1" onClick={resetData}>Yes</button>
										<button type="button" className="buttonNormal mt-1" onClick={cancelReset}>CANCEL</button>
									</div>
								</div>
							)}
						</div>
					)}
				</>
			)}
			<div className="mt-4" >
				<h3 className="font-semibold">Printouts:</h3>
				<ul className="ml-6 list-disc">
					<li><a href="?mode=print&view=testAll" target="_blank" className="underline">Dutch Verbs - Basic Tenses</a></li>
				</ul>
			</div>
		</form>
	)
}
