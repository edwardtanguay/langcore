import { SpanishTenseRule } from "../types";

interface IProps {
	rule: SpanishTenseRule;
	areaIdCode: string
}

export const GenericExamples = ({ rule }: IProps) => {
	return (
		<ul className="list-disc ml-3">
			{rule.examples.map((example) => {
				return (
					<li className="text-gray-600 italic">{example.spanish}
						<ul className="list-disc ml-6">
							<li>{example.english}</li>
						</ul>
					</li>
				)
			})}
		</ul>
	)
}