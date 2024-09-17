import { useContext } from "react";
import { AppContext } from "../AppContext";
// import { FaMagnifyingGlass } from "react-icons/fa6";

const devMode = false;

export const PageDutchVerbs = () => {
	const { dutchVerbs } = useContext(AppContext);

	return (
		<>
			{dutchVerbs.map(dutchVerb => {
				return (
					<div key={dutchVerb.dpodId}>
						<p className='font-semibold text-lg'>{dutchVerb.english}{devMode && <span> <sup className='text-[.8rem] text-gray-500'>{dutchVerb.rank}</sup></span>}</p>
						<div className='ml-3 font-mono text-[1rem] flex flex-col gap-4 bg-white p-3 rounded mb-4 mt-2'>
							<div className="flex justify-between">
								<p>vandaag <span className='present'><a href={dutchVerb.presentExampleLink} target="_blank">{dutchVerb.present}</a></span> ik</p>
							{/* <FaMagnifyingGlass /> */}
							</div>
							<p>vandaag <span className='present'><a href={dutchVerb.infinitiveExampleLink} target="_blank">{dutchVerb.infinitive}</a></span> we</p>
							<p>gisteren <span className='past'><a href={dutchVerb.imperfectSingularExampleLink} target="_blank">{dutchVerb.imperfectSingular}</a></span> ik</p>
							<p>gisteren <span className='past'>{dutchVerb.imperfectPlural}</span> we</p>
							<p>{dutchVerb.participleNoun} <span className={`font-bold ${dutchVerb.participleHelper === 'ben' ? 'text-red-600' : ''}`}>{dutchVerb.participleHelper}</span> gisteren <span className='participle'>{dutchVerb.participleVerb}</span></p>
						</div>
					</div>
				)
			})}
		</>
	)
}
