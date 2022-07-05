import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {db} from '../config/Firebase';
import {Alert} from 'react-native';

// Fetch Data from firebase

export const getBirthday = createAsyncThunk(
  'birth/getBirthday',
  async () => {
    try {
      const birthday = [];
      const snapShot = await db.collection('birthdays').get();
      snapShot.forEach((item) => {
        birthday.push({...item.data(), docId:item.id});
      console.log('birthday array', birthday);
      });
      return birthday;
    } catch (error) {
      Alert.alert(error.message);
    }
  },
);

export const addBirthday = createAsyncThunk(
  'birth/addBirthday',
  async data => {
    try {
      await db.collection('birthdays').add(data);
      const localData = {...data, docId:data.id};
      console.log('data in slice', localData);
      return localData;

    } catch (error) {
      Alert.alert(error.message);
    }
  },
);
//  Delete Birthday 

export const deleteBirthday = createAsyncThunk("birth/deleteBirthday", async(docId)=>{
try {
  await db.collection("birthdays").doc(docId).delete();
return docId;
} catch (error) {
  Alert.alert(error.message)
}
})

// Update Birthday 

export const updateBirthday = createAsyncThunk("birth/updateBirthday", async(data)=>{
  try {
    await db.collection('birthdays').doc(data.docId).update(data);
    return data;
    
  } catch (error) {
    Alert.alert(error.message)
  }
})

const birthdaySlice = createSlice({
  name: 'birth',
  initialState: {
    birthdayArray: [],
    error: false,
    pending: false,
    isUpdate: false,
    updateObj: {}
  },
  reducers: {
    setIsUpdate:(state,action)=>{
      console.log("Update Reducer");
      state.isUpdate = true;
      state.updateObj = action.payload;
    }
  },
  extraReducers: {
    [getBirthday.fulfilled]: (state, action) => {
      state.birthdayArray = action.payload;
      console.log('data in get reducer', action.payload);
      state.pending = false;
    },
    [getBirthday.rejected]: (state, action) => {
      state.error = true;
      state.pending = true;
    },

    [getBirthday.pending]: (state, action) => {
      state.pending = true;
    },
    [addBirthday.fulfilled]: (state, action) => {
      console.log('add reducer', action.payload);
      state.birthdayArray = [...state.birthdayArray, action.payload];
    },
    [addBirthday.rejected]: (state, action) => {
      state.error = true;
      state.pending = false;
    },
    [addBirthday.pending]: (state, action) => {
      state.pending = true;
    },
    [deleteBirthday.fulfilled]: (state, action)=> {
      const valueAfterDelete = state.birthdayArray.filter((singleItem)=>singleItem.docId !== action.payload)
   state.birthdayArray = valueAfterDelete
    }
  },
  [updateBirthday.fulfilled]: (state, action) => {
    const updatedData = state.birthdayArray.map(singleItem => {
      if (action.payload.docId === singleItem.docId) {
        return {...singleItem,...action.payload};
      } else {
        return singleItem;
      }
    });
console.log("updated data",updatedData);
    state.todo = updatedData;
  },
});
export default birthdaySlice.reducer;
