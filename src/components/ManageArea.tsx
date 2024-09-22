import { useStoreState } from "../store/hooks.ts"
import { DutchVerb } from "../types.ts";

interface IProps {
	dutchVerb: DutchVerb
}

export const ManageArea = ({ dutchVerb }: IProps) => {
	const { learnedVerbs } = useStoreState((state) => state.profileModel);

	const learned = learnedVerbs.includes(dutchVerb.dpodId);

	return (
		<div>
			{learned ? (
				<button className="buttonManageArea buttonLearned">Learned</button>
			) : (
				<button className="buttonManageArea buttonNotLearned">Not Learned</button>
			)}
		</div>
	)
}