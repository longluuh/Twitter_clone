import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/Profile";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
