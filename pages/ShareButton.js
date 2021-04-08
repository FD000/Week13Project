import React, { useState } from 'react';
import { Share, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'

const icon = '../assets/icon.png'

const Myicon = styled.Image`
height: 10%;
width: 10%
`

// Detta är en component, lägg till den där
const ShareExample = ( {MovieHomepage} ) => {
  

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hey please check this webpage!',
        url: MovieHomepage,   
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View > 
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

export default ShareExample;