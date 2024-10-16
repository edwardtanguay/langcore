import { FaSearchengin } from "react-icons/fa6";
import { LookupLinkKind, SpanishVerb } from "../types"

interface IProps {
	sv: SpanishVerb;
	kind: LookupLinkKind;

}

export const LookupLink = ({ sv, kind }: IProps) => {
	switch (kind) {
		case "conjugate123teachme":
			return <span><a className="underline" href={sv.conjugation1Url} target="_blank"><FaSearchengin className="inline-block" /></a></span>
		case "conjugateReverso":
			return <span><a className="underline" href={sv.conjugation2Url} target="_blank"><FaSearchengin className="inline-block" /></a></span>
	}
}
