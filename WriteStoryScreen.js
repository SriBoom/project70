import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
            <SafeAreaProvider>
          <View style={styles.container}>
            <Header
            backgroundColor={'#9c8210'}
            centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20, marginLeft:100, textAlign:'center' },
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
            >
            <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
            </View>
            </SafeAreaProvider>
            
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
        fontSize: 20
    }, 
    submitButton:{
        backgroundColor: '#FBC02D',
      width: 100,
      height:50
    },
    submitButtonText:{
        padding: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight:"bold",
      color: 'black'
    }
  });
    