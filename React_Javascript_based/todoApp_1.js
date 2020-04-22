import React from 'react';
import {View,Text,TextInput,Button} from 'react-native';

class App extends React.Component{

// can write anyname below instead of state , but do confirm once more
// state is a property of the window (view) that we see in app

state=
{
  todo:"This is our messgae on screen"
}


render(){
  return(


  <View style={styles.viewStyle}>

    <Text>HELLO  WORLD.</Text>
    <TextInput 
    style={styles.inputStyle} 
    onChangeText={(text)=>this.setState({todo:text}) } />       

    <Button title="Add Todo" color='green' />

     {/* {this.renderTodos()} */}
     <Text>{this.state.todo}</Text>

  </View>


)
}
}

const styles = {
    viewStyle:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:'',
    },
    inputStyle:{
        height:40,
        width:300,
        borderColor:'yellow',
        borderWidth:3,
    }
}

export default App;