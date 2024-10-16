import { useStoreState } from "../store/hooks";

export const PageSpanishVerbs = () => {
	const { spanishVerbs } = useStoreState((state) => state.profileModel);

	return (
		<>
			<h2 className="mb-3">There are {spanishVerbs.length} Spanish verbs.</h2>
			<section>
				{spanishVerbs.map((sv) => {
					return (
						<div key={sv.verbBase} className="bg-slate-300 w-fit py-1 px-2 mb-3">
							<p><span className="font-semibold">{sv.conj.base._1INFI}</span> - <span>{sv.conj.base._1PRPA}</span> - <span>{sv.conj.base._1PAPA}</span> - <span>(<a className="underline" href={sv.conjugationUrl} target="_blank">conjugate</a>)</span></p>
							<table className="spanishVerb">
								<thead>
									<tr>
										<th>tense</th>
										<th>yo</th>
										<th>tú</th>
										<th>él</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>present</td>
										<td>nnn</td>
										<td>nnn</td>
										<td>nnn</td>
									</tr>
								</tbody>
							</table>
						</div>
					)
				})}
			</section>
		</>
	)
}
