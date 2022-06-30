import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  redBtnContainer: {
    flex: 0.10,
    padding: 50,
    marginTop: 20,
  },
  redBtn: {
    color: '#800000',
    backgroundColor: '#800000',
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  nameContainer: {
    flex: 2,
    paddingLeft: 30,
  },
  personName: {
    color: 'white',
    fontSize: 30,
    fontWeight:'bold',

  },
  birthdayDate:{
color:'white',
fontSize:18,
marginTop:10
  },
  imgContainer: {
    flex: 3,
  },
  countDownContainer: {
    flex: 1,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
   
    justifyContent: 'space-around',
    alignItems:'center'
  },
});
