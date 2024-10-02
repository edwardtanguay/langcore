import { DevArea } from "./DevArea";
import * as config from '../config';
import { ManageArea } from "./ManageArea";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { DutchVerb } from "../types";
import { ExampleArea } from "./ExampleArea";
import { VerbArea } from "./VerbArea";

interface IProps {
	dutchVerb: DutchVerb;
	learnedVerbs: string[];
}

export const SingularDutchVerb = ({ dutchVerb, learnedVerbs }: IProps) => {
	const { handleIsOpenToggle } = useContext(AppContext);

	const isLearned = learnedVerbs.includes(dutchVerb.dpodId);

	return (
		<div key={dutchVerb.dpodId} >
			<p onClick={() => handleIsOpenToggle(dutchVerb)} className={`bg-slate-300 mb-3 px-2 py-1 cursor-pointer rounded ${isLearned ? 'verbLearned' : ''}`}><span className='font-semibold text-[1.4rem]'>{dutchVerb.english}{config.devMode() && <span> <sup className='text-[.8rem] text-gray-500'>Rank: {dutchVerb.rank}, <span style={{ color: dutchVerb.examples.length === 0 ? 'red' : '' }}>Examples: {dutchVerb.examples.length}</span></sup></span>}</span>
				{dutchVerb.isOpen && (
					<span> - {dutchVerb.infinitive}</span>
				)}</p>
			{
				dutchVerb.isOpen && (
					<div className='ml-3 font-mono text-[1rem] flex flex-col gap-4 bg-white p-3 rounded mb-4 mt-2'>
						<VerbArea dutchVerb={dutchVerb} />
						<ExampleArea examples={dutchVerb.examples} />
						<DevArea dutchVerb={dutchVerb} />
						<ManageArea dutchVerb={dutchVerb} />
					</div>
				)
			}
		</div >
	)
}