import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {style} from './HomeStyle';
import UseHome from './UseHome';
import Card from '../../components/card/Card';
import Building from '../../assets/bg.jpg';
export default function Home() {
  const [{navigation, goAddHandler, birthdayData}] = UseHome();
  // console.log('Data from useSelector in home', birthdayData);
  const Images = [  
    require("../../assets/heart.png"),
    require("../../assets/insta.png"),
    require("../../assets/star.png"),
    require("../../assets/vector.png"),
    require("../../assets/chips.png"),
    require("../../assets/ludo.png"),
    require("../../assets/oip.png")
  ]
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
        {/* images part  */}
        <View style={style.imgContainer}>
        <Image
            style={style.images}
            source={Images[new Date().getDay()]}
            resizeMode="contain"
          />
        </View>
      
        <View style={style.btnContainer}>
          <TouchableOpacity onPress={birthdayData?.length>=1?null:goAddHandler}>
            <Text style={{color: 'white', fontSize: 20}}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
