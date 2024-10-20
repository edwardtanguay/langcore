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
					<p>okok</p>
					{/* {rule.examples
						.map((example) => {
							return `<li class="text-gray-600 italic">${example.spanish}
					<ul class="list-disc ml-6">
						<li>${example.english}</li>
					</ul>
				</li>`;
						}) */}
				</>
			)}
		</>
	)
}

// const genericExamples = (rule: SpanishTenseRule, areaId: string) => {
// 	if (areaId === "main") {
// 		return `
// 		${rule.examples
// 				.map((example) => {
// 					return `<li class="text-gray-600 italic">${example.spanish}
// 					<ul class="list-disc ml-6">
// 						<li>${example.english}</li>
// 					</ul>
// 				</li>`;
// 				})
// 				.join("")}
// `;
// 	} else {
// 		return "";
// 	}
// };