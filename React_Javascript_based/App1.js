import React from 'react'; 
import { StyleSheet, Text, View, List } from 'react-native'; 

class Home extends React.Component { 


state={
  myState:'\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
}

updateState=()=>this.setState({myState:'\nThe state is updated'})

  render() { 
    return ( 
      <View style={styles.container}> 

        <Text>Open up App.js to start working on your app!</Text> 
        <Text>Changes you make will automatically reload.</Text> 
        <Text>Shake your phone to open the developer menu.</Text> 
        <Text>Am Back</Text>

        <Text onPress={this.updateState}>{this.state.myState}</Text>

        <View style = {styles.redbox} /> 
         <View style = {styles.bluebox} /> 
         <View style = {styles.blackbox} /> 
      
      </View> 
    ); 
  } 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: 'lightblue', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
   
  container: { 
      flexDirection: 'column', 
      backgroundColor: 'lightblue', 
      height: 600,
      alignItems: 'flex-end',   // alignment 
   }, 
   redbox: { 
      width: 100, 
      height: 100, 
      backgroundColor: 'red' 
   }, 
   bluebox: { 
      width: 100, 
      height: 100, 
      backgroundColor: 'blue' 
   }, 
   blackbox: { 
      width: 100, 
      height: 100, 
      backgroundColor: 'black' 
   },

});

export default Home