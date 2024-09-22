import { useContext } from "react";
import { AppContext } from "../AppContext";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { DutchVerbExample } from "../types";
import { DevArea } from "../components/DevArea";
import * as config from '../config';
import { ManageArea } from "../components/ManageArea";

export const PageDutchVerbs = () => {
	const { dutchVerbs, setDutchVerbs, handleIsOpenToggle } = useContext(AppContext);

	const handleExampleToggle = (example: DutchVerbExample) => {
		example.isOpen = !example.isOpen;
		const _dutchVerbs = structuredClone(dutchVerbs);
		setDutchVerbs(_dutchVerbs);
	}

	return (
		<>
			{dutchVerbs.map(dutchVerb => {
				return (
					<div key={dutchVerb.dpodId}>
						<p onClick={() => handleIsOpenToggle(dutchVerb)} className="bg-slate-300 mb-3 px-2 py-1 cursor-pointer rounded"><span className='font-semibold text-[1.4rem]'>{dutchVerb.english}{config.devMode() && <span> <sup className='text-[.8rem] text-gray-500'>Rank: {dutchVerb.rank}, <span style={{color: dutchVerb.examples.length === 0 ? 'red': ''}}>Examples: {dutchVerb.examples.length}</span></sup></span>}</span>
							{dutchVerb.isOpen && (
								<span> - {dutchVerb.infinitive}</span>
							)}</p>
						{
							dutchVerb.isOpen && (
								<div className='ml-3 font-mono text-[1rem] flex flex-col gap-4 bg-white p-3 rounded mb-4 mt-2'>
									<div className="flex justify-between">
										<p>vandaag <span className='present'><a href={dutchVerb.presentExampleLink} target="_blank">{dutchVerb.present}</a></span> ik</p>
										<a href={dutchVerb.conjugationLink} target="_blank"><FaMagnifyingGlass /></a>
									</div>
									<p>vandaag <span className='present'><a href={dutchVerb.infinitiveExampleLink} target="_blank">{dutchVerb.infinitive}</a></span> we</p>
									<p>gisteren <span className='past'><a href={dutchVerb.imperfectSingularExampleLink} target="_blank">{dutchVerb.imperfectSingular}</a></span> ik</p>
									<p>gisteren <span className='past'><a href={dutchVerb.imperfectPluralExampleLink} target="_blank">{dutchVerb.imperfectPlural}</a></span> we</p>
									<p>{dutchVerb.participleNoun} <span className={`font-bold ${dutchVerb.participleHelper === 'ben' ? 'text-red-600' : ''}`}>{dutchVerb.participleHelper}</span> gisteren <span className='participle'><a href={dutchVerb.participleExampleLink} target="_blank">{dutchVerb.participleVerb}</a></span></p>
									<div className="text-sm -mt-3">
										{dutchVerb.examples.map(example => {
											return (
												<div key={example.dpodId} className="mt-3">
													<div onClick={() => handleExampleToggle(example)} className="border rounded-t-md py-1 px-2 bg-slate-200 italic text-slate-800 cursor-pointer border-r-slate-400 border-l-slate-400 border-t-slate-400">{example.english}</div>
													{example.isOpen && (
														<div className="border rounded-b-md py-1 px-2 bg-slate-300 font-bold border-r-slate-400 border-l-slate-400 border-b-slate-400">{example.dutch}</div>
													)}
												</div>
											)
										})}
									</div>
									<DevArea dutchVerb={dutchVerb}/>
									<ManageArea dutchVerb={dutchVerb}/>
								</div>
							)
						}
					</div >
				)
			})}
		</>
	)
}
