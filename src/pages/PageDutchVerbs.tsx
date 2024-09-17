import dutchVerbs from '../data/dutchVerbs.json';

export const PageDutchVerbs = () => {
	return (
		<>
			{dutchVerbs.map(dutchVerb => {
				return (
					<div key={dutchVerb.dpodId}>
						<p>{dutchVerb.english}</p>
					</div>
				)
			})}
		</>
	)
}
