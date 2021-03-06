import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Button extends Component {

    render() {
        return(
            <TouchableOpacity
                style={styles.botao}
                onPress={this.props.onPress}
            >
                <View
                    style={styles.btnArea}>
                    <Text style={styles.btnTexto}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    botao : {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25
    },
    btnArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    btnTexto: {
        fontSize: 18,
        //fontWeight: 'bold',
        color: '#dd7b22'
    }
});