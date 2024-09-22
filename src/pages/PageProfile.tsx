import { useStoreState } from "../store/hooks.ts"

export const PageProfile = () => {
	const { firstName } = useStoreState((state) => state.profileModel);

	return (
		<form>
			<div className="formRow">
				<label htmlFor="firstName">First Name:</label>
				<input type="text" id="fullName" value={firstName}></input>
			</div>
		</form>
	)
}
