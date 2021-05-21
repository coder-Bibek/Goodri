import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image, ThemeProvider } from 'react-native-elements'
import { Button } from 'react-native-paper'
import Hometop from '../Homepage/Hometop/Hometop'

const Errorpage = () => {
    return (
        <ThemeProvider>
      <View style={styles.mainContainer}>
          {/* <Hometop /> */}
          <View style={styles.errorView}>
          <Image
        source={require("../Images/nointernet.png")}
        style={{ width: 200, height: 200 }}
        />
       
          </View>
      </View>
    </ThemeProvider>
    )
}

export default Errorpage

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"whitesmoke"
    },
    errorView:{
        alignItems:"center",
        flexDirection:"column"
    }
})
