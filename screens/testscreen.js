import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'

import logo from '../images/appLogo.jpg';
import Ionicons from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";

import SoundPlayer from '../misc/sound';


export default class testScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startTest: false, message: "", age: "0",
            size: "0"
        }
    }

    ages = [
        "18-19", "20-29", "30-39", "40-49", "50-59"
    ];

    startTestToggle = () => {
        this.setState(({ startTest }) => ({ startTest: !startTest }));
        console.log(this.state.age);

    }

    exit = () => {
        this.props.navigation.navigate('home')
    }

    clear = () => {
        this.setState({ age: "0" })

    }
    screenRender = () => {

        if (this.state.age == "50-59") {
            return (
                <>
                    <View style={styles.TestItems}>
                        <Text style={styles.formText}>50s:</Text>

                        <SoundPlayer

                            links={[
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/8000.mp3',
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/10000.mp3',
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/12000.mp3',
                            ]} />

                        <TouchableOpacity onPress={() => this.clear()}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}> Restart </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.exit()}>
                            <View>
                                <Text style={styles.formText}> Exit </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>
            );
        }
        else if (this.state.age == "40-49") {
            return (

                <>
                    <View style={styles.TestItems}>
                        <Text style={styles.formText}>40s:</Text>

                        <SoundPlayer

                            links={[
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/10000.mp3',
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/12000.mp3',
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/14000.mp3',
                            ]} />

                        <TouchableOpacity onPress={() => this.clear()}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}> Restart </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.exit()}>
                            <View>
                                <Text style={styles.formText}> Exit </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>
            );
        }
        else if (this.state.age == "30-39") {
            return (

                <>
                    <View style={styles.TestItems}>
                        <Text style={styles.formText}>30s:</Text>

                        <SoundPlayer

                            links={[
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/12000.mp3',
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/14000.mp3',
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/15000.mp3',
                            ]}
                        />

                        <TouchableOpacity onPress={() => this.clear()}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}> Restart </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.exit()}>
                            <View>
                                <Text style={styles.formText}> Exit </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>

            );
        }
        else if (this.state.age == "20-29") {
            return (
                <>
                    <View style={styles.TestItems}>
                        <Text style={styles.formText}>20s:</Text>

                        <SoundPlayer

                            links={[
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/16000.mp3',
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/17000.mp3',
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/18000.mp3',
                            ]}
                        />

                        <TouchableOpacity onPress={() => this.clear()}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}> Restart </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.exit()}>
                            <View>
                                <Text style={styles.formText}> Exit </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>
            );
        }
        else if (this.state.age == "18-19") {
            return (
                <>
                    <View style={styles.TestItems}>
                        <Text style={styles.formText}>10s:</Text>

                        <SoundPlayer

                            links={[
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/20000.mp3',
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/21000.mp3',
                                'http://www.noiseaddicts.com/audio/mosquito_ringtones/22000.mp3',
                            ]}
                        />

                        <TouchableOpacity onPress={() => this.clear()}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}> Restart </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.exit()}>
                            <View>
                                <Text style={styles.formText}> Exit </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>
            );
        }
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
                        </View>
                    </View>

                    <View styles={styles.listBox}>

                        {this.state.age === "0" ? (

                            <><Text style={styles.formText}>Read Below</Text>
                                <Text style={styles.formTextSmall}>Keep in mind app results may not be incredibly accurate,
                                    but are at least more likely to say something is worth getting checked
                                    out by a professional than to say your hearing is in the normal range
                                    when it is not.
                                </Text>

                                <Text style={styles.formText}>Tips</Text>
                                <Text style={styles.formTextSmall}>
                                    – Use newer, clean headphones.
                                </Text>
                                <Text style={styles.formTextSmall}>
                                    – Put the right one in your right ear and the left one in your left
                                </Text>
                                <Text style={styles.formTextSmall}>
                                    – Find a quiet spot that will remain really quiet for 5-15 minutes.
                                </Text>
                                <Text style={styles.formTextSmall}>
                                    – Take a screen shot of the results to save them in case you delete the app later.
                                </Text>

                                <TouchableOpacity
                                    onPress={() => this.startTestToggle()}>
                                    <View style={styles.button1}>
                                        <Text style={styles.buttonText}> Start </Text>
                                    </View>
                                </TouchableOpacity>

                            </>

                        ) : (
                            <>
                                <FlatList
                                    ListHeaderComponent={<Text style={styles.formText}> For Selected Age  </Text>}
                                    data={this.state.size}
                                    renderItem={this.screenRender}
                                />

                            </>
                        )
                        }
                    </View>


                </View>


                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={this.state.startTest}
                    onRequestClose={this.startTestToggle}
                    onDismiss={this.screenRender}

                >

                    <View style={styles.modalCon}>
                        <View style={styles.modal}>

                            <View style={styles.header}>
                                <View style={styles.headerCon1}>
                                    <Text style={styles.formAppTitleModal}>Please Select Age</Text>

                                </View>
                            </View>

                            <View styles={styles.headerCon}>

                                <SelectDropdown
                                    data={this.ages}
                                    onSelect={(selectedItem) => {
                                        this.setState({ age: selectedItem })
                                    }} />

                                <TouchableOpacity onPress={() => this.startTestToggle()}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}> Submit </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create
    ({
        TestItems:
        {
            alignItems: "center",
            justifyContent: "center",
        },
        listBox:
        {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#78236"

        },
        container:
        {
            backgroundColor: "#fdfdff",
            width: "90%",
            alignSelf: "center",

        },
        modalCon:
        {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        modal:
        {
            backgroundColor: "#f2f2f2",
            padding: 20,
            shadowColor: "#0f3d0f",
            shadowOffset: {
                height: 1,
                width: 0
            },
            shadowRadius: 2,
            shadowOpacity: 0.40,

        },
        formAppTitleModal:
        {
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
            fontSize: 16,
            color: '#5A5A5A',
            fontWeight: 'bold',
            marginBottom: 10,
        },
        formAppTitle:
        {
            marginLeft: 65,
            marginRight: 65,
            marginTop: 20,
            fontSize: 16,
            color: '#5A5A5A',
            fontWeight: 'bold',
            marginBottom: 20,
        },
        formText:
        {
            padding: 5,
            color: 'black',
            marginTop: 10,
            marginBottom: 10,
            fontSize: 13,
            color: '#5A5A5A',
            fontWeight: 'bold',
            alignSelf: "center"
        },
        formTextSmallC:
        {

            padding: 5,
            marginTop: 0,
            margin: 40,
            marginBottom: 0,
            fontSize: 12,
            color: '#5A5A5A',
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
            color: '#5A5A5A',
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
        headerCon1:
        {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: 20,
        },
        button1:
        {
            backgroundColor: '#8bb9ed',
            padding: 8,
            paddingRight: 16,
            paddingLeft: 16,
            marginRight: 40,
            marginLeft: 40,
            margin: 60,

        },
        button:
        {
            backgroundColor: '#8bb9ed',
            padding: 8,
            paddingRight: 16,
            paddingLeft: 16,
            marginRight: 40,
            marginLeft: 40,
            margin: 20,
            marginBottom: 0,

        },
        buttonText: {
            textAlign: "center",
            color: '#FFFFFF'

        },
    });