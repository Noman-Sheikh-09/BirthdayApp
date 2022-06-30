import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './AddScreenStyle';
import UseAddScreen from './UseAddScreen';

export default function AddScreen() {
  const [{name, setName, navigation}]= UseAddScreen();
  console.log(name);
  return (
    <View style={{flex: 1, backgroundColor: 'skyblue'}}>
      <View style={style.inputContainer}>
        <TextInput placeholder="Name" 
        value={name}
        onChangeText={setName}
        style={style.input}
        
        />
        <TextInput placeholder="set Date" style={style.dateInput} />
      </View>
      <View style={{padding:50}}>
        <TouchableOpacity>

            <Text style={style.addBtn}>
                Add Birthday
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>

            <Text style={style.cancelBtn}>
               Cancel
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
