import {View, Text, TouchableOpacity,LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './CardStyle';
import CountDown from 'react-native-countdown-component';
import UseCard from './UseCard';
LogBox.ignoreAllLogs();
export default function Card({singleBirthday}) {
  const [{navigation, ctaDeleteHandler, ctaUpdateHandler, ctaFinishHandler}] =
    UseCard();
  const date =
    ((new Date(singleBirthday?.date) - new Date()) / (1000 * 60 * 60 * 24)) *
    24 *
    60 *
    60;
  const hours = singleBirthday?.time.split(':')[0] * 60 * 60;
  const minutes = singleBirthday?.time.split(':')[1] * 60;
  const counterTime = Math.floor(date + hours + minutes);
  return (
    <View>
      <Text style={style.personName}>{singleBirthday?.name}'s</Text>
      <Text style={style.personName}>Birthday</Text>
      <Text style={style.birthdayDate}>{singleBirthday?.date}</Text>
      <View style={style.counterContainer}>
        <CountDown
          size={20}
          until={counterTime}
          onFinish={() => ctaFinishHandler(singleBirthday.docId)}
          digitStyle={{
            backgroundColor: 'black',
            borderWidth: 2,
            borderColor: '#1CC625',
          }}
          digitTxtStyle={{color: '#1CC625'}}
          timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
          separatorStyle={{color: '#1CC625'}}
          showSeparator
        />
      </View>
      <View style={style.buttonContainer}>
        <TouchableOpacity
          onPress={() => ctaDeleteHandler(singleBirthday.docId)}>
          <Text style={{color: 'white', fontSize: 20}}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{color: 'white', fontSize: 20, marginRight: 20}}
            onPress={() => ctaUpdateHandler(singleBirthday.docId)}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
