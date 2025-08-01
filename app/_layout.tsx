import React, { useEffect } from 'react'
import "../global.css"
import { Slot, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font';
import {GestureHandlerRootView} from 'react-native-gesture-handler'


const RootLayout = () => {
    
    const [fontsLoaded, error] = useFonts({
        'Patrick-Regular': require('../assets/fonts/PatrickHand-Regular.ttf')
    })

    useEffect(() => {
        if( error ) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
        
    }, [fontsLoaded, error])
    
    if(!fontsLoaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      
      <Slot/> 
    </GestureHandlerRootView>
        
  )
}

export default RootLayout