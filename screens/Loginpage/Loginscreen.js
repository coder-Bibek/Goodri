import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  Card,
  Button,
  TextInput,
  HelperText,
} from "react-native-paper";
const Loginscreen = ({navigation}) => {
    const[number,setNumber]=useState("")
  const hasNumberError = () => {
    return !number=="" && number.length <10
  };
  const verifyOn=()=>{
    navigation.navigate("verification");
  }
  return (
    <View style={styles.Loginscreenview}>
      <Card style={styles.loginCard}>
        <Text style={styles.cardTitle}>
          We will send an SMS with a confirmation code to this number
        </Text>
        <Card.Content style={styles.cardContent}>
          <Text>+977</Text>
          <TextInput
            mode="flat"
            style={styles.textInput}
            textContentType="telephoneNumber"
            keyboardType="number-pad"
            value={number}
            onChangeText={(val)=>{setNumber(val)}}
            maxLength={10}
          />
        </Card.Content>
        <HelperText
          style={styles.helperText}
          visible={hasNumberError()}
          type="error"
        >
          Number cannot be less than 10 digits
        </HelperText>
        <Button
          mode="contained"
          labelStyle={styles.NextColor}
          color="orange"
          style={styles.cardButton}
          disabled={!number || hasNumberError()}
          onPress={verifyOn}
        >
          Next
        </Button>
      </Card>
    </View>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  Loginscreenview: {
    backgroundColor: "whitesmoke",
  },
  loginCard: {
    marginTop: 20,
    marginHorizontal: 10,
    shadowOffset:{width:300, height:200},
    shadowColor:"black",
    shadowOpacity:5
  },
  cardButton: {
    marginTop: 10,
    padding: 4,
  },
  NextColor: {
    color: "#fff",
  },
  cardTitle: {
    marginTop: 10,
    flexWrap: "wrap",
    color: "grey",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: "#fff",
    flexGrow: 33,
    height: 20,
    marginHorizontal: 10,
    borderTopWidth: 0,
    borderStartWidth: 0,
    textAlign:"center"
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  helperText: {
    marginTop: 10,
    textAlign: "center",
  },
});
