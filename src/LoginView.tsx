import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Switch, TextInput, Alert } from 'react-native';
import { Component } from 'react';

interface State {
    switchValue: boolean,
    textInputValue: string
}

export default class LoginView extends Component<State> {
  state: State = {
    switchValue: false,
    textInputValue: "",
  }
  
  onChange = (value: boolean) => {
    console.warn(`El switch cambió a ${value}`);
    this.setState({switchValue: value})
  }

  onPressLearnMore = (nombre: string) => {
    console.warn("Presionaste un botón.")
    Alert.alert(`${nombre}`, 'Es lo que se escribió', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  } 

  onTIChange = (value: string) => {
    console.warn(`El text input cambió a ${value}`);
    this.setState({textInputValue: value})
  }

  render(){
    
    return (
      <View style={styles.container}>
        <TextInput
        onChangeText={(text) => this.onTIChange(text)}
        value={this.state.textInputValue}
        placeholder="Escribe tu nombre"
        placeholderTextColor="#000"
        />
        <Pressable
        onPress={() => this.onPressLearnMore(this.state.textInputValue)}
        accessibilityLabel="Learn more about this purple button"
        style={styles.button}
        >
           <Text style={styles.textButton}>Obtener texto</Text>
        </Pressable>


        <Switch
        onValueChange={() => this.onChange(!this.state.switchValue)}
        value={this.state.switchValue}
        trackColor={{false: '#CFCFD1', true: '#7676C2'}}
        thumbColor={this.state.switchValue ? "#3B3B8F" : "#C0C0C2"}
        />
        <Text>HEMOS CAMBIADO A CLASE</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 17,
  },
  button: {
    backgroundColor: '#7676C2',
    borderColor: 'red',
    padding: 15,
    borderRadius: 100,
  }
});
