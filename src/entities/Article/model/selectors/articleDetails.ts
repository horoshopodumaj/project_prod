import { StateSchema } from "app/providers/StoreProvider";

export const getArcticleDetailsData = (state: StateSchema) => state.articleDetails?.data;

export const getArcticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;

export const getArcticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
