import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {addBirthday} from '../../store/birthdaySlice';

export default function UseAddScreen() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const [isDatetimePickerVisible, setIsDatetimePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

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

  const ctaAddHandler = () => {
    console.log('Add Handler Presses');
    if (name != '' && date != '') {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const currentDate = date.getDate();
      // const hours=time.getHours();
      // const minutes=time.getMinutes();,hours,minutes
      const dateData = new Date(year, month, currentDate).toISOString();
      const data = {
        name: name,
        start: dateData,
        date: getDate(),
        // time:getTime(),
      };
      console.log(data);
      // dispatch will be here
      dispatch(addBirthday(data));
      navigation.replace("Home")
    } else {
      Alert.alert('Please fill all fields ');
    }
  };

  const showTimeModal = () => {
    setIsTimePickerVisible(true);
  };

  const hideTimeModal = () => {
    setIsTimePickerVisible(false);
  };

  const handleTimeConfirm = time => {
    hideTimePicker();
    setTime(time);
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
  const getTime = () => {
    let tempTime = time.toString().split(' ');
    return time !== '' ? `${tempTime[4]}` : '';
  };
  return [
    {
      name,
      setName,
      date,
      setDate,
      navigation,
      isDatetimePickerVisible,
      setIsDatetimePickerVisible,
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
      getTime,
    },
  ];
}
