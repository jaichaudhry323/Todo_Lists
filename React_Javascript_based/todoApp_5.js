
import React from 'react';
import {View,Text,TextInput,Button} from 'react-native';

// ADDING DELETE FUNCTIONALITY AND NO DUPLICATE THING , 

class App extends React.Component{
state=
{
  todo:["HI","TYPE AND CLICK ON ADD TO ADD DATA","KEEP IT UP"],
  txt:"",
}

addTodo=()=>{
  var newtodo=this.state.txt;
  this.setState({txt:""});

  if(this.state.todo.includes(newtodo)){    // ANTI DUPLICATE MEASURE
      alert("Already Present in List");
      return 0;             // need to return 0 else it will return undefined object
  }

  var arr=this.state.todo;
  arr.push(newtodo);
  this.setState({todo:arr});

}

deleteTodo=(t)=>{
    var arr =this.state.todo;
    var pos =arr.indexOf(t);
    arr.splice(pos,1);      
    this.setState({todo:arr});
}

renderTodos = ()=>{
  // for every single thing t in array do mapping
  return this.state.todo.map(t=>{    // for every t in array todo
    return (
      <Text             // modifying the Text element that we will be appending to the list
      key={t}           // set key so that react can keep track of elemnts in list
      onPress={()=>{this.deleteTodo(t)}}    // sent the 't' of array to deleteTodo function
      >{t}</Text>       
    )
  })
}

render(){
  return(

  <View style={styles.viewStyle}>

    <Text style={styles.header}>NOTES APP</Text>
    <TextInput 
    style={styles.inputStyle} 
    onChangeText={(text)=>this.setState({txt:text}) }
    value={this.state.txt}
    />       

    <Button title="Add Todo" color="blue" onPress={this.addTodo} />
    <View style={{marginTop:100}}  /*Added this so that todos are appended a bit below the entering region *//> 
     {this.renderTodos()  /* List of Text Tags  */}    
     
  </View> 

)
}
}

// ADDED MORE STYLES  
const styles = {
  viewStyle:{ 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',   // 
    backgroundColor:'lightblue',
    },
  inputStyle:{
    height:40,
    width:300,
    borderColor:'yellow',
    borderWidth:3,
    backgroundColor:"lightgreen"
  },
  header:{
      fontSize:30,
      color:'white',
      fontWeight:'bold'
  },
  wholeStyle:{

  }

}

// to make these changes
export default App;