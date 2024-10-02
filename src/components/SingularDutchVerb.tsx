import { DevArea } from "./DevArea";
import { ManageArea } from "./ManageArea";
import { DutchVerb } from "../types";
import { ExampleArea } from "./ExampleArea";
import { VerbArea } from "./VerbArea";
import { VerbHeader } from "./VerbHeader";

interface IProps {
	dutchVerb: DutchVerb;
	learnedVerbs: string[];
}

export const SingularDutchVerb = ({ dutchVerb, learnedVerbs }: IProps) => {
	return (
		<div key={dutchVerb.dpodId} >
			<VerbHeader dutchVerb={dutchVerb} learnedVerbs={learnedVerbs}/>
			{
				dutchVerb.isOpen && (
					<div className='ml-3 font-mono text-[1rem] flex flex-col gap-4 bg-white p-3 rounded mb-4 mt-2'>
						<VerbArea dutchVerb={dutchVerb} />
						<ExampleArea examples={dutchVerb.examples} />
						<DevArea dutchVerb={dutchVerb} />
						<ManageArea dutchVerb={dutchVerb} />
					</div>
				)
			}
		</div >
	)
}