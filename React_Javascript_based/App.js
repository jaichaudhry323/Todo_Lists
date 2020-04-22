//-----------#######----------#######--------//
import {StyleSheet,Text,View,ImageBackground,Image} from 'react-native';
import {Button} from 'native-base';

import React from 'react' 
import List from './List.js' 
import App1 from './App1.js'
import App2 from './App2.js' 
import App3 from './App3.js'
import C1 from './todoApp_1.js'
import C2 from './todoApp_2.js'
import C3 from './todoApp_3.js'
import C4 from './todoApp_4.js'
import C5 from './todoApp_5.js'

import P1 from './PokeSearch_3/p1.js'
import P2 from './PokeSearch_3/p2.js'
import Landing from './PokeSearch_3/Landing.js'
import Search from './PokeSearch_3/Search.js'
import Main from './PokeSearch_3/main_poke_search.js'
import PL from './PokeSearch_3/PokeLoader.js'
import AG from './PokeSearch_3/adding_gif.js'

const App = () => { 
   return (
      <View style={styles.container}>
         <Main/> 
      </View> 

   ) 
}

export default App 

const styles =StyleSheet.create({
   container:{
       flex:1,
       marginTop:Platform.OS==="android"?10:0,
   }
})