import { LookupLink } from "../components/LookupLink";
import { useStoreState } from "../store/hooks";

export const PageSpanishVerbs = () => {
	const { spanishVerbs } = useStoreState((state) => state.profileModel);

	const buildTatoebaLink = (word: string) => {
		return `<a target="_blank" href="${`https://tatoeba.org/de/sentences/search?from=spa&query=%3D${word}&to=eng&page=1`}">${word}</a>`;
	}

	return (
		<>
			<h2 className="mb-3">There are {spanishVerbs.length} Spanish verbs.</h2>
			<section>
				{spanishVerbs.map((sv) => {
					return (
						<div key={sv.conj.base._1INFI} style={{display: 'table'}} className="bg-slate-300 py-3 px-4 mb-3">
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
									<tr>
										<td>present</td>
										<td className="data tensePresent" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2PRES.yo) }}></td>
										<td className="data tensePresent" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2PRES.tu) }}></td>
										<td className="data tensePresent" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2PRES.el) }}></td>
										<td className="data tensePresent" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2PRES.nosotros) }}></td>
										<td className="data tensePresent" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2PRES.vosotros) }}></td>
										<td className="data tensePresent" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2PRES.ellos) }}></td>
									</tr>
									<tr>
										<td>imperfect</td>
										<td className="data tenseImperfect" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2IMPE.yo) }}></td>
										<td className="data tenseImperfect" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2IMPE.tu) }}></td>
										<td className="data tenseImperfect" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2IMPE.el) }}></td>
										<td className="data tenseImperfect" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2IMPE.nosotros) }}></td>
										<td className="data tenseImperfect" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2IMPE.vosotros) }}></td>
										<td className="data tenseImperfect" dangerouslySetInnerHTML={{ __html: buildTatoebaLink(sv.conj.indicative._2IMPE.ellos) }}></td>
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
