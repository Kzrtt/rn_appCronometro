import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0.0,
      btnState: 'Começar',
      ultimoValor: '0.0',
    }

    this.timer = null;

    this.start = this.start.bind(this);
    this.end = this.end.bind(this);
  }

  start() {
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        btnState: 'Começar',
        ultimoValor: 'Ultimo valor: ' + this.state.numero.toFixed(2) + 's',
      });
    } else {  
      this.timer = setInterval(() => {
        this.setState({
          numero: this.state.numero + 0.1,
        }); 
      }, 100);
      this.setState({
        btnState: 'Parar',
      });
    }
  }

  end() {
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    } 
    this.setState({
      numero: 0.0,
      btnState: 'Começar',
      ultimoValor: 'Ultimo valor: ' + this.state.numero.toFixed(2) + 's',
    })
  }

  render() {
    return(
      <View style = { styles.container } >  
        
      <Image
        source = { require('./src/cronometro.png') }
        style = { styles.cronometro }
      />

      <Text style = { styles.timer  }> { this.state.numero.toFixed(1) } </Text>

      <View style = { styles.btnArea } >
        <TouchableOpacity style = { styles.btn } >
          <Text style = { styles.btnText } onPress = { this.start } > { this.state.btnState } </Text>
        </TouchableOpacity>

        <TouchableOpacity style = { styles.btn } >
          <Text style = { styles.btnText } onPress = { this.end } >Limpar</Text>
        </TouchableOpacity>
      </View>

      <Text style = { styles.lastValue }>
        { this.state.ultimoValor === '0.0' ? '' : this.state.ultimoValor }
      </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  lastValue: {
    marginTop: 100,
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  timer: {
    marginTop: -170,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 150,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00aeef',
  }
});

export default App;