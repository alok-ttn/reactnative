/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

class component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
    };
  }
  onChangeText() {}
  checkSwitch = id => {
    switch (id) {
      case 1:
        Alert.alert('Top Left Image Pressed');
        break;
      case 2:
        Alert.alert('Top Right Image Pressed');
        break;
      case 3:
        Alert.alert('Bottom Left Image Pressed');
        break;
      case 4:
        Alert.alert('Bottom Right image pressed');
        break;
      case 5:
        Alert.alert('Center Button Pressed');
        break;
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => this.checkSwitch(1)}>
            <Image
              style={{width: 100, height: 100, resizeMode: 'cover'}}
              source={require('/Users/alokmishra/Documents/demoproject/image.jpeg')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 40}}>Top </Text>
          <TouchableOpacity onPress={() => this.checkSwitch(2)}>
            <Image
              style={{width: 100, height: 100, resizeMode: 'cover'}}
              source={require('/Users/alokmishra/Documents/demoproject/image.jpeg')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40}}>Left</Text>
          <Button
            title="Button"
            color="#f194ff"
            backgroundColor="#f00"
            onPress={() => this.checkSwitch(5)}
          />
          <Text style={{fontSize: 40}}>Right</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => this.checkSwitch(3)}>
            <Image
              style={{width: 100, height: 100, resizeMode: 'cover'}}
              source={require('/Users/alokmishra/Documents/demoproject/image.jpeg')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 40}}>Bottom</Text>
          <TouchableOpacity onPress={() => this.checkSwitch(4)}>
            <Image
              style={{width: 100, height: 100, resizeMode: 'cover'}}
              source={require('/Users/alokmishra/Documents/demoproject/image.jpeg')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    //console.warn('Hello I am ComponentDidMount');
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffdd0',
    flex: 1,
    // alignItems:"flex-end",
    justifyContent: 'center',
  },
  child: {
    //height: 100,
    width: '100%',
    flex: 1,
  },
});

export default component1;
