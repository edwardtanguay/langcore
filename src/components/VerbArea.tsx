import { FaMagnifyingGlass } from "react-icons/fa6";
import { DutchVerb } from "../types";

interface IProps {
	dutchVerb: DutchVerb;
}

export const VerbArea = ({ dutchVerb }: IProps) => {
	return (
		<>
			<div className="flex justify-between">
				<p>vandaag <span className='present'><a href={dutchVerb.presentExampleLink} target="_blank">{dutchVerb.present}</a></span> ik</p>
				<a href={dutchVerb.conjugationLink} target="_blank"><FaMagnifyingGlass /></a>
			</div>
			<p>vandaag <span className='present'><a href={dutchVerb.infinitiveExampleLink} target="_blank">{dutchVerb.infinitive}</a></span> we</p>
			<p>gisteren <span className='past'><a href={dutchVerb.imperfectSingularExampleLink} target="_blank">{dutchVerb.imperfectSingular}</a></span> ik</p>
			<p>gisteren <span className='past'><a href={dutchVerb.imperfectPluralExampleLink} target="_blank">{dutchVerb.imperfectPlural}</a></span> we</p>
			<p>{dutchVerb.participleNoun} <span className={`font-bold ${dutchVerb.participleHelper === 'ben' ? 'text-red-600' : ''}`}>{dutchVerb.participleHelper}</span> gisteren <span className='participle'><a href={dutchVerb.participleExampleLink} target="_blank">{dutchVerb.participleVerb}</a></span></p>
		</>
	)
}