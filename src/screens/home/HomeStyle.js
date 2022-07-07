import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'skyblue',
  },
  redBtnContainer: {
    flex: 0.1,
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
    fontWeight: 'bold',
  },
  birthdayDate: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },

  btnContainer: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imgContainer: {
    flex: 4,
  },
  images: {
    position: 'absolute',
    bottom: 100,
    left: 180,
    width: 200,
    borderRadius: 500,
  },
});
