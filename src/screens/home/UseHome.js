import Reacts from 'react';
import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteBirthday, getBirthday} from '../../store/birthdaySlice';
export default function UseHome() {
  const birthdayData = useSelector(state => state.birth.birthdayArray);
  // console.log("data from useSelector",birthdayData);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getBirthday());
  }, []);

  const goAddHandler = () => {
    navigation.navigate('Add Birthday');
  };
  // const ctaDeleteHandler =(docId)=>{
  //   dispatch(deleteBirthday(docId))
  //   console.log();
  // }

  return [
    {
      navigation,
      goAddHandler,
      birthdayData,
      // ctaDeleteHandler
    },
  ];
}
