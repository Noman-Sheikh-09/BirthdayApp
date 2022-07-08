import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {deleteBirthday} from '../../store/birthdaySlice';
import {useNavigation} from '@react-navigation/native';


export default function UseCard() {
  const birthdayData = useSelector(state => state.birth.birthdayArray);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const ctaDeleteHandler = docId => {
    dispatch(deleteBirthday(docId));
    // console.log('dispatched');
  };
  // console.log('data in useCard',birthdayData);

  const ctaUpdateHandler = docId => {
    navigation.navigate('Edit Birthday', {id: docId});
  };

  // On finish Handler Logic
  

  const ctaFinishHandler = docId => {
    navigation.navigate('Wish Birthday');

    setTimeout(() => {
      dispatch(deleteBirthday(docId));
      navigation.navigate('Home');
    }, 15000);
  };

  return [{navigation, ctaDeleteHandler, ctaUpdateHandler, ctaFinishHandler}];
}
