import {View, Text, TextInput, TouchableOpacity,  ImageBackground} from 'react-native';
import React from 'react';
import {style} from './AddScreenStyle';
import UseAddScreen from './UseAddScreen';
import Background from '../../assets/bg.jpg'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
export default function AddScreen() {
  const [
    {
      name,
      setName,
      date,
      setDate,
      navigation,
      isDatetimePickerVisible,
      showDateModal,
      hideDateModal,
      handleConfirm,
      getDate,
      ctaAddHandler,
      showTimeModal,
      hideTimeModal,
      handleTimeConfirm,
      time,
      setTime,
      isTimePickerVisible,
      setIsTimePickerVisible,
      getTime
    },
  ] = UseAddScreen();
  // console.log(name);

  return (
    <View style={{flex: 1, backgroundColor: 'skyblue'}}>
      <ImageBackground source={Background} style={{flex:1}} >
      <View style={style.inputContainer}>
        
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={style.input}
        />
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TextInput
            placeholder="Set Date"
            value={getDate()}
            onPressIn={showDateModal}
            style={style.dateInput}
          />
          <View>
           
            <DateTimePickerModal
              isVisible={isDatetimePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDateModal}
            />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', width: '100%',paddingLeft:30, paddingRight:30}}>
          <TextInput
            placeholder="set Time"
            value={getTime()}
            onPressIn={showTimeModal}
            style={style.dateInput}
          />
          <View>
            <TouchableOpacity onPress={showTimeModal}>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimeModal}
            />
          </View>
        </View>
      <View style={{padding: 50}}>
        <TouchableOpacity onPress={ctaAddHandler}>
          <Text style={style.addBtn}>Add Birthday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={style.cancelBtn}>Cancel</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}
