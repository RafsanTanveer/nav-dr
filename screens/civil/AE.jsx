import React, { useState } from "react";
import { Button, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const DATA = [
    {
        id: '920209001',
        name: 'Rafsan Zani Rabbi',
        designation: 'Assistant Programmer',
        image: 'https://0.academia-photos.com/20936688/5794344/6584685/s200_rafsan.tanveer.jpg',
        office: 'Directorate of Human Resource Development',
        personalContact: '01795045357',
        officeContact: '30309'
    },
    {
        id: '9202049001',
        name: 'Rafsan Zani Rabbi',
        designation: 'Assistant Programmer',
        image: 'https://0.academia-photos.com/20936688/5794344/6584685/s200_rafsan.tanveer.jpg',
        office: 'Directorate of Human Resource Development',
        personalContact: '01795045357',
        officeContact: '30309'
    },
    {
        id: '9202079001',
        name: 'Rafsan Zani Rabbi',
        designation: 'Assistant Programmer',
        image: 'https://0.academia-photos.com/20936688/5794344/6584685/s200_rafsan.tanveer.jpg',
        office: 'Directorate of Human Resource Development',
        personalContact: '01795045357',
        officeContact: '30309'
    },
    {
        id: '9201209001',
        name: 'Rafsan Zani Rabbi',
        designation: 'Assistant Programmer',
        image: 'https://0.academia-photos.com/20936688/5794344/6584685/s200_rafsan.tanveer.jpg',
        office: 'Directorate of Human Resource Development',
        personalContact: '01795045357',
        officeContact: '30309'
    },
    {
        id: '9202099001',
        name: 'Rafsan Zani Rabbi',
        designation: 'Assistant Programmer',
        image: 'https://0.academia-photos.com/20936688/5794344/6584685/s200_rafsan.tanveer.jpg',
        office: 'Directorate of Human Resource Development',
        personalContact: '01795045357',
        officeContact: '30309'
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (


    <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, height: 190 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <Image style={styles.logo} source={{
                uri: item.image
            }} />
        </View>
        <View style={{
            flex: 3, borderBottomColor: 'grey',
            borderBottomWidth: StyleSheet.hairlineWidth, padding: 5
        }}>
            <Text style={{ fontSize: 17, fontFamily: 'serif', fontWeight: 'bold' }} >{item.name} </Text>
            <Text style={{ fontSize: 15, fontFamily: 'serif', marginTop: 3, color: 'grey' }}>{item.designation} </Text>
            <Text style={{ fontFamily: 'serif', marginTop: 3, color: 'grey' }}>{item.office} </Text>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ flex: 1.2, justifyContent: 'center', alignContent: 'center' }} >Personal Contact</Text>
                <Text style={{ flex: 1 }}>{item.personalContact}</Text>
                <Button style={{ flex: 1 }} title="Call" />
            </View>
            <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 10 }}>
                <Text style={{ flex: 1.2, justifyContent: 'center' }} >Office</Text>
                <Text style={{ flex: 1 }}>{item.officeContact}</Text>

                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={styles.buttonText}>Call</Text>
                </TouchableOpacity>
            </View>

        </View>
    </View>

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
    logo: {
        width: 86,
        height: 88,

    },
    button: {
        backgroundColor: "gray",
        height: 40,
        width:60,
        //padding: 10,
        borderRadius: 10
    },
    buttonText: {
        color: "white",
        alignContent: 'center',
        justifyContent:'center'
    }
});

export default AE


