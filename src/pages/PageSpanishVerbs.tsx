import { LookupLink } from "../components/LookupLink";
import { useStoreState } from "../store/hooks";

export const PageSpanishVerbs = () => {
	const { spanishVerbs } = useStoreState((state) => state.profileModel);

	return (
		<>
			<h2 className="mb-3">There are {spanishVerbs.length} Spanish verbs.</h2>
			<section>
				{spanishVerbs.map((sv) => {
					return (
						<div key={sv.conj.base._1INFI} className="bg-slate-300 w-100 py-1 px-2 mb-3">
							<div className="mb-2 flex justify-between">
								<div>
									<span className="font-semibold text-[1.1rem] data">{sv.conj.base._1INFI}</span>
								</div>
								<div>
									<span className="data">{sv.conj.base._1PRPA}</span> - <span className="data">{sv.conj.base._1PAPA}</span>
								</div>
							</div>
							<table className="spanishVerb">
								<thead>
									<tr>
										<th><LookupLink sv={sv} kind={"conjugate123teachme"} /></th>
										<th>yo</th>
										<th>tú</th>
										<th>él</th>
										<th>nosotros</th>
										<th>vosotros</th>
										<th>ellos</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>present</td>
										<td className="data">{sv.conj.indicative._2PRES.yo}</td>
										<td className="data">{sv.conj.indicative._2PRES.tu}</td>
										<td className="data">{sv.conj.indicative._2PRES.el}</td>
										<td className="data">{sv.conj.indicative._2PRES.nosotros}</td>
										<td className="data">{sv.conj.indicative._2PRES.vosotros}</td>
										<td className="data">{sv.conj.indicative._2PRES.ellos}</td>
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
