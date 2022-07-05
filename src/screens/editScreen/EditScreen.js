import { View, Text,TextInput,TouchableOpacity, } from 'react-native'
import React from 'react'
import { style } from './EditScreenStyle'
import { useEffect } from 'react'
import UseEditScreen from './UseEditScreen'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function EditScreen({route}) {
 
  const [{navigation,name,setName,date,setDate,time,setTime,setId,isDatetimePickerVisible, hideDateModal,showDateModal,handleConfirm,
        getDate,onClickUpdateHandler}] = UseEditScreen();
const {id} = route.params
useEffect(() => {
    setId(id);
  }, [id]);
  return (
    <View style={{flex: 1, backgroundColor: 'skyblue'}}>
      <View style={style.inputContainer}>
        
        <TextInput
          placeholder="Edit Name"
          value={name}
          onChangeText={setName}
          style={style.input}
        />
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TextInput
            placeholder="Edit Date"
            value={getDate()}
            onPressIn={showDateModal}
            style={style.dateInput}
          />
          <View>
            <TouchableOpacity >
              <Text> Cal </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatetimePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDateModal}
            />
          </View>
        </View>
      </View>
     
      <View style={{padding: 50}}>
        <TouchableOpacity onPress={onClickUpdateHandler}>
          <Text style={style.addBtn}>Ok</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={style.cancelBtn}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}


//  <View style={{flexDirection: 'row', width: '100%',paddingLeft:30, paddingRight:30}}>
//           <TextInput
//             placeholder="set Date"
//             // value={getTime()}
//             // onPressIn={showTimeModal}
//             style={style.dateInput}
//           />
//           <View>
//             <TouchableOpacity>
//              <Icon name="calendar-o" size={30} color="white"  />
//             </TouchableOpacity>
//             {/* <DateTimePickerModal
//               isVisible={isTimePickerVisible}
//               mode="time"
//               onConfirm={handleTimeConfirm}
//               onCancel={hideTimeModal}
//             /> */}
//           </View>
        // </View>