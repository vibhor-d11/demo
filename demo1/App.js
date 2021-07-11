/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState ,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const App = () =>  {
const sq=<FontAwesome5 name={'square'} solid size={20} color={'white'} />;
const tick =<FontAwesome5 name={'check'} solid size={20} color ={'black'} />;

const [cnt,setCnt]=useState(0);

const [ck,setCk]=useState(sq);



    const fn = function(){
      setCk(tick);
  }

  const fn2=function()
  {
    setCnt(v=>v+1);
  }

useEffect(()=>{
  if(cnt===3)
  {
Alert.alert('Verfwf wfsion','1.0.1',[{text : 'cancel'}]);
setCnt(0);
  };
  setTimeout(()=>{
    setCnt(0);
  },1500)

},[cnt]
);



 return (
   <View>
    <View style ={styles.button}>
    <TouchableOpacity onPress={fn} >
    
     
     {ck}
     
     
    </TouchableOpacity>
    </View>
  <TouchableWithoutFeedback onPress={fn2}>
  <Text>dan82625@gmail.com</Text>
  </TouchableWithoutFeedback>

    </View>

  );
};

const styles = StyleSheet.create({

  button :{
    backgroundColor : '#DDDDDD',
    borderColor : 'grey',
    padding : 5,
    margin :10,
    width : 35,
    height :35,
    alignItems:'center',
  },
  container: {
 
  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  


});

export default App;
