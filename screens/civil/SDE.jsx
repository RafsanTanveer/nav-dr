import * as React from "react";
import { Pressable, View, Text } from "react-native";


const SDE = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Welcome to CE</Text>
            <Text>Checkout screens from the tab below</Text>
            <Pressable onPress={() => navigation.openDrawer()} style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
                <Text>Open Drawer</Text>
            </Pressable>
        </View>
    )
}

export default SDE



