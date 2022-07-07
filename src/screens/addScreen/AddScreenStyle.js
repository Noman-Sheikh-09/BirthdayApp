import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  inputContainer: {
    paddingLeft: 30,
    paddingRight: 30,
   marginTop:"20%"
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 30,padding:15,
    borderWidth:3,
    borderColor:'#1CC625'
  },
  dateInput:{
    backgroundColor:"white",
    borderRadius:30,
    marginTop:30,
    padding:15,
    width:"100%",
   borderWidth:3,
   borderColor:'#1CC625'
  },
  addBtn:{
    backgroundColor:'maroon',
    padding:15,
    borderRadius:100,
    textAlign:'center',
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  },
  cancelBtn:{
    backgroundColor:'white',
    padding:15,
    borderRadius:100,
    textAlign:'center',
    color:"maroon",
    fontSize:18,
    marginTop:10,
    fontWeight:"bold"
  }
});
