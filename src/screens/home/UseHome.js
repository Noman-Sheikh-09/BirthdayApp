import Reacts from 'react';
import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteBirthday, getBirthday} from '../../store/birthdaySlice';
export default function UseHome() {
  const birthdayData = useSelector(state => state.birth.birthdayArray);
  const updateObj = useSelector(state => state.birth.updateObj);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(getBirthday());
  }, [birthdayData]);

  const goAddHandler = () => {
    navigation.navigate('Add Birthday');
  };

  return [
    {
      navigation,
      goAddHandler,
      birthdayData,
      // ctaDeleteHandler
    },
  ];
}
