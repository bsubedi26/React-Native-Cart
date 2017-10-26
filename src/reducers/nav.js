import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';


const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());
// const firstAction = AppNavigator.router.getActionForPathAndParams("Home");

export default function navReducer(state = initialState, action) {
    let nextState = AppNavigator.router.getStateForAction(action, state)
    // switch (action.type) {
    //     case 'Login':
    //         nextState = AppNavigator.router.getStateForAction(
    //             NavigationActions.back(),
    //             state
    //         );
    //         break;
    //     case 'Logout':
    //         nextState = AppNavigator.router.getStateForAction(
    //             NavigationActions.navigate({ routeName: 'Login' }),
    //             state
    //         );
    //         break;
    //     default:
    //         nextState = AppNavigator.router.getStateForAction(action, state);
    //         break;
    // }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}
