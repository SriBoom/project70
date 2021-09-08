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
            placeholder="Write your title here"
            placeholderTextColor="black"
            onChangeText={title => {
                this.setState({ title: title });
              }}
              value={this.state.title}
            />

            <TextInput
            style={styles.inputBox}
            placeholder="Write your name here"
            placeholderTextColor="black"
            onChangeText={author=>{
                this.setState({author:author});
            }}
            value={this.state.author}
            />

            <TextInput
            style={styles.inputBox}
            placeholder="Write your story here"
            placeholderTextColor="black"
            onChangeText={story=>{
                this.setState({story:story});
            }}
            value={this.state.story}
            multiline={true}/>

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
      backgroundColor: '#fff',
    },
    inputBox: { 
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,
    }, 
    submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 80,
      height: 40,color:'black',
    },
    submitButtonText:{
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
    }
  });
    