
import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native'
import Header from '../Components/Header';
import Promotions from '../Components/Promotions';
import Betters from '../Components/Betters';
import Exclus from '../Components/Exclus';
class Test extends Component {
  render() {
    return (
      <View>
        <Header/>
            <View style={{paddingBottom: 10}}>
              <Betters/>
            </View>
      </View>
    )
  
    }
}
const styles = StyleSheet.create({
 
  });

  export default Test;