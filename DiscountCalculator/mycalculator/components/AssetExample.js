import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class AssetExample extends React.Component {
  state = { amount: 0, discount: 0, result: 0 };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ textAlign: 'center', marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign:'center' }}>
            Discount Calculator
          </Text>
        </View>
        <View style={{ marginLeft: 35, marginTop: 35 }}>
          <Text style={{ color: 'white', marginBottom: 10 }}>Amount :</Text>
          
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({ amount: text });
            }}
          />
        
        </View>
        <View style={{ marginLeft: 35, marginTop: 35 }}>
          <Text style={{ color: 'white', marginBottom: 10 }}>Discount % :</Text>
        
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({ discount: text });
            }}
          />
        
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.setState({
              result: (this.state.amount * this.state.discount) / 100,
            });
          }}>
          <Text>
          Calculate
          </Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.result,
            { color: this.state.result ? 'yellow' : 'white' },
          ]}>
          The Amount after Discount:
        </Text>
        <Text
          style={[
            styles.result,
            { color: this.state.result ? 'yellow' : 'white' },
          ]}>
          {this.state.amount - this.state.result}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 // container: {
  //  justifyContent: 'center',
  //  padding: 40,
  //  backgroundColor: 'indigo',
 // },

  textInput: {
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: 'black',
    marginRight: 30,
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
    color:'red'
  },

  btn: {
    alignItems: 'center',
    marginTop: 40,
    color: 'black',
    borderWidth: 2,
    backgroundColor: 'pink',
    padding: 10,
    marginLeft: 120,
    marginRight: 120,
    borderRadius: 10,
  },
  result: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});
