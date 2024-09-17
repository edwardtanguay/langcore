import { useContext } from "react";
import { AppContext } from "../AppContext";

const devMode = false;

export const PageDutchVerbs = () => {
	const { dutchVerbs } = useContext(AppContext);

	return (
		<>
			{dutchVerbs.map(dutchVerb => {
				return (
					<div key={dutchVerb.dpodId}>
						<p className='font-semibold text-lg'>{dutchVerb.english}{devMode && <span> <sup className='text-[.8rem] text-gray-500'>{dutchVerb.rank}</sup></span>}</p>
						<div className='ml-3 font-mono text-[.8rem] flex flex-col gap-2 bg-white p-3 rounded mb-4 mt-2'>
							<p>vandaag <span className='present'>{dutchVerb.present}</span> ik</p>
							<p>vandaag <span className='present'>{dutchVerb.infinitive}</span> we</p>
							<p>gisteren <span className='past'>{dutchVerb.imperfectSingular}</span> ik</p>
							<p>gisteren <span className='past'>{dutchVerb.imperfectPlural}</span> ik</p>
							<p>{dutchVerb.participleNoun} <span className={`font-bold ${dutchVerb.participleHelper === 'ben' ? 'text-red-600' : ''}`}>{dutchVerb.participleHelper}</span> gisteren <span className='participle'>{dutchVerb.participleVerb}</span></p>
						</div>
					</div>
				)
			})}
		</>
	)
}
