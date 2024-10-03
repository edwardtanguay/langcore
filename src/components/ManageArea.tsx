import { useContext } from "react";
import { AppContext } from "../AppContext.tsx";
import { useStoreActions, useStoreState } from "../store/hooks.ts"
import { DutchVerb } from "../types.ts";

interface IProps {
	dutchVerb: DutchVerb
}

export const ManageArea = ({ dutchVerb }: IProps) => {
	const { learnedVerbs } = useStoreState((state) => state.profileModel);
	const { addVerbLearned, removeVerbLearned } = useStoreActions((actions) => actions.profileModel);
	const { handleIsOpenToggle } = useContext(AppContext);

	const learned = learnedVerbs.includes(dutchVerb.dpodId);

	const addVerb = (dutchVerb: DutchVerb) => {
		handleIsOpenToggle(dutchVerb);
		addVerbLearned(dutchVerb.dpodId)
	}

	const removeVerb = (dutchVerb: DutchVerb) => {
		removeVerbLearned(dutchVerb.dpodId)
	}

	return (
		<div>
			{learned ? (
				<button onClick={() => removeVerb(dutchVerb)} className="buttonManageArea buttonLearned">Toggle Learned</button>
			) : (
				<button onClick={() => addVerb(dutchVerb)} className="buttonManageArea buttonNotLearned">Toggle Learned</button>
			)}
		</div>
	)
}