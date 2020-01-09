/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import Button from './src/components/Button';

class App extends Component {

  constructor(props) {
    super(props);

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.state = {
      textoFrase: 'Clique em quebrar biscoito para saber sua sorte de hoje',
      img: require('./src/assets/biscoito.png')
    };

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso."
    ];

  };

  quebraBiscoito() {
    
    let numeroDaFrase = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: this.frases[numeroDaFrase],
      img: require('./src/assets/biscoitoAberto.png')
    });
  };

  render() {
    return(
      <View style={styles.container}>

        <Image 
          source={this.state.img}
          style={styles.img}/>

        <Text
          style={styles.textoFrase}
        >
          "{ this.state.textoFrase }"
        </Text>
        
        <Button 
          text="Quebrar biscoito"
          onPress={this.quebraBiscoito}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  
});

export default App;
