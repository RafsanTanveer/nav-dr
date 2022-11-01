import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";



// const data = [
//     {
//         id: '1',
//         name: 'sdf',
//         designation: 'sdfasd',
//         office: 'asdfsd',
//         contactNumber: '564654',
//         officeNumber: '444'
//     },
//     {
//         id: '2',
//         name: 'sdf',
//         designation: 'sdfasd',
//         office: 'asdfsd',
//         contactNumber: '564654',
//         officeNumber: '444456'
//     },
//     {
//         id: '1',
//         name: 'sxcvxcvdf',
//         designation: 'sdfafghfsd',
//         office: 'asdfdfgdfsd',
//         contactNumber: '564ghjghj654',
//         officeNumber: '4sdfdf44'
//     },
//     {
//         id: '3',
//         name: 'ssdfxcvbsddf',
//         designation: 'ssdfdfasd',
//         office: 'asdsdfsdffsd',
//         contactNumber: '564654',
//         officeNumber: '445644'
//     },

    
//     {
//         id: '4',
//         name: 'sdsdfgdfsdff',
//         designation: 'sdfasvbmnd',
//         office: 'asdfsdvbxcvb',
//         contactNumber: '56sdf4654',
//         officeNumber: '456444'
//     },
//     {
//         id: '5',
//         name: 'sdfsdfdghf',
//         designation: 'sdfacvbsd',
//         office: 'asdcvbfsd',
//         contactNumber: '56sdf4654',
//         officeNumber: '444564'
//     }
// ]

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
];


const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
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



