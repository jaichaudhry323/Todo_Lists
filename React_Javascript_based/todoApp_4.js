import React from 'react';
import {View,Text,TextInput,Button} from 'react-native';

// ADDING THE DATA TO LIST PART 2 , (COMPLETE) 

class App extends React.Component{
state=
{
  todo:["HI","TYPE AND CLICK ON ADD TO ADD DATA","KEEP IT UP"],
  txt:"",
}

addTodo=()=>{
  var newtodo=this.state.txt;
  var arr=this.state.todo;
  arr.push(newtodo);
  this.setState({todo:arr , txt:""});
}

renderTodos = ()=>{
  // for every single thing t in array do mapping
  return this.state.todo.map(t=>{    // for every t in array todo
    return (
      <Text key={t}>{t}</Text>    // set key so that react can keep track of elemnts in list
    )
  })
}

render(){
  return(

  <View style={styles.viewStyle}>

    <Text>HELLO  WORLD.</Text>
    <TextInput 
    style={styles.inputStyle} 
    onChangeText={(text)=>this.setState({txt:text}) }
    value={this.state.txt}
    />       

    <Button title="Add Todo" color='green' onPress={this.addTodo} />

     {this.renderTodos()}

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



