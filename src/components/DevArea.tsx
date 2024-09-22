import { DutchVerb } from "../types";
import * as config from '../config';

interface IProps {
	dutchVerb: DutchVerb
}

export const DevArea = ({ dutchVerb }: IProps) => {
	return (
		<>
			{config.devMode() && (
				<>
					<div className="text-xs -mb-4 font-mono opacity-30">Datapod text for examples:</div>
					<div className="bg-slate-700 text-slate-300 font-mono text-xs p-1">
						{dutchVerb.exampleDatapodTextLines.map((line, index) => {
							return (
								<div key={index}>{line}</div>
							)
						})}
					</div>
				</>
			)}
		</>
	)
}