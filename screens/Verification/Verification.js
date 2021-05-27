import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { Card, HelperText, TextInput } from "react-native-paper";

const Verification = () => {
  const [loadMe, setLoadMe] = useState(false);
  const [vCode, setVCode] = useState("");
  const surfGoodri = () => {
    setLoadMe(true);
  };
  const hasConfirmationerror = () => {
    return vCode == '123456'
  };
  return (
    <View style={styles.VerificationView}>
      <Card style={styles.loginCard}>
        <Text style={styles.CodeText}>Enter the Code Sent to You</Text>
        <Card.Content>
          <TextInput
            mode="flat"
            value={vCode}
            onChangeText={(e) => {
              setVCode(e);
            }}
            keyboardType="number-pad"
            maxLength={6}
            style={styles.TextInput}
          />
          <HelperText type="error" visible={hasConfirmationerror()}>
            Verification Code doesnt match
          </HelperText>
        </Card.Content>
      </Card>
      <Button
        title="Surf Goodri"
        raised={true}
        // disabled={!vCode || hasConfirmationerror()}
        onPress={() => {
          surfGoodri();
        }}
        loading={loadMe}
        containerStyle={styles.surfGoodri}
        mode="contained"
      >
        Register Me
      </Button>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  VerificationView: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  loginCard: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  TextInput: {
    backgroundColor: "white",
    marginTop: 20,
    height: 30,
    textAlign:"center",
    marginBottom:5
  },
  CodeText: {
    color: "grey",
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
  },
  surfGoodri: {
    marginHorizontal: 10,
    marginTop: 10,
    padding:5,
    backgroundColor: "orange",
  },
});
