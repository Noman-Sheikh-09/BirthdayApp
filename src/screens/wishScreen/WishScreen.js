import { View, ImageBackground } from 'react-native'
import React from 'react'
import WishImage from '../../assets/wishimg.jpg'
import { style } from './WishScreenStyle'
import ConfettiCannon from 'react-native-confetti-cannon';
export default function WishScreen() {
  return (
    <View style={style.wishContainer}>
    <ImageBackground source={WishImage} resizeMode="cover" style={style.WishImage}>
    <ConfettiCannon
        count={200}
        origin={{x: -10, y: 0}}
        autoStart={true}
        width={200}
        height={200}
      />
    </ImageBackground>
    </View>
  )
}