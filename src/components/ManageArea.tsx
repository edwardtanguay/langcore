import { useStoreActions, useStoreState } from "../store/hooks.ts"
import { DutchVerb } from "../types.ts";

interface IProps {
	dutchVerb: DutchVerb
}

export const ManageArea = ({ dutchVerb }: IProps) => {
	const { learnedVerbs } = useStoreState((state) => state.profileModel);
	const { addVerbLearned, removeVerbLearned } = useStoreActions((actions) => actions.profileModel);

	const learned = learnedVerbs.includes(dutchVerb.dpodId);

	return (
		<div>
			{learned ? (
				<button onClick={() => removeVerbLearned(dutchVerb.dpodId)} className="buttonManageArea buttonLearned">Learned</button>
			) : (
				<button onClick={() => addVerbLearned(dutchVerb.dpodId)} className="buttonManageArea buttonNotLearned">Not Learned</button>
			)}
		</div>
	)
}