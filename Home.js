import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View,Text,StyleSheet, ScrollView,TouchableOpacity,onPress} from "react-native";




//const [name,setname]=useState("");

export default function Homepage(){
  
    const navigation=useNavigation();
    

    return(
        <View style={styles.container}>
            <ScrollView>
        <View>
          <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white',}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Hari Stores</Text>
            
      
            </TouchableOpacity>

            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Raja Stores</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Mani Stores</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Vikram Stores</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Vijaya Stores</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Hyper Stores</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Maja Stores</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Ganesh Stores</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Balaji Stores</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Dev Stores</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Jash Stores</Text>
            </TouchableOpacity>
        
            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Arvik Stores</Text>
            </TouchableOpacity>
        
            <TouchableOpacity 
            style={{flext:1,borderRadius:20,margin:10,height:'auto',width:340,backgroundColor:'white'}}
            onPress={()=>navigation.navigate("Detailspage")}>
            <Text style={{fontSize:22,marginTop:5,paddingTop:5,textAlign:'center'}}>Nithya Stores</Text>
            </TouchableOpacity>
        



        </View>
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(255, 228, 196)',
      borderRadius: 10,
      marginTop: 0,
    },
  });
  


