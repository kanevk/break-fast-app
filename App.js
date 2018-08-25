import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SvgUri from 'react-native-svg-uri';

export default class App extends React.Component {
  render() {
    let data = [
      {dayName: 'Monday', key: 'monday', imageSource: require('./assets/empty-plate.svg'), time: '9:20'},
      {dayName: 'Tuesday', key: 'tuesday', imageSource: require('./assets/empty-plate.svg'), time: '10:00'},
      {dayName: 'Wednesday', key: 'wednesday', imageSource: require('./assets/egg.svg'), time: '9:00'},
      {dayName: 'Thursday', key: 'thursday', time: '9:00'},
      {dayName: 'Friday', key: 'friday', time: '9:00'},
    ]

    return (
      <View style={{backgroundColor: '#f53b50'}}>
        <Text style={{marginLeft: 40, marginTop: 60, fontSize: 40, color: '#faf7f7', fontFamily: 'Roboto'}}>Your Week</Text>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, marginLeft: 40}}>
              <View style={
                {
                  backgroundColor: 'white',
                  height: 100,
                  width: 100,
                  borderRadius: 20,
                  ...Platform.select({
                    ios: {
                      shadowOffset: {width: 30, height: 10},
                      shadowColor: 'black',
                      shadowOpacity: 2.0,
                      shadowRadius: 3,
                    },
                    android: {elevation: 5},
                  }),
                }
                }>
                <SvgUri source={item.imageSource} width='100' height='100'/>
              </View>
              <View style={
                {
                  backgroundColor: 'white',
                  height: 150,
                  width: 300,
                  transform: [{translateX: -60}],
                  borderRadius: 20,
                  paddingLeft: 80,
                  paddingTop: 10,
                  flexDirection: 'column',
                }
              }>
                <View style={{flexDirection: 'row', alignItems: 'baseline', width: 200}}>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.dayName}</Text>
                  {
                    item.key === 'monday' ? <Text style={{fontStyle: 'italic'}}> (Tommorow)</Text> : null
                  }
                  <Text style={{flexGrow: 5}}>{item.time}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
