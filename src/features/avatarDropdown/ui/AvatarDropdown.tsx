import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared';
import { Avatar } from '@/shared/ui/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { useCallback } from 'react';
import { getRouteAdminPanel, getRouteMain, getRouteProfile } from "@/shared/const/router";
import { useTranslation } from 'react-i18next';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown: React.FC<AvatarDropdownProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        navigate(getRouteMain())
    }, [dispatch, navigate])

    const goToProfile = useCallback(()=> {
        if(!authData) return;
        navigate(getRouteProfile(authData.id))
    }, [navigate, authData])

    const goToAdmin = useCallback(()=> {
        if(!authData) return;
        navigate(getRouteAdminPanel())
    }, [navigate, authData])

    const isAdminPanelAvailable = isAdmin || isManager

    return (
        <Dropdown
            direction='bottom left'
            className={classNames('', {}, [className])}
            trigger={
                (<Avatar
                    size={30} 
                    src={authData?.avatar}
                />)
            }
            items= {[
                ...(isAdminPanelAvailable ? [{
                    id: 0,
                    content: t("Админка"),
                    onClick: goToAdmin
                }]: []),
                {
                    id: 1,
                    content: t("Профиль"),
                    onClick: goToProfile
                },
                {
                    id: 2,
                    content: t("Выйти"),
                    onClick: onLogout
                },
            ]}
        />
    );
}