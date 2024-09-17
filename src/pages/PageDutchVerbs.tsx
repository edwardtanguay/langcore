import dutchVerbs from '../data/dutchVerbs.json';

dutchVerbs.sort((a, b) => a.rank < b.rank ? 1 : -1);

const devMode = false;

export const PageDutchVerbs = () => {
	return (
		<>
			{dutchVerbs.map(dutchVerb => {
				return (
					<div key={dutchVerb.dpodId}>
						<p className='font-semibold text-lg'>{dutchVerb.english}{devMode && <span> <sup className='text-[.8rem] text-gray-500'>{dutchVerb.rank}</sup></span>}</p>
						<div className='ml-3 font-mono text-[.8rem] flex flex-col gap-2 bg-white p-3 rounded mb-4 mt-2'>
							<p>vandaag <span className='present'>{dutchVerb.present}</span> ik</p>
							<p>we <span className='present'>{dutchVerb.infinitive}</span> vandaag</p>
							<p>gisteren <span className='past'>{dutchVerb.imperfectSingular}</span> ik</p>
							<p>we <span className='past'>{dutchVerb.imperfectPlural}</span> gisteren</p>
						</div>
					</div>
				)
			})}
		</>
	)
}
