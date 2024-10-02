import { useContext } from "react";
import { AppContext } from "../AppContext";
import * as config from '../config';
import { DutchVerb } from "../types";

interface IProps {
	dutchVerb: DutchVerb;
	learnedVerbs: string[];
}

export const VerbHeader = ({dutchVerb, learnedVerbs}: IProps) => {
	const { handleIsOpenToggle } = useContext(AppContext);

	const isLearned = learnedVerbs.includes(dutchVerb.dpodId);

	return (
		<>
			<p onClick={() => handleIsOpenToggle(dutchVerb)} className={`bg-slate-300 mb-3 px-2 py-1 cursor-pointer rounded ${isLearned ? 'verbLearned' : ''}`}><span className='font-semibold text-[1.4rem]'>{dutchVerb.english}{config.devMode() && <span> <sup className='text-[.8rem] text-gray-500'>Rank: {dutchVerb.rank}, <span style={{ color: dutchVerb.examples.length === 0 ? 'red' : '' }}>Examples: {dutchVerb.examples.length}</span></sup></span>}</span>
				{dutchVerb.isOpen && (
					<span> - {dutchVerb.infinitive}</span>
				)}</p>
		</>
	)
}