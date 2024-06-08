import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/reduxwithts/hooks';
import { Note, addNote, noteSelector } from '../redux/reduxwithts/notesslice';

const Notes = () => {
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    // need dispact for action and getter to get value (useSelector)

    const dispatch = useAppDispatch() // created in hooks
    const notes = useAppSelector(noteSelector) // from slice
    console.log(notes)

  return (
    <View style={{flex :1 , backgroundColor: 'white'}}>
      <TextInput 
      placeholder='Enter the title'
      onChangeText={txt => setTitle(txt)}
      style={{
        width: '80%', alignSelf:'center', height: 50, borderWidth: 1, marginTop:20, paddingLeft: 20
      }}>Enter Note Title</TextInput>
      <TextInput
      placeholder='Enter the description'
      onChangeText={txt => setDesc(txt)}
      style={{width: '80%', borderWidth: 1, alignSelf: 'center', marginTop: 20, paddingLeft: 20, height: 50}}>
      </TextInput>
      <TouchableOpacity style={{width: '80%', height: 50, backgroundColor: 'black', alignSelf:'center', marginTop: 20}}
      onPress={()=> {
        dispatch(addNote({title, desc}))
      }}
      >
        <Text style={{color: 'white', alignSelf: 'center', marginTop: 20}}>Add Notes</Text></TouchableOpacity>
        <FlatList data={notes} renderItem={({item} : {item: Note}) => {
            return <View style={{backgroundColor: 'green'}}><Text>{item.title}</Text></View>
        }}/>
    </View>
  )
}

export default Notes