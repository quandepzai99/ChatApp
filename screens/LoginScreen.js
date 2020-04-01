import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class LoginScreen extends Component {
  state = {
    name: ''
  }

  continue = () => {
    this.props.navigation.navigate('Chat', {name: this.state.name})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{marginTop: 64}}>
          <Image source={require('../assets/logo.png')} style={{width: 100, height: 100, alignSelf: 'center'}}/>
        </View>
        <View style={{marginHorizontal: 32}}>
          <Text style={styles.header}>UserName</Text>
          <TextInput style={styles.input}
                     placeholder={'text'}
                     onChangeText={name => {
                       this.setState({name})
                     }}
                     value={this.state.name}
          />
          <View style={{alignItems: 'flex-end', marginTop: 64}}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <Icon name={'arrow-right'} size={24} color={'#fff'}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7'
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -120,
    top: -20
  },
  header: {
    fontWeight: '800',
    fontSize: 30,
    color: '#514e5a',
    marginTop: 32
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#bab7ca',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514e5a',
    fontWeight: '600'
  },
  continue:{
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#bf62ff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

