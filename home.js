/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
    };
  }
  onChangeText(text) {}

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('/Users/alokmishra/Documents/demoproject/cottage.jpg')}
          style={{width: '20%', height: '10%'}}
        />
        <Text>{'username is : ' + this.state.text} </Text>
        <Text>{'Password is : ' + this.state.input}</Text>
        <TextInput
          style={{
            height: 50,
            width: '90%',
            borderColor: 'red',
            borderWidth: 1,
           backgroundColor:'green',
            //padding:25,
            color:'#fff'
          }}
          onChangeText={text => this.setState({text})}
        />
        <TextInput
          style={{
            height: 50,
            width: '90%',
            borderColor: 'red',
            backgroundColor:'pink',
            //padding:25,
            color:'green',
            borderWidth: 1,
          }}
          onChangeText={input => this.setState({input})}
        />
      </View>
    );
  }
  componentDidMount() {
    //console.warn('Hello I am ComponentDidMount');
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:'grey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
