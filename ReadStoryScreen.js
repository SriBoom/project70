import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';

export default class TransactionScreen extends React.Component {
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:''
        }
    }
    render(){
        return(
          <View style={styles.container}>
            <Header
            backgroundColor={'#9c8210'}
            centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
            />
            <TextInput
            style={styles.inputBox}
            onChangeText={title => {
                this.setState({ title: title });
              }}
              value={this.state.title}
            />

            <TextInput
            style={styles.inputBox}
            onChangeText={author=>{
                this.setState({author:author});
            }}
            value={this.state.author}
            />

            <TextInput
            style={styles.inputBox}
            multiline
            onChangeText={story=>{
                this.setState({story:stroy});
            }}
            value={this.state.story}
            />

            <TouchableOpacity 
            style={styles.submitButton}
            >Submit</TouchableOpacity>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputBox: { 
      width: 200, 
      height: 40, 
      borderWidth: 1.5, 
      borderRightWidth: 0, 
      fontSize: 20 }, 
    submitButton:{
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10,
    }
  });