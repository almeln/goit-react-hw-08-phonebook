import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import authSelectors from "redux/auth/auth-selectors";

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({ 
    children,
    restricted = false,
    redirectTo = '/',
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && routeProps.restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo}/> : children}
        </Route>
    );
}