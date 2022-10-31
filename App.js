import "react-native-gesture-handler";
import * as React from "react";
import { Pressable, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import Home from "./screens/Home";
import CE from "./screens/civil/CE";
import ACE from "./screens/civil/ACE";
import SE from "./screens/civil/SE";
import AE from "./screens/civil/AE";
import SDE from "./screens/civil/SDE";
import XEN from "./screens/civil/XEN";


import DrawerContent from "./screens/DrawerContent";



const CustomDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}  />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Chief Engineer (Civil)" component={CE} />
      <Drawer.Screen name="Addl. Chief Engineer (Civil)" component={ACE} />
      <Drawer.Screen name="Superintendent Engineer (Civil)" component={SE} />
      <Drawer.Screen name="Executive Engineer (Civil)" component={XEN} />
      <Drawer.Screen name="Sub-divisional Engineer (Civil)" component={SDE} />
      <Drawer.Screen name="Assistant Engineer (Civil)" component={AE} />
    </Drawer.Navigator>
  );
};

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <CustomDrawer />
    </NavigationContainer>
  );
}

export default App;
