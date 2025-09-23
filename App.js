import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';


export default function App() {
  const url = "https://developer.marvel.com/v1/public/characters";
  const params = {
    "apikey": "5faa86f5be3a9875de95aa3a6de18b755d97e471"
}

  fetch(url,{
    method: 'get',
    headers: {
      apikey: "5faa86f5be3a9875de95aa3a6de18b755d97e471"
    } 
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
