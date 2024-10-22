export const useSelectors = () => {
	const getTestNumber = () => {
		return 999;
	}	
	const getTestMessage = () => {
		return 'nnn';
	}

	return [getTestNumber, getTestMessage];
}