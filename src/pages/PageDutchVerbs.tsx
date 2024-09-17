import dutchVerbs from '../data/dutchVerbs.json';

dutchVerbs.sort((a, b) => a.rank < b.rank ? 1 : -1);

const devMode = false;

export const PageDutchVerbs = () => {
	return (
		<>
			{dutchVerbs.map(dutchVerb => {
				return (
					<div key={dutchVerb.dpodId}>
						<p>{dutchVerb.english}{devMode && <span> <sup className='text-[.8rem] text-gray-500'>{dutchVerb.rank}</sup></span>}</p>
					</div>
				)
			})}
		</>
	)
}
