import { SpanishTenseRule } from "../types";

interface IProps {
	rule: SpanishTenseRule;
	areaIdCode: string
}

export const GenericExamples = ({ rule, areaIdCode }: IProps) => {
	return (
		<>
			{areaIdCode === 'main' && (
				<>
					{rule.examples.map((example) => {
						return (
							<li className="text-gray-600 italic">{example.spanish}
								<ul className="list-disc ml-6">
									<li>{example.english}</li>
								</ul>
							</li>
						)
					})}
				</>
			)}
		</>
	)
}