import { createStore, persist } from "easy-peasy";
import { profileModel, ProfileModel } from "./models/profileModel";

export type StoreModel = {
	profileModel: ProfileModel;
};

export const store = createStore<StoreModel>({
	profileModel: persist(profileModel, {
		storage: "localStorage",
	}),
});
