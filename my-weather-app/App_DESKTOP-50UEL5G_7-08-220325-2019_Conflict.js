import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from "./components/Weather";

export default class App extends Component {
  state = {
    isLoaded:true,
  };
  render(){
    const { isLoaded } =this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {isLoaded
        ?<Weather/>
        :(
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'flex-start',
    alignItems:"stretch",
    flexDirection:"row",
    flexWrap: "wrap"
  },
  loading:{
    flex:1,
    backgroundColor:'#FDF6AA',
    justifyContent:'flex-end',
    paddingLeft:25,
    paddingRight:30,
  },
  loadingText:{
    fontSize:30,
    color:"#676766",
    fontWeight:"bold",
    marginBottom:100,
  },
});

