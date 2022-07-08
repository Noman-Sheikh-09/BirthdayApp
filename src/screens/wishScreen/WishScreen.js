import { View, ImageBackground } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import WishImage from '../../assets/wishimg.jpg'
import { style } from './WishScreenStyle'
import ConfettiCannon from 'react-native-confetti-cannon';
// import TrackPlayer from 'react-native-track-player';
// const tracks = [
//   {
//     url: require('./tracks/audio.mpeg'),
//     title: 'Birthday beat',
//   },
// ];


// TrackPlayer.updateOptions({
//   stopWithApp: false,
//   capabilities: [TrackPlayer.CAPABILITY_PLAY,],
//   compactCapabilities: [
//     TrackPlayer.CAPABILITY_PLAY,

//   ],
// });

export default function WishScreen() {
   
//     const[ trackPlay, setTrackPlay] = useState();
//   const setupTrackPlayer = async () => {
//     try {
//       await TrackPlayer.setupPlayer();  
//       await TrackPlayer.add(tracks)

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//  setupTrackPlayer()
//     return () => TrackPlayer.play();
 

//   }, []);
//   TrackPlayer.play()
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