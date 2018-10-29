import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Switch,
    Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import IRManager from 'react-native-ir-manager';

export default class irBlaster extends Component {
    constructor() {
        super()
        this.state = {
            //isTimerdisabled: true,
            isOnDisabled: false,
            isTimerOff:true,
            timerFlag: false,
            isHavingIr: false
        }
    }
        _handleSwitch = () => this.setState(state => ({
            //isTimerdisabled: !this.state.isTimerdisabled,
            isTimerOff:! this.state.isTimerOff,
            timerFlag : true
        }));


    

    

    hasIrEmitter() {

        IRManager.hasIrEmitter()
            .then(hasIrEmitter => hasIrEmitter ?
                this.setState({
                    isHavingIr: false
                })
                :
                Alert.alert(
                    'Not Supported',
                    'Your device is not having an ir transmiter',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            );


    }

    getCarrierFrequencies() {
        IRManager.getCarrierFrequencies()
            .then(console.log)
            .catch(console.log);
    }

    transmitProntoCode(prontoHexCode) {
        IRManager.transmitProntoCode(prontoHexCode)
            .then(console.log)
            .catch(console.log);
    }


    fanFunctions(ref) {
        if(this.state.isHavingIr == false ){
            this.hasIrEmitter()
        }
        

        const irOn = '0000 0073 0000 000B 0040 0020 0020 0020 0020 0040 0040 0040 0020 0020 0040 0020 0020 0020 0020 0020 0020 0020 0020 0020 0020 0CC8';
        const irOff = '0000 006D 0018 0000 001B 0047 0017 0047 0047 0017 0047 0017 0017 0047 0017 0047 0047 0017 0047 0017 0047 0017 0047 0017 0017 0047 0047 0017 0017 0047 0017 0047 0047 0017 0017 0047 0047 001B 0047 001B 0017 0047 0047 0017 0017 0047 0017 0047 0047 0017 0017 0478';
        const irSpd1 = '0000 006D 000A 000A 00E4 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 0017 0017 002E 0017 0017 0017 002E 0017 0474 0072 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 0017 0017 002E 0017 0017 0017 002E 0017 0474';
        const irSpd2 = '0000 006D 000A 000A 00E4 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 0017 002E 0017 0017 0017 002E 0017 0017 0474 0072 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 0017 002E 0017 0017 0017 002E 0017 0017 0474';
        const irSpd3 = '0000 006D 000A 000A 00E4 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 0017 002E 002E 0017 0017 002E 002E 0017 0474 0072 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 0017 002E 002E 0017 0017 002E 002E 0017 0474';
        const oscl = '0000 006D 0018 0000 001B 0047 0017 0047 0047 0017 0047 0017 0017 0047 0017 0047 0047 001B 0047 0017 0047 0017 0047 0017 0017 0047 0017 0047 0017 0047 0047 0017 0017 0047 0047 0017 0047 0017 0047 001B 0017 0047 0017 0047 0017 0047 0047 0017 0017 0047 0047 0478';
        const rhythm = '0000 006D 0018 0000 001B 0047 0017 0047 0047 0017 0047 0017 0017 0047 0017 0047 0047 0017 0047 001B 0017 0047 0047 0017 0017 0047 0047 0017 0047 001B 0017 0047 0017 0047 0017 0047 0017 0047 0047 0017 0017 0047 0047 001B 0047 0017 0017 0047 0017 0047 0017 0478';
        const timer1 = '0000 006D 000A 000A 00E4 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 002E 0017 0017 0017 0017 002E 002E 0017 0474 0072 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 002E 0017 0017 0017 0017 002E 002E 0017 0474';
        const timer2 = '0000 006D 000A 000A 00E4 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 002E 0017 002E 0017 002E 0017 0017 0017 0474 0072 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 002E 0017 002E 0017 002E 0017 0017 0017 0474';
        const timer3 = '0000 006D 000A 000A 00E4 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 002E 002E 0017 0017 002E 0017 002E 0017 0474 0072 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 002E 002E 0017 0017 002E 0017 002E 0017 0474';
        const timer4 = '0000 006D 000A 000A 00E4 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 002E 002E 002E 0017 002E 002E 0017 0017 0474 0072 002E 002E 002E 0017 0017 0017 0017 0017 0017 0017 002E 002E 002E 0017 002E 002E 0017 0017 0474';
        const timer5 = '0000 006D 000A 000A 00E4 002E 002E 002E 0017 0017 0017 0017 0017 0017 002E 0017 0017 0017 0017 002E 002E 0017 0017 0474 0072 002E 002E 002E 0017 0017 0017 0017 0017 0017 002E 0017 0017 0017 0017 002E 002E 0017 0017 0474';
        const timerOff ='0000 006D 000A 000A 00E4 002E 002E 002E 0017 0017 0017 0017 0017 0017 002E 0017 0017 002E 0017 002E 002E 002E 0017 0474 0072 002E 002E 002E 0017 0017 0017 0017 0017 0017 002E 0017 0017 002E 0017 002E 002E 002E 0017 0474';

        switch (ref) {
            case 1:
                console.log(ref)
                this.setState({
                    isOnDisabled: true
                })
                this.transmitProntoCode(irOn)
                break;
            case 2:
                this.transmitProntoCode(irSpd1)
                console.log(ref)
                break;
            case 3:
                this.transmitProntoCode(irSpd2)
                console.log(ref)
                break;
            case 4:
                this.transmitProntoCode(irSpd3)
                console.log(ref)
                break;
            case 5:
                this.transmitProntoCode(irOff)
                console.log(ref + 'off')
                console.log(ref)
                this.setState({
                    isOnDisabled: false
                })
                break;
            case 6:
                this.transmitProntoCode(timerOff)
                console.log(ref)
                break;
            case 7:
                this.transmitProntoCode(oscl)
                console.log(ref)
                break;
            case 8:
                this.transmitProntoCode(rhythm)
                console.log(ref)
                break;
            case 9:
                this.transmitProntoCode(timer1)
                console.log(ref)
                break;
            case 10:
                this.transmitProntoCode(timer2)
                console.log(ref)
                break;
            case 11:
                this.transmitProntoCode(timer3)
                console.log(ref)
                break;
            case 12:
                this.transmitProntoCode(timer4)
                console.log(ref)
                break;
            case 13:
                this.transmitProntoCode(timer5)
                console.log(ref)
                break;
        }
    }

    componentWillMount() {
        console.log("componentWillMount")
        this.hasIrEmitter();
    }

    updatetimerFlag(){
        this.setState({
            timerFlag :false
           })
    }
            
    render() {

        let onButton = () => {
            return (
                <View style={styles.on}>
                    <Button
                        icon={{ name: 'power-settings-new', type: 'MaterialIcons' }}
                        style={styles.buttonOn}
                        onPress={() => this.fanFunctions(1)}
                        title="Turn ON"
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                    />
                </View>
            );
        };

        let speedButtons = () => {
            return (
                <View style={styles.on}>
                    <View style={styles.speedButtons}>
                        <Button
                            icon={{ name: 'power-settings-new', type: 'MaterialIcons' }}
                            style={styles.buttonOn}
                            onPress={() => this.fanFunctions(2)}
                            title="Speed 1"
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                        />
                        <Button
                            icon={{ name: 'power-settings-new', type: 'MaterialIcons' }}
                            style={styles.buttonOn}
                            onPress={() => this.fanFunctions(3)}
                            title="Speed 2"
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                        />
                        <Button
                            icon={{ name: 'power-settings-new', type: 'MaterialIcons' }}
                            style={styles.buttonOn}
                            onPress={() => this.fanFunctions(4)}
                            title="Speed 3"
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                        />
                    </View>
                    <View style={styles.OffButton}>
                        <Button
                            icon={{ name: 'power-settings-new', type: 'MaterialIcons' }}
                            style={styles.buttonOn}
                            onPress={() => this.fanFunctions(5)}
                            title="OFF"
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                        />
                    </View>
                </View>
            );
        };

        var SpeedPartition = ''
        if (this.state.isOnDisabled == false) SpeedPartition = onButton
        else if (this.state.isOnDisabled == true) SpeedPartition = speedButtons

        if (this.state.isTimerOff == true && this.state.timerFlag == true) {
            this.fanFunctions(6)
            this.updatetimerFlag()
        }


        return (
            <View style={styles.container}>
                <SpeedPartition />

                <View style={styles.functions}>
                    <Button
                        style={styles.buttonFunc}
                        onPress={() => this.fanFunctions(7)}
                        title="  OSCL  "
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                    />
                    <Button
                        style={styles.buttonTimer}
                        onPress={() => this.fanFunctions(8)}
                        title="RHYTHM"
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                    />
                </View>
                <View style={styles.timer}>
                    <View style={styles.buttonTimer}>
                        <Text style={styles.timerText}> Timer </Text>
                        <Switch
                            style={styles.switchTimer}
                            onValueChange={this._handleSwitch}
                            value={!this.state.isTimerOff}
                        />
                    </View>
                    <View style={styles.subtimer}>
                        <Button
                            disabled={this.state.isTimerOff}
                            onPress={() => this.fanFunctions(9)}
                            title="15 mins"
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                        />
                        <Button
                            disabled={this.state.isTimerOff}
                            onPress={() => this.fanFunctions(10)}
                            title="30 mins"
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                        />
                        <Button
                            disabled={this.state.isTimerOff}
                            onPress={() => this.fanFunctions(11)}
                            title="1 hour"
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}

                        />
                        <Button
                            disabled={this.state.isTimerOff}
                            onPress={() => this.fanFunctions(12)}
                            title="2 hour"
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                        />
                        <Button
                            disabled={this.state.isTimerOff}
                            onPress={() => this.fanFunctions(13)}
                            title="custom"
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    on: {
        paddingTop: 25,

        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    speedButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingRight: 15

    },
    OffButton: {

    },
    functions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    timer: {
        flex: 2,
        justifyContent: 'space-around',
        //alignItems: 'center',
        // backgroundColor:'red',
    },
    subtimer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonTimer: {
        flex: 1,
        flexDirection: 'row',
        //backgroundColor:'yellow',
        justifyContent: 'space-evenly',
    },
    timerText: {
        textAlignVertical: 'center',
        //justifyContent:'center',
        fontWeight: 'bold',
        textAlign: 'right',
        fontSize: 20,

    },
    switchTimer: {
    },
    off: {
        flex: 1,
        justifyContent: 'space-around',
    },
    buttonOn: {
        justifyContent: 'space-around',

    },
    

})
