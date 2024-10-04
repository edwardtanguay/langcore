import * as printerOutput from "./printerOutput.ts";

export const print = (idCode: string) => {
	switch (idCode) {
		case "testAll":
			return printerOutput.printTestAll();
		default:
			return 'unknown view';
	}
};

export const printTestAll = () => {
	return "print";
};
