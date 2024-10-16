import { LookupLink } from "../components/LookupLink";
import { SpanishTenseBlock } from "../components/SpanishTenseBlock";
import { useStoreState } from "../store/hooks";

export const PageSpanishVerbs = () => {
	const { spanishVerbs } = useStoreState((state) => state.profileModel);

	return (
		<>
			<h2 className="mb-3">There are {spanishVerbs.length} Spanish verbs.</h2>
			<section>
				{spanishVerbs.map((sv) => {
					return (
						<div key={sv.conj.base._1INFI} style={{ display: 'table' }} className="bg-slate-300 py-3 px-4 mb-3">
							<div className="mb-2 flex justify-between">
								<div>
									<span className="font-semibold text-[1.1rem] data">{sv.spanish}</span> - <span className="text-[1rem] italic opacity-50">{sv.english}</span> - <span className="text-[.7rem] opacity-50">{sv.rank.toFixed(2)}</span>
								</div>
								<div>
									<span className="data">{sv.conj.base._1PRPA}</span> - <span className="data">{sv.conj.base._1PAPA}</span>
								</div>
							</div>
							<table className="spanishVerb">
								<thead>
									<tr>
										<th className="flex gap-1">
											<LookupLink sv={sv} kind={"conjugate123teachme"} />
											<LookupLink sv={sv} kind={"conjugateReverso"} />
										</th>
										<th>yo</th>
										<th>tú</th>
										<th>él</th>
										<th>nosotros</th>
										<th>vosotros</th>
										<th>ellos</th>
									</tr>
								</thead>
								<tbody>
									<SpanishTenseBlock sv={sv} title="present" tenseClass="tensePresent" tenseIdCode="_2PRES" />
									<SpanishTenseBlock sv={sv} title="imperfect" tenseClass="tenseImperfect" tenseIdCode="_2IMPE" />
									<SpanishTenseBlock sv={sv} title="preterite" tenseClass="tensePreterite" tenseIdCode="_2PRET" />
								</tbody>
							</table>
						</div>
					)
				})}
			</section>
		</>
	)
}
