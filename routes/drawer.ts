import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import SettingsStack from "./settingsStack";
import StartPageStack from "./startStack";

const RootDrawNavigator = createDrawerNavigator({
    StartPage: {
        screen:StartPageStack,
    },
    Settings: {
        screen: SettingsStack,
    }
});

export default createAppContainer(RootDrawNavigator);