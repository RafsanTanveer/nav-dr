import React, { useState } from "react";
import { Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const DATA = [
    {
        id: "bd7acbea-c1b1-46c2r-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-ra4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd9e6-145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571we29d72",
        title: "Third Item",
    }, {
        id: "58694a0f-3da1-471f-bd96-145571et29d72",
        title: "Third Item",
    }, {
        id: "58694a0f-3da1-471f-bd96-1455h71e29d72",
        title: "Third Item",
    }, {
        id: "58694a0f-3da1-471fj-bd96-145571e29d72",
        title: "Third Item",
    }, {
        id: "58694a0kf-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    }, {
        id: "58694a0f-3da1-471df-bd96-145571e29d72",
        title: "Third Item",
    }, {
        id: "58694a0f-3da1-d471f-bd96-145571e29d72",
        title: "Third Item",
    }, {
        id: "58694a0f-3da1w-471f-bd96-145571e29d72",
        title: "Third Item",
    }, {
        id: "58694a0f-3da1t-471f-bd96-145571e29d72",
        title: "Third Item",
    }, {
        id: "58694a0f-3da1-471f-bd96l-145571e29d72",
        title: "Third Item",
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (

    <TouchableOpacity >
        <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, height: 150 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Text>Image view</Text>
            </View>
            <View style={{
                flex: 3, borderBottomColor: 'grey',
                borderBottomWidth: StyleSheet.hairlineWidth, padding: 5
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Name </Text>
                <Text>Designtaion </Text>
                <Text>Office </Text>
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{ flex: 1 }} >mobile</Text>
                    <Text style={{ flex: 1 }}>017950455</Text>
                    <Button style={{ flex: 1 }} title="Call" />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ flex: 1 }} >mobile</Text>
                    <Text style={{ flex: 1 }}>017950455</Text>
                    <Button style={{ flex: 1 }} title="Call" />
                </View>

            </View>
        </View>
    </TouchableOpacity >

    // <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    //     <Text style={[styles.title, textColor]}>{item.title}</Text>
    // </TouchableOpacity>
);


const AE = ({ navigation }) => {

    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default AE



