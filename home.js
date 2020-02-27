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
        <View style={[ styles.child,{backgroundColor: '#000'}]} />
        {/* <View style={[ styles.child, {backgroundColor: 'green'}]} />
        <View style={[ styles.child, {backgroundColor: 'orange'},{flex:2}]} /> */}

      </View>
    );
  }
  componentDidMount() {
    //console.warn('Hello I am ComponentDidMount');
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f03900',
    flex: 1,
   // alignItems:"flex-end",
    justifyContent:"center"
    
  },
  child: {
    height: 100,
    width: 50,
    backgroundColor: '#800000',
   alignSelf:"flex-end"
  },
});

export default Home;
