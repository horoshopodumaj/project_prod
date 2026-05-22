import { createReduxStore, AppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
import { StateSchema, 
    ReduxStoreWithManager, 
    ThunkConfig, 
    StateSchemaKey } from "./config/StateSchema";


export { StoreProvider, 
    createReduxStore, 
    type StateSchema,
    type StateSchemaKey, 
    type  ReduxStoreWithManager, 
    type AppDispatch, 
    type ThunkConfig }