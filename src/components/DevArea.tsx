import { DutchVerb } from "../types"

interface IProps {
	dutchVerb: DutchVerb
}

export const DevArea = ({ dutchVerb }: IProps) => {
	return (
		<>
			<div className="text-xs -mb-4 font-mono opacity-30">Datapod text for examples:</div>
			<div className="bg-slate-700 text-slate-300 font-mono text-xs p-1">
				{dutchVerb.exampleDatapodText}
			</div>
		</>
	)
}