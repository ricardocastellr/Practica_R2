import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Switch, TextInput, Alert, Image } from 'react-native';
import { Component } from 'react';

interface State {
    email: string,
    password: string
}

export default class LoginView extends Component<State> {
  state: State = {
    email: "",
    password: "",
  }
  
  onPressValidate = (email: string, password: string) => {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
    const inputFieldBlank = /^\s*$/;

    if(inputFieldBlank.test(password) || inputFieldBlank.test(email)) {
      Alert.alert('Correo o contraseña vacíos', 'Introduzca una contraseña o correo.', [
        {text: 'OK', onPress: () => console.log('OK Pressed Email')},
      ]);
      return 
    } else {
      if(!regexEmail.test(email)) {
      Alert.alert(`${email}`, 'No es un correo válido', [
        {text: 'OK', onPress: () => console.log('OK Pressed Email')},
      ]);
      return
    }
    if(!regexPassword.test(password)) {
      Alert.alert('Contraseña inválida', 'La contraseña debe incluir al menos 8 caracteres, una mayúscula y un caracter especial', [
        {text: 'OK', onPress: () => console.log('OK Pressed Password')},
      ]);
      return
    }
    if(regexEmail.test(email) && regexPassword.test(password)) {
      Alert.alert('Cuenta valida', 'Haz ingresado de manera correcta', [
        {text: 'OK', onPress: () => console.log('OK Pressed Password')},
      ]);
      return
    }
    }
    

    return true;
  } 

  onEmailChange = (value: string) => {
    this.setState({email: value})
  }

  onPasswordChange = (value: string) => {
    this.setState({password: value})
  }

  render(){
    
    return (
      <View style={styles.container}>

        <Image source={require('./assets/luffy.png')} style={[{width: 200, height: 200}]} />

        <TextInput
        value={this.state.email}
        onChangeText={(text) => this.onEmailChange(text)}
        inputMode='email'
        placeholder="Escribe tu correo"
        placeholderTextColor="#000"
        />

        <TextInput
        value={this.state.password}
        onChangeText={(text) => this.onPasswordChange(text)}
        secureTextEntry={true}
        placeholder="Escribe tu contraseña"
        placeholderTextColor="#000"
        />

        <Pressable
        onPress={() => this.onPressValidate(this.state.email, this.state.password)}
        accessibilityLabel="Iniciar Sesión"
        style={styles.button}
        >
           <Text style={styles.textButton}>Iniciar sesión</Text>
        </Pressable>
        
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
