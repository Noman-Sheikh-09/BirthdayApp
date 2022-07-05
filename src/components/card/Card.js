import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './CardStyle'
import CountDown from 'react-native-countdown-component'
import UseCard from './UseCard'
export default function Card({singleBirthday}) {
  const [ { ctaDeleteHandler,ctaUpdateHandler}] = UseCard();
 
  return (
    <View>
        <Text style={style.personName}>{singleBirthday?.name} 's</Text>
        <Text style={style.personName}>Birthday</Text>
        <Text style={style.birthdayDate}>{singleBirthday?.date}</Text>
        <View style={style.counterContainer}>
        {/* <CountDown
        size={20}
        until={1000}
        onFinish={() => navigation.navigate("Wish Birthday")}
        digitStyle={{backgroundColor: 'black', borderWidth: 2, borderColor: '#1CC625'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#1CC625'}}
     
        showSeparator
      /> */}
        </View>
        <View style={style.buttonContainer}>
        <TouchableOpacity onPress={()=>ctaDeleteHandler(singleBirthday.docId)}>
          <Text style={{color: 'white', fontSize: 20}}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: 'white', fontSize: 20,marginRight:20}} onPress={()=>ctaUpdateHandler(singleBirthday.docId)}>Edit</Text>
        </TouchableOpacity>
        </View>
        
      </View>
  )
}