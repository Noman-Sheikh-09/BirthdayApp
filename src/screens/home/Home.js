import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './HomeStyle';
import UseHome from './UseHome';
export default function Home() {
const [{navigation}]= UseHome();
  return (
    <View style={style.mainContainer}>
      <View style={style.redBtnContainer}>
        <Text style={style.redBtn}>...</Text>
      </View>
      <View style={style.nameContainer}>
        <Text style={style.personName}>Sheikh's</Text>
        <Text style={style.personName}>Birthday</Text>
        <Text style={style.birthdayDate}>28-June-2022</Text>
      </View>

      <View style={style.imgContainer}></View>
      <View style={style.countDownContainer}></View>
      <View style={style.btnContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("Add Birthday")}>
          <Text style={{color:"white",fontSize:20}}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color:"white",fontSize:20}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color:"white",fontSize:20,}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
