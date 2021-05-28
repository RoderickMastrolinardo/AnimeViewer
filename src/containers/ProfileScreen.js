import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  personalInfo,
  CareerInfo,
  educationInfo,
} from '../assets/info/allInfo.js';

const ProfileScreen = props => {
  const renderData = data => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.7,
          shadowRadius: 3.84,
          elevation: 5,
          backgroundColor: 'white',
        }}>
        {data.map((datainf, index) => (
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              backgroundColor: index % 2 == 0 ? 'white' : '#d3d3d3',
              padding: 5,
            }}>
            <View style={{width: '70%'}}>
              <Text>{datainf.title}</Text>
              {datainf.description && datainf.description !== '' && (
                <Text>{datainf.description}</Text>
              )}
            </View>
            <View style={{width: '30%'}}>
              <Text>{datainf.info}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };
  return (
    <View>
      <ScrollView>
        <View style={{justifyContent: 'center', padding: 20}}>
          <FastImage
            style={{
              width: 300,
              height: 300,
              alignSelf: 'center',
              marginTop: 40,
              borderRadius: 150,
            }}
            source={require('../assets/images/myImage.jpg')}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text
            style={{fontSize: 25, fontFamily: 'Arial', alignSelf: 'center'}}>
            Roderick Mastrolinardo
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Arial',
              color: 'gray',
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            Ingeniero en Sistemas y Computación
          </Text>

          <View style={styles.info}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Arial',
              }}>
              Información Profesional
            </Text>
            {renderData(CareerInfo)}
          </View>
          <View style={styles.info}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Arial',
              }}>
              Educación
            </Text>
            {renderData(educationInfo)}
          </View>
          <View style={styles.info}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Arial',
              }}>
              Datos personales
            </Text>
            {renderData(personalInfo)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  info: {
    marginVertical: 10,
  },
});

export default ProfileScreen;
