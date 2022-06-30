import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function UseAddScreen() {
    const [name, setName] = useState('')
    const navigation = useNavigation();
  return [{
    name,
    setName,
    navigation
  }]
}