import {View, Text, Alert} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import { updateBirthday } from '../../store/birthdaySlice';
export default function UseEditScreen() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [id, setId] = useState('');
  const [isDatetimePickerVisible, setIsDatetimePickerVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const birthdayArray = useSelector(state=>state.birth.birthdayArray);
useEffect(() => {
let filterArray= birthdayArray.filter((item)=>{
    if (item.docId == id) {
        return item;
    }
})
setName(filterArray[0]?.name);
// getDate(filterArray[0]?.date.toString())
}, [id])




  const hideDateModal = () => {
    setIsDatetimePickerVisible(false);
  };
  const showDateModal = () => {
    setIsDatetimePickerVisible(true);
  };
  const handleConfirm = date => {
    hideDateModal();
    setDate(date);
  };
  const getDate = () => {
    let tempDate = date.toString().split(' ');
    if (tempDate[2] == new Date().getDate()) {
      return 'Today';
    } else if (tempDate[2] == new Date().getDate() - 1) {
      return 'Yesterday';
    } else if (tempDate[2] == new Date().getDate() + 1) {
      return 'Tomorrow';
    } else {
      return date !== ''
        ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
        : '';
    }
  };

  const onClickUpdateHandler=()=>{
    console.log('Edit Handler Presses');
    if (name != '' && date != '') {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const currentDate = date.getDate();
      // const hours=time.getHours();
      // const minutes=time.getMinutes();,hours,minutes
      const dateData = new Date(year, month, currentDate).toISOString();
      const data = {
        docId:id,
        name: name,
        start: dateData,
        date: getDate(),
        // time:getTime(),
      };
    //   console.log(data);
      // dispatch will be here
    dispatch(updateBirthday(data))
      navigation.replace("Home")
    } else {
     Alert.alert("Please Fill All Feilds")
    }
  }

  return [
    {
      navigation,
      name,
      setName,
      date,
      setDate,
      time,
      setTime,
      setId,
      isDatetimePickerVisible,
      hideDateModal,showDateModal,handleConfirm,
      getDate,onClickUpdateHandler
    },
  ];
}
