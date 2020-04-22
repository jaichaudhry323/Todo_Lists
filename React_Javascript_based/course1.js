import React from 'react';
import {View,Text,TextInput,Button} from 'react-native';

class App extends React.Component{

// can write anyname below instead of state
// state is a property yoof the window that we see in app

state=
{
  todo:"This is our messgae on screen"
}

// addTodo=()=>{
//   this.setState({
//     todo:this.state.txt
//   });
// }

// renderTodos = ()=>{
//   // for every single thing t in array do mapping
//  // return this.state.todo.map(t=>{return (<Text>{t}</Text>)})

//  this.state.todo:this.state.text
// }

render(){
  return(
// inside view style={{flex:1,alignItems:'center',justifyContent:'center'}}

// state =localized variables be set inside components , we can change the state of our components using this , state is very fragile

// onchange is a prop i.e a property of TextInput element

// todo word in below code came from state

  <View style={styles.viewStyle}>

    <Text>HELLO  WORLD.</Text>
    <TextInput 
    style={styles.inputStyle} 
    onChangeText={(text)=>this.setState({todo:text}) } />       

    <Button title="Add Todo" color='green' />

     {/* {this.renderTodos()} */}
     <Text>{this.state.todo}</Text>

  </View>

  // cutted this line just above </View> 
  // <Text>{this.state.todo}</Text> 

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