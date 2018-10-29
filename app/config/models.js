import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
  
} from 'react-native';
import Modal from "react-native-modal";

import { ButtonGroup } from 'react-native-elements';

export default class ModalFanMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      selectedIndex: 3,
      showReturn:''
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  componentDidMount() {
    this.setState({ isModalVisible: true })
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
    console.log('selectedIndex ' + selectedIndex)
    switch(selectedIndex){
      case 0:
      fetch('http://192.168.8.150/body', {
        method: 'POST',
        body: '3379986294',
      })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson == 3379986294){
          this.setState({ showReturn:'Fan entered into Speed 1' })
        }else this.setState({ showReturn:'Not delivered' })

      })
      .catch((error) => {
        console.error(error);
      });
      break;

      case 1:
      fetch('http://192.168.8.150/body', {
        method: 'POST',
        body: '3356842673',
      })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson == 3356842673){
          this.setState({ showReturn:'Fan entered into Speed 2' })
        }else this.setState({ showReturn:'Not delivered' })
        
      })
      .catch((error) => {
        console.error(error);
      });
      break;

      case 2:
      fetch('http://192.168.8.150/body', {
        method: 'POST',
        body: '3063508398',
      })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson == 3063508398){
          this.setState({ showReturn:'Fan entered into Speed 3' })
        }else this.setState({ showReturn:'Not delivered' })
        
      })
      .catch((error) => {
        console.error(error);
      });
      break;

      case 3:
      fetch('http://192.168.8.150/body', {
        method: 'POST',
        body: '902958103',
      })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson == 902958103){
          this.setState({ showReturn:'Fan OFF' })
        }else this.setState({ showReturn:'Not delivered' })
        
      })
      .catch((error) => {
        console.error(error);
      });
      break;
    }

  }
  componentWillReceiveProps(newProps) {
    if (this.props.toggleMode === true) {
      this.setState({ isModalVisible: true })
    }
  }
  render() {
    console.log('Hello modal')
    console.log(this.state.isModalVisible)
    const buttons = ['Speed 1', 'Speed 2', 'Speed 3','OFF']
    const { selectedIndex } = this.state

    return (
      <Modal
        isVisible={this.state.isModalVisible}
        onBackdropPress={() => this.setState({ isModalVisible: false ,showReturn:''})}
      >

        <View style={styles.modalContent}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 50 }}
            underlayColor="blue"
          />
          <Text>{this.state.showReturn}</Text>
          {this.renderButton("Close", () => this.setState({ isModalVisible: false,showReturn:'' }))}
        </View>
      </Modal>
    )
  }
  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

  export class ModalTimerMode extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalVisible: false,
        selectedIndex: 4,
        showReturn:''
      }
      this.updateIndex = this.updateIndex.bind(this)
    }
    componentDidMount() {
      this.setState({ isModalVisible: true })
    }
    updateIndex(selectedIndex) {
      this.setState({ selectedIndex })
      console.log('selectedIndex ' + selectedIndex)

      switch(selectedIndex){
        case 0:
        fetch('http://192.168.8.150/body', {
          method: 'POST',
          body: '2526734404',
        })
        .then((response) => response.text())
        .then((responseJson) => {
          console.log(responseJson);
          if(responseJson == 2526734404){
            this.setState({ showReturn:'Fan entered into Timer 1' })
          }else this.setState({ showReturn:'Not delivered' })
          
        })
        .catch((error) => {
          console.error(error);
        });
        break;
  
        case 1:
        fetch('http://192.168.8.150/body', {
          method: 'POST',
          body: '1253026919',
        })
        .then((response) => response.text())
        .then((responseJson) => {
          console.log(responseJson);
          if(responseJson == 1253026919){
            this.setState({ showReturn:'Fan entered into Timer 2' })
          }else this.setState({ showReturn:'Not delivered' })
          
        })
        .catch((error) => {
          console.error(error);
        });
        break;
  
        case 2:
        fetch('http://192.168.8.150/body', {
          method: 'POST',
          body: '2620035948',
        })
        .then((response) => response.text())
        .then((responseJson) => {
          console.log(responseJson);
          if(responseJson == 2620035948){
            this.setState({ showReturn:'Fan entered into Timer 3' })
          }else this.setState({ showReturn:'Not delivered' })
          
        })
        .catch((error) => {
          console.error(error);
        });
        break;
  
        case 3:
        fetch('http://192.168.8.150/body', {
          method: 'POST',
          body: '2201932595',
        })
        .then((response) => response.text())
        .then((responseJson) => {
          console.log(responseJson);
          if(responseJson == 2201932595){
            this.setState({ showReturn:'Fan entered into Timer 3' })
          }else this.setState({ showReturn:'Not delivered' })
          
        })
        .catch((error) => {
          console.error(error);
        });
        break;

        case 4:
        fetch('http://192.168.8.150/body', {
          method: 'POST',
          body: '3732451536',
        })
        .then((response) => response.text())
        .then((responseJson) => {
          console.log(responseJson);
          if(responseJson == 3732451536){
            this.setState({ showReturn:'Timer OFF' })
          }else this.setState({ showReturn:'Not delivered' })
          
        })
        .catch((error) => {
          console.error(error);
        });
        break;
      }
  
    }
    componentWillReceiveProps(newProps) {
      if (this.props.toggleMode === true) {
        this.setState({ isModalVisible: true })
      }
    }
    render() {
      console.log('Hello modal')
      console.log(this.state.isModalVisible)
      const buttons = ['Timer One', 'Timer Two', 'Timer Three','Timer Four','OFF']
      const { selectedIndex } = this.state
  
      return (
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false ,showReturn:''})}
        >
  
          <View style={styles.modalContent}>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{ height: 50 }}
              underlayColor="blue"
            />
            <Text>{this.state.showReturn}</Text>
            {this.renderButton("Close", () => this.setState({ isModalVisible: false,showReturn:'' }))}
          </View>
        </Modal>
      )
    }
    renderButton = (text, onPress) => (
      <TouchableOpacity onPress={onPress} >
        <View style={styles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

export class ModalTempMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModelView: '',
      modelNumber: '',
      isModalVisible: false,
    }
  }
  componentDidMount() {
    this.setState({ isModalVisible: true })
  }
  componentWillReceiveProps(newProps) {
    if (this.props.toggleMode === true) {
      this.setState({ isModalVisible: true })
    }
  }
  render() {
    console.log('Hello modal')
    console.log(this.state.isModalVisible)
    return (
      <Modal
        isVisible={this.state.isModalVisible}
        onBackdropPress={() => this.setState({ isModalVisible: false })}
      >
        <View style={styles.modalContent}>
          <Text>Temperature mode control is under construction</Text>
          {this.renderButton("Close", () => this.setState({ isModalVisible: false }))}
        </View>
      </Modal>
    )
  }
  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

    export class ModalHumidMode extends Component {
      constructor(props) {
        super(props);
        this.state = {
          ModelView: '',
          modelNumber: '',
          isModalVisible: false,
        }
      }
      componentDidMount() {
        this.setState({ isModalVisible: true })
      }
      componentWillReceiveProps(newProps) {
        if (this.props.toggleMode === true) {
          this.setState({ isModalVisible: true })
        }
      }
      render() {
        console.log('Hello modal')
        console.log(this.state.isModalVisible)
        return (
          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.setState({ isModalVisible: false })}
          >
            <View style={styles.modalContent}>
              <Text>Humidity control is under construction</Text>
              {this.renderButton("Close", () => this.setState({ isModalVisible: false }))}
            </View>
          </Modal>
        )
      }
    
      renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress} >
          <View style={styles.button}>
            <Text>{text}</Text>
          </View>
        </TouchableOpacity>
      );
    }

  export class ModalSwingMode extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalVisible: false,
        selectedIndex: 3,
        showReturn:''
      }
      this.updateIndex = this.updateIndex.bind(this)
    }
    componentDidMount() {
      this.setState({ isModalVisible: true })
    }
    updateIndex(selectedIndex) {
      this.setState({ selectedIndex })
      console.log('selectedIndex ' + selectedIndex)
      switch(selectedIndex){
        case 0:
        fetch('http://192.168.8.150/body', {
          method: 'POST',
          body: '2671452133',
        })
        .then((response) => response.text())
        .then((responseJson) => {
          console.log(responseJson);
          if(responseJson == 2671452133){
            this.setState({ showReturn:'Swing' })
          }else this.setState({ showReturn:'Not delivered' })
        })
        .catch((error) => {
          console.error(error);
        });
        break;
      }
    }
    componentWillReceiveProps(newProps) {
      if (this.props.toggleMode === true) {
        this.setState({ isModalVisible: true })
      }
    }
    render() {
      console.log('Hello modal')
      console.log(this.state.isModalVisible)
      const buttons = ['Swing']
      const { selectedIndex } = this.state

      return (
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false ,showReturn:''})}
        >
  
          <View style={styles.modalContent}>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{ height: 50 }}
              underlayColor="blue"
            />
            <Text>{this.state.showReturn}</Text>
            {this.renderButton("Close", () => this.setState({ isModalVisible: false,showReturn:'' }))}
          </View>
        </Modal>
      )
    }
    renderButton = (text, onPress) => (
      <TouchableOpacity onPress={onPress} >
        <View style={styles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  export class ModalRhythmMode extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalVisible: false,
        selectedIndex: 3,
        showReturn:''
      }
      this.updateIndex = this.updateIndex.bind(this)
    }
    componentDidMount() {
      this.setState({ isModalVisible: true })
    }
    updateIndex(selectedIndex) {
      this.setState({ selectedIndex })
      console.log('selectedIndex ' + selectedIndex)
      switch(selectedIndex){
        case 0:
        fetch('http://192.168.8.150/body', {
          method: 'POST',
          body: '3150797906',
        })
        .then((response) => response.text())
        .then((responseJson) => {
          console.log(responseJson);
          if(responseJson == 3150797906){
            this.setState({ showReturn:'RHYTHM' })
          }else this.setState({ showReturn:'Not delivered' })
        })
        .catch((error) => {
          console.error(error);
        });
        break;
      }
  
    }
    componentWillReceiveProps(newProps) {
      if (this.props.toggleMode === true) {
        this.setState({ isModalVisible: true })
      }
    }
    render() {
      console.log('Hello modal')
      console.log(this.state.isModalVisible)
      const buttons = ['RHYTHM']
      const { selectedIndex } = this.state
  
      return (
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false ,showReturn:''})}
        >
  
          <View style={styles.modalContent}>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{ height: 50 }}
              underlayColor="blue"
            />
            <Text>{this.state.showReturn}</Text>
            {this.renderButton("Close", () => this.setState({ isModalVisible: false,showReturn:'' }))}
          </View>
        </Modal>
      )
    }
    renderButton = (text, onPress) => (
      <TouchableOpacity onPress={onPress} >
        <View style={styles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }




const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
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
})