import {createStackNavigator} from "react-navigation-stack"
import StartPage from "../pages/StartPage";
import ProfilePage from "../pages/ProfilePage"

const screens = {
    StartPage: {
        screen: StartPage,
        navigationOptions: {
            title: 'Start Page',
        }
    },
    ProfilePage: {
        screen: ProfilePage,
        navigationOptions: {
            title: 'Profile Page',

        }
    }

}
const StartPageStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#e0d5d5',
            height: 90,
        },
        headerTitleAlign: 'center',
    },
});
export default StartPageStack;