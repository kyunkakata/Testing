import React, { Component } from 'react'
import { Text, View,FlatList,StyleSheet,Dimensions,TextInput,TouchableOpacity,Button,Vibration} from 'react-native'
import {databaseOptions,PERSON_SCHEMA,CAR_SCHEMA,addNewPerson,createDefaultDatabase} from './realm/NewSchema'
import Realm from 'realm'
import codePush from 'react-native-code-push'
const {width,height} =Dimensions.get('window')
console.ignoredYellowBox=['']
export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      mainData:[],
      text:'',
      maxId:0,

    }
  }
  componentWillMount(){
    Vibration.vibrate(200);
  }
  renderFlatList(){
    return(
      <View style={{flex:1,backgroundColor:'white'}}>
        <Text>Hello</Text>
        <FlatList 
          data={this.state.mainData}
          renderItem={({item})=>
          <View>
            <Text style={{color:'black'}}>{item.name}</Text>
          </View>}
          keyExtractor={(item)=>item.id}
        />
        <View style={{height:200,backgroundColor:'#b2ebf2'}}>
          <Button 
            title="Thêm dữ liệu"
            style={{height:40,width:150}}
            onPress={()=>{}}
          />
        </View>
      </View>
  )
  }
  onButtonPress(){
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }
  render() {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Xin chào Kyun Legend. Đây là phiên bản: 1.0 </Text>
        <TouchableOpacity onPress={()=>this.onButtonPress()}><Text>Kiểm tra cập nhật</Text></TouchableOpacity>
      </View>
    )
  }
}
export default App