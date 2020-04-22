import React from 'react';
import {View,Text,TextInput,Button} from 'react-native';

// BUTTON CLICK TO ADD DATA TO TODO 

class App extends React.Component{
state=
{
  todo:"",
  txt:""
}

addTodo=()=>{
  this.setState({todo:this.state.txt});
}


render(){
  return(

  <View style={styles.viewStyle}>

    <Text>HELLO  WORLD.</Text>
    <TextInput 
    style={styles.inputStyle} 
    onChangeText={(text)=>this.setState({txt:text})}/>       

    <Button title="Add Todo" color='green' onPress={this.addTodo}  />

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

// to make these changes
export default App;