import { ComponentRender } from "@/shared/lib/tests/componentRender/ComponentRender";
import AppRouter from "./AppRouter";
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from "@/shared/const/router";
import { screen } from "@testing-library/react";
import { UserRole } from "@/entities/User";

describe('app/router/AppRouter', function(){
    test('Страница рендерится', async () => {
        ComponentRender(<AppRouter/>, {
            route: getRouteAbout()
        });

        const page = await screen.findByTestId('AboutPage');

        expect(page).toBeInTheDocument()
    })

    test('Страница не найдена', async () => {
        ComponentRender(<AppRouter/>, {
            route: '/kjkjkkbj'
        });

        const page = await screen.findByTestId('NotFoundPage');

        expect(page).toBeInTheDocument()
    })

    test('Пользователь не авторизован', async () => {
        ComponentRender(<AppRouter/>, {
            route: getRouteProfile('1')
        });

        const page = await screen.findByTestId('MainPage');

        expect(page).toBeInTheDocument()
    })

    test('Пользователь не авторизован', async () => {
        ComponentRender(<AppRouter/>, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    authData: {},
                    _inited: true
                }
            }
        });

        const page = await screen.findByTestId('ProfilePage');

        expect(page).toBeInTheDocument()
    })

    test('Доступ к закрытой странице запрещен', async () => {
        ComponentRender(<AppRouter/>, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    authData: {},
                    _inited: true
                }
            }
        });

        const page = await screen.findByTestId('ForbiddenPage');

        expect(page).toBeInTheDocument()
    })

    test('Доступ к закрытой странице разрешен', async () => {
        ComponentRender(<AppRouter/>, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    authData: {
                        roles: [UserRole.ADMIN]
                    },
                    _inited: true
                }
            }
        });

        const page = await screen.findByTestId('AdminPanelPage');

        expect(page).toBeInTheDocument()
    })
})