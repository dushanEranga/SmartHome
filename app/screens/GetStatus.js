//********************* Written by Dushan Eranga**************************//


import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  FlatList,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { ListItem, Button } from 'react-native-elements'
import SplashScreen from 'react-native-splash-screen'

import ModalFanMode from "../config/models"; //importing default modal
import {ModalTimerMode,ModalTempMode,ModalHumidMode,ModalSwingMode,ModalRhythmMode} from "../config/models"; //importing modals 


export default class GetStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionList: [], // the list of wifi remote screen
      dataArray: [], //fan responce stores as an array
      showArray: [],// creates a reference arry according to the "dataArray"
      isModalVisible: false, // to show / hide modal
      isLoading:true, // loading effect
      isListAvailable:false  // show / hides "optionList"
    }
    this._toggleModal = this._toggleModal.bind('this');
  }
  _toggleModal = (status) => this.setState({ isModalVisible: status });

  getEspStatus() {
  
    this.setState({
      modelNumber: '',
      dataArray: [],
      showArray: [],
      isLoading:true,
      isListAvailable:false
    })
    this.loadingReturn()
    fetch('http://192.168.8.150/ReplaceMe', {
      method: 'POST'
    })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        responseJson = responseJson.split("/");
        for (let i = 0; i < responseJson.length; i++) {
          this.setState({
            dataArray: [...this.state.dataArray, ...responseJson],
            isLoading:false,
            isListAvailable:true
          })
        }
        this.makeShowArray(...this.state.dataArray)
      })
      .catch((error) => {
        //console.error(error);
        Alert.alert(
          'No devices found',
          'Fan disconnected or devices are not in the same network',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        )
        this.setState({
          isLoading:false
        })
      });
    console.log('getEspStatus')
    console.log(this.state.dataArray[4])
  }

  makeShowArray(a, b, c, d, e, f, g, h) {
    let showArray = [...this.state.showArray];
    switch (a) {
      case '0':
        this.setState({
          showArray: [...this.state.showArray, 'Fan is ON']

        })
        break;
      case '1':
        console.log('Fan is OFF')
        this.setState({
          showArray: [...this.state.showArray, 'Fan is OFF']
        })
        break;
    }

    switch (b) {
      case '0':
        this.setState({
          showArray: [...this.state.showArray, 'Fan Deactivated']
        })
        break;
      case '1':
        this.setState({
          showArray: [...this.state.showArray, 'Speed 1 Selected']
        })
        break;
      case '2':
        this.setState({
          showArray: [...this.state.showArray, 'Speed 2 Selected']
        })
        break;
      case '3':
        this.setState({
          showArray: [...this.state.showArray, 'Speed 3 Selected']
        })
        break;
    }

    switch (c) {
      case '0':
        this.setState({
          showArray: [...this.state.showArray, 'Timer is OFF']
        })
        break;

      case '1':
        this.setState({
          showArray: [...this.state.showArray, 'Timer is ON']
        })
        break;
    }

    switch (d) {
      case '0':
        this.setState({
          showArray: [...this.state.showArray, 'Timer Deactivated']
        })
        break;
      case '1':
        this.setState({
          showArray: [...this.state.showArray, 'Timer 1 Selected']
        })
        break;
      case '2':
        this.setState({
          showArray: [...this.state.showArray, 'Timer 2 Selected']
        })
        break;
      case '3':
        this.setState({
          showArray: [...this.state.showArray, 'Timer 3 Selected']
        })
        break;
      case '4':
        this.setState({
          showArray: [...this.state.showArray, 'Timer 4 Selected']
        })
        break;
    }

    let temp = e / 100;
    let humid = f / 100;

    this.setState({
      showArray: [...this.state.showArray, temp + ' Celcius'],
    })

    this.setState({
      showArray: [...this.state.showArray, humid + ' %']
    })

    switch (g) {
      case '0':
        this.setState({
          showArray: [...this.state.showArray, 'Swing OFF']
        })
        break;

      case '1':
        this.setState({
          showArray: [...this.state.showArray, 'Swing ON']
        })
        break;
    }

    switch (h) {
      case '0':
        this.setState({
          showArray: [...this.state.showArray, 'RHYTHEM OFF']
        })
        break;

      case '1':
        this.setState({
          showArray: [...this.state.showArray, 'RHYTHEM ON']
        })
        break;

    }

    this.setState({
      optionList: [

        {
          id: 2,
          title: 'Fan Mode',
          author: this.state.showArray[1],
          thumbnail: require('./Images/fan.png')
        },
        {
          id: 4,
          title: 'Timer Mode',
          author: this.state.showArray[3],
          thumbnail: require('./Images/timer.png')
        }
        ,
        {
          id: 5,
          title: 'Temperature',
          author: this.state.showArray[4],
          thumbnail: require('./Images/temperature.png')
        }
        ,
        {
          id: 6,
          title: 'Humidity',
          author: this.state.showArray[5],
          thumbnail: require('./Images/humidity.png')
        }
        ,
        {
          id: 7,
          title: 'Swing Mode',
          author: this.state.showArray[6],
          thumbnail: require('./Images/refresh.png')
        }
        ,
        {
          id: 8,
          title: 'RHYTHM Mode',
          author: this.state.showArray[7],
          thumbnail: require('./Images/rhythm.png')
        }
      ],
      dataArray: []
    })
  }

  componentDidMount() {
    SplashScreen.hide();
    console.log("componentDidMount");
    this.getEspStatus()
    
  }

  loadingReturn(){
    if (this.state.isLoading){
      return (
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
      )
    }
  }

  listRuturn(){
    if (this.state.isListAvailable){
      return (
        <FlatList removeClippedSubviews={true}
          data={this.state.optionList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      )
    }
  }

  modelReturn() {

    let id = this.state.modelNumber
    switch (id) {
      case 2:

        return (
          <ModalFanMode toggleMode = {this.state.isModalVisible} />
        )
        break;
        
      case 4:

        return (
          <ModalTimerMode toggleMode = {this.state.isModalVisible} />
        )
        break;

        case 5 :
        return (
          <ModalTempMode toggleMode = {this.state.isModalVisible} />
        )
        break;
        case 6:
        return (
          <ModalHumidMode toggleMode = {this.state.isModalVisible} />
        )
        break;

        case 7:
        return (
          <ModalSwingMode toggleMode = {this.state.isModalVisible} />
        )
        break;

        case 8 :
        return (
          <ModalRhythmMode toggleMode = {this.state.isModalVisible} />
        )
        break;
    };
  }
  setFanStatus(id) {
    this._toggleModal(true);
    console.log('My is is');
    console.log(id);

    this.setState({
      modelNumber: id
    })

  }

  _renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this.setFanStatus(item.id);
      }}>
      <ListItem
        roundAvatar
        id={item.id}
        title={item.title}
        subtitle={item.author}
        avatar={item.thumbnail}
        navigation={this.props.navigation}
      />
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => item.id.toString();
  render() {
    console.log('Hwllo');
    console.log(this.state.dataArray[1])
    console.log(this.state.showArray[1]);

    return (

      <View style={styles.container}>
        <View>
          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
          />
        </View>
        {this.loadingReturn()}
        {this.listRuturn()}
        
        <View style={styles.refreshButton}>
          <Button
            onPress={() => this.getEspStatus()}
            title='Refresh Values'
            icon={{
              name: 'refresh',
              size: 15,
              color: 'white'
            }}
            titleStyle={{ fontWeight: "1400" }}

            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 250,
              height: 45,
              borderColor: "transparent",
              borderWidth: 5,
              borderRadius: 10
            }}
          />
        </View>
        
        {this.modelReturn()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  refreshButton: {
    alignItems: 'center',
    paddingBottom: 25
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});