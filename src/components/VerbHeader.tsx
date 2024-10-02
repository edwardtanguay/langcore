import { useContext } from "react";
import { AppContext } from "../AppContext";
import * as config from '../config';
import { DutchVerb } from "../types";
import { useStoreState } from "../store/hooks";

interface IProps {
	dutchVerb: DutchVerb;
	learnedVerbs: string[];
}

export const VerbHeader = ({ dutchVerb, learnedVerbs }: IProps) => {
	const { handleIsOpenToggle } = useContext(AppContext);
	const { userVerbs } = useStoreState((state) => state.profileModel);

	const isLearned = learnedVerbs.includes(dutchVerb.dpodId);
	const userVerb = userVerbs.find(m => m.dpodId === dutchVerb.dpodId);
	const timesOpened = userVerb ? userVerb.timesOpened : 0;

	return (
		<>
			<p onClick={() => handleIsOpenToggle(dutchVerb)} className={`bg-slate-300 flex justify-between mb-3 px-2 py-1 cursor-pointer rounded ${isLearned ? 'verbLearned' : ''}`}>
				<div>
					<span className='font-semibold text-[1.4rem]'>{dutchVerb.english}{config.devMode() && <span> <sup className='text-[.8rem] text-gray-500'>Rank: {dutchVerb.rank}, <span style={{ color: dutchVerb.examples.length === 0 ? 'red' : '' }}>Examples: {dutchVerb.examples.length}</span></sup></span>}</span>
					{dutchVerb.isOpen && (
						<span> - {dutchVerb.infinitive}</span>
					)}
				</div>
				<div className={`flex flex-col justify-center font-mono ${timesOpened === 0 ? `opacity-20` : `opacity-70 text-orange-800`}`}>
					{timesOpened}
				</div>
			</p>
		</>
	)
}