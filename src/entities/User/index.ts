import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { getUserInited } from "./model/selectors/getUserInited/getUserInited/getUserInited";
import { isUserAdmin, isUserManager } from "./model/selectors/roleSelector";
import { userActions, userReducer } from "./model/slice/userSlice";
import {UserSchema, User, UserRole} from './model/types/user'



export { userReducer, 
    userActions, 
    UserSchema, 
    User, 
    UserRole, 
    getUserAuthData, 
    getUserInited, 
    isUserAdmin, 
    isUserManager,
}