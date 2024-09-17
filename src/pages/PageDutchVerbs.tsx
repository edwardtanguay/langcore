import { useContext } from "react";
import { AppContext } from "../AppContext";
import { FaMagnifyingGlass } from "react-icons/fa6";

const devMode = false;

export const PageDutchVerbs = () => {
	const { dutchVerbs, handleIsOpenToggle } = useContext(AppContext);

	return (
		<>
			{dutchVerbs.map(dutchVerb => {
				return (
					<div key={dutchVerb.dpodId}>
						<p onClick={() => handleIsOpenToggle(dutchVerb)} className="bg-slate-300 mb-3 px-2 py-1 cursor-pointer rounded"><span className='font-semibold text-[1.4rem]'>{dutchVerb.english}{devMode && <span> <sup className='text-[.8rem] text-gray-500'>{dutchVerb.rank}</sup></span>}</span>
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
								</div>
							)
						}
					</div >
				)
			})}
		</>
	)
}
