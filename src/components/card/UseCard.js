import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {deleteBirthday} from '../../store/birthdaySlice';
import {useNavigation} from '@react-navigation/native';

export default function UseCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const ctaDeleteHandler = docId => {
    dispatch(deleteBirthday(docId));
    console.log('dispatched');
  };

  
  const ctaUpdateHandler = docId => {
    navigation.navigate('Edit Birthday', {id: docId});
  };

  return [
    {
      ctaDeleteHandler,
      ctaUpdateHandler,
    },
  ];
}
