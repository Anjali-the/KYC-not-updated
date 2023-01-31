import {View,Text,StyleSheet,TextInput,Button, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";

export function Detailspage(){
    const navigation = useNavigation();
    const[show1,setshow1]=useState(false);
    const [text, onChangeText] = React.useState(false);

    const [value, setvalue] = useState('Documents not available')
    const[Enablecomment,setEnablecomment]=useState(false)

const click=()=>{
    alert('updated');
}  

   
   return(
        <View style={styles.container}>
             <Text style={{fontSize:22,textAlign:'center'}}>KYC NOT UPDATED</Text>
            <Text style={{fontSize:22,textAlign:'center',margin:10}}>AADHAR </Text>
            <Text style={{fontSize:22,textAlign:'center',margin:10}}>PAN</Text>
            <Text style={{fontSize:22}}>STATUS ;</Text>
            <TouchableOpacity>
            <Text style={{fontSize:22,margin:10,paddingLeft:20,borderRadius:10,hight:'auto',
            borderColor:'black',borderWidth:1,width:150,backgroundColor:'white',}} onPress={()=>{setshow1(true)
            setEnablecomment(true)}}>Shop Visited</Text>
            </TouchableOpacity> 
     
     {show1?<View>
     <View>

         
     <View style={{flexDirection:"row"}}>
        <RadioButton
        value="Documents not available"
        status={value==='Documents not available'?'checked':'unchecked'}
        onPress={()=>{
            setvalue('Documents not available')
            setEnablecomment(true)
        }}>
            
        </RadioButton>
        <Text style={{marginTop:10}}>Documents not available</Text>
        </View>
      <View style={{flexDirection:"row"}}>

             <RadioButton
        value="Correction updation"
        status={value==='Correction updation'?'checked':'unchecked'}
        onPress={()=>{

            setvalue('Correction updation')
            setEnablecomment(true)
        }}></RadioButton>
        <Text style={{marginTop:10}}>Correction updation</Text>
       </View>

       <View style={{flexDirection:"row"}}>
        <RadioButton
        value="Owner not available"
        status={value==='Owner not available'?'checked':'unchecked'}
        onPress={()=>{
            setvalue('Owner not available')
            setEnablecomment(true)
        }}></RadioButton>
        <Text style={{marginTop:10}}>Owner not available</Text></View>
        </View>
        
        </View>:null}
        {Enablecomment?<View>
            <Text style={{fontSize:20,margin:20}}> Comment :</Text>
        <View style={{height:120,width:300,borderColor:'black',borderRadius:20,
        margin:20,backgroundColor:'white',
        }}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      /></View></View>:null}

        <Button title='Save' onPress={click}></Button>
           
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(211, 211, 211)',
      borderRadius: 20,
      marginTop: 0,
    },
  });


