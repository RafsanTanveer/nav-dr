import * as React from "react";
import { Pressable, View, Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList, withNavigation } from "@react-navigation/drawer";

import { SafeAreaView } from "react-native-safe-area-context";


import Home from "./Home";



const DrawerContent = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: "#cee0f5", height: 200 }}>
                <View></View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                {/* {getExpandableView(props)} */}
            </DrawerContentScrollView>
            {/* <DrawerItem label={"sdf"} onPress={(props) => { props.navigation.navigate('Home') }}  >
              
            </DrawerItem> */}
            <View style={{ marginLeft: 20 }}>
                <TouchableOpacity onPress={() => { }}>
                    <Text>Update</Text>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 20 }}>
                <TouchableOpacity onPress={() => { }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default DrawerContent