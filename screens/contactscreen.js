import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import logo from '../images/appLogo.jpg';

export default class contactScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            agreed: false,
        }
    }

    agreeTo = () => {
        this.setState({agreed: true});
    }

    render() {
        return (
            <View>

                <img
                    id="loginLogo"
                    src={logo} className="loginLogo"
                />

                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerCon}>
                            <Text style={styles.formAppTitle}>CONTACT</Text>
                        </View>
                    </View>

                   
                    <Text style={styles.formText}>Name:</Text>
                    <Text style={styles.formTextSmallC}>Moyrum Akhtar</Text>
                    <Text style={styles.formText}>Email:</Text>
                    <Text style={styles.formTextSmallC}>19069640@stu.mmu.ac.uk</Text>
                    <Text style={styles.formText}>Phone Number:</Text>
                    <Text style={styles.formTextSmallC}>07704739019 </Text>

                    <View style={styles.bottom}>
                        <Text style={styles.formText}>DISCLAIMER</Text>
                        <Text style={styles.formTextSmall}>This app was created for my final year project. The app shouldn't
                            be used as a replacment for a doctor. It was created to allow for
                            intial testing.</Text>
                        <Text style={styles.formTextSmall}>DONT NOT USE if you have pain in ear. During testing if you feel any discomfort
                            STOP the test and seek medical help.</Text>
                    </View>

                    <TouchableOpacity onPress={() => this.agreeTo()}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}> I Agree </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create
    ({
        container:
        {
            backgroundColor: "#fdfdff",
            width: "90%",
            alignSelf: "center",

        },
        formAppTitle:
        {
            marginLeft: 65,
            marginRight: 65,
            marginTop: 20,
            fontSize: 16,
            color: '#34633E',
            fontWeight: 'bold',
            marginBottom: 20,
        },
        formText:
        {
            padding: 5,
            color: 'black',
            marginTop: 10,
            margin: 40,
            marginBottom: 0,
            fontSize: 13,
            color: '#838991',
            fontWeight: 'bold',
        },
        formTextSmallC:
        {

            padding: 5,
            marginTop: 0,
            margin: 40,
            marginBottom: 0,
            fontSize: 12,
            color: '#a5adb4',
            fontWeight: "600",
            textAlign: "justify",
            borderBottomColor: '#C0C0C0',
            borderBottomWidth: 2,

        },
        formTextSmall:
        {

            padding: 5,
            marginTop: 0,
            margin: 40,
            marginBottom: 5,
            fontSize: 12,
            color: '#a5adb4',
            fontWeight: "600",
            textAlign: "justify",
        },
        header:
        {
            flex: 1,
            alignItems: "center"
        },
        headerCon:
        {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
        },
        bottom:
        {
            marginTop: 160,
            paddingTop: 20,
            
        },
        button:
        {
            backgroundColor: '#CC0000',
            padding: 8,
            paddingRight: 16,
            paddingLeft: 16,
            marginRight: 40,
            marginLeft: 40,
            margin: 20,

        },
        buttonText: {
            textAlign: "center",
            justifyContent: "center",
            color: '#FFFFFF'

        },
    });