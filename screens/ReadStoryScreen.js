import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
          <SafeAreaProvider>
            <View style={styles.container}>
                <Text>Read story</Text>
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
})