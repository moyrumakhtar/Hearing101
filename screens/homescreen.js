import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import logo from '../images/appLogo.jpg';
import img from '../images/test.jpg';

export default class homeScreen extends Component {
    constructor(props) {
        super(props);
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
                            <Text style={styles.formAppTitle}>FAQ</Text>
                        </View>
                    </View>

                    <View style={styles.image}>
                        <img
                            id="formImg"
                            src={img} className="formImg"
                        />
                    </View>


                    <Text style={styles.formText}>What is a hearing test?</Text>
                    <Text style={styles.formTextSmall}>A hearing tests allows for you to check your ear health
                        and identify any issues. Most test can be expensive so having
                        a free app to the intial test can be helpful. Without having to book an appointment
                        you can get more information about your ear health </Text>

                    <Text style={styles.formText}>How does it work?</Text>
                    <Text style={styles.formTextSmall}>The test will play different sounds which you simply state
                        if you can hear it or not. Once you answer all the question
                        the test will give your results. Also, the test will ask some personal question to
                        understand the current health. As age is needed to know which sound you should be able
                        to hear. The test requires headphones to be connected and volume set to max.</Text>

                    <Text style={styles.formText}>How to get best results?</Text>
                    <Text style={styles.formTextSmall}>To get the best result make sure to be in a quiet enviorment and
                        have headphones connected. Also, answer all question truthfully
                        as the result are based on the answers given.

                    </Text>

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
            fontSize: 14,
            color: '#838991',
            fontWeight: 'bold',
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
            textAlign: "justify"

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
        image:
        {
            width: 320,
            alignSelf: "center"
        },

    });