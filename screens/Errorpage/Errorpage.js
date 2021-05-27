import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-native-paper'
const Errorpage = () => {
    return (
        <Provider>
      <View style={styles.mainContainer}>
          {/* <Hometop /> */}
          <View style={styles.errorView}>
          {/* <Image
        source={require("../../assets/Images/nointernet.png")}
        style={{ width: 200, height: 200 }}
        /> */}
        <Text style={styles.CrossSign}>📶</Text>
       <Text style={styles.noInternet}>No Internet Connection Found</Text>
          </View>
      </View>
      </Provider>
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
        flexDirection:"column",
        justifyContent:"center"
    },
    noInternet:{alignSelf:"center",fontSize:22,color:"grey"}
    ,CrossSign:{
        color:"black",
        fontSize:30
    }
})
