import { useStoreState } from "../store/hooks";

export const PageSpanishVerbs = () => {
	const { spanishVerbs } = useStoreState((state) => state.profileModel);

	return (
		<>
			<h2 className="mb-3">There are {spanishVerbs.length} Spanish verbs.</h2>
			<section>
				{spanishVerbs.map((sv) => {
					return (
						<div key={sv.verb} className="bg-slate-300 w-fit py-1 px-2 mb-3">
							<p>{sv.verb} - {sv.type} - {sv.base}</p>
						</div>
					)
				})}
			</section>
		</>
	)
}
