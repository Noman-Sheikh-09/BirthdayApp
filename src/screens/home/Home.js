import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {style} from './HomeStyle';
import {useState, useEffect} from 'react';
import UseHome from './UseHome';
import {useSelector, useDispatch} from 'react-redux';
import {getBirthday} from '../../store/birthdaySlice';
import Card from '../../components/card/Card';
import Building from '../../assets/background.png';
export default function Home() {
  const [{navigation, goAddHandler, birthdayData}] = UseHome();
  console.log('Data from useSelector in home', birthdayData);
  return (
    <ImageBackground source={Building} style={{flex: 1}}>
      <View style={style.mainContainer}>
        <View style={style.redBtnContainer}>
          <Text style={style.redBtn}>...</Text>
        </View>
        {/* Map Data */}

        <View style={{height: 200, width: '100%'}}>
          {birthdayData?.map(singleBirthday => {
            return (
              <View style={style.nameContainer} key={singleBirthday.docId}>
                <Card singleBirthday={singleBirthday} />
              </View>
            );
          })}
        </View>

        <View style={style.imgContainer}></View>
        <View style={style.countDownContainer}></View>
        <View style={style.btnContainer}>
          <TouchableOpacity onPress={goAddHandler}>
            <Text style={{color: 'white', fontSize: 20}}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
