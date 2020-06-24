import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default ({ route }) => {
  const duaDetails = route.params.dua;

  return <View>
      <Text>{duaDetails.title}</Text>
      <Text>{duaDetails.desc}</Text>
      <Text>{duaDetails.pronuntiation}</Text>
      <Text>{duaDetails.translation}</Text>
      <Text>{duaDetails.source}</Text>
    </View>;

};


const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 20,
  },
  list: {
      //paddingHorizontal: 5,
      backgroundColor: "#E6E6E6",
  },
 

  
  card: {
    
      height: 150,
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
  },

  title: {
      fontSize: 20,
      flex: 1,
      color: "#000000",
      fontWeight: 'bold',
      marginLeft: 20,
  },
  text : {
    fontSize: 15,
    flex: 1,
    color: "#000000",
    marginLeft: 20,
  },

  desc: {
      fontSize : 25,
      flex: 1,
      color : "#000000",
      marginLeft: 20,
  },
  subTitle: {
      fontSize: 12,
      flex: 1,
      color: "#FFFFFF",
  },
 
});