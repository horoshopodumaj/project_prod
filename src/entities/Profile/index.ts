import { profileActions, profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profile';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';




export { 
    Profile, 
    ProfileSchema,
    profileActions, 
    profileReducer, 
    fetchProfileData, 
    ProfileCard, 
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileForm,
    updateProfileData
}
