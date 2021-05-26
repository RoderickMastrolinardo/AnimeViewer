import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const AnimeTextInput = props => {
  const [text, setText] = useState(null);
  return (
    <View style={props.containerStyle}>
      <Icon
        style={{alignSelf: 'center'}}
        name={'search1'}
        size={20}
        color={'grey'}
      />
      <TextInput
        style={{
          fontFamily: 'Arial',
          fontSize: 14,
          flex: 1,
        }}
        value={text}
        placeholder="Buscar"
        onChangeText={setText}
        onSubmitEditing={() => props.onSubmit(text)}></TextInput>
      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() => {
          props.onSubmit(null);
          setText(null);
        }}>
        <Icon name={'closecircleo'} size={20} color={'grey'} />
      </TouchableOpacity>
    </View>
  );
};

export default AnimeTextInput;
