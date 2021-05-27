import { Picker } from "@react-native-community/picker";
import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  Modal,
  Portal,
  Title,
  Button,
  Provider,
  Card,
  TextInput,
  HelperText,
} from "react-native-paper";

const Mainmodal = () => {
  const navigation = useNavigation();
  const [locCity, setLocCity] = React.useState("Duhabi");
  const[wardInfo,setWradInfo]=React.useState("")
  const [visible, setVisible] = React.useState(true)
  const hasWarderror=()=>{
    return wardInfo.length == 0;
  }
  const goGoodri=()=>{
    if(wardInfo.length>0){
    navigation.navigate("notifications")
    }
  }
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => {}}
          contentContainerStyle={styles.containerStyle}
        >
         
            <Card style={styles.cardView} >
                <ScrollView>
              <Card.Title title="Delivery City" titleStyle={styles.delcityTitle}  />
              <Card.Content>
                <TextInput
                  mode="outlined"
                  value={locCity}
                  editable={false}
                  style={styles.locCity}
                />
              </Card.Content>
              <Card.Content>
                <Title style={styles.delcityTitle}>Delivery Ward</Title>
                <Picker
                  style={styles.Picker}
                  selectedValue={wardInfo}
                  onValueChange={(ward)=>{
                    setWradInfo(ward)
                  }}
                >
                   <Picker.Item label="Select a ward"  value=""  />
                  <Picker.Item label="Ward-5" value="5" style={styles.Pickeritem} />
                  <Picker.Item label="Ward-4" value="4" style={styles.Pickeritem} />
                </Picker>
                <HelperText style={styles.HelperText}type="error" visible={hasWarderror()}>Ward must be selected</HelperText>
              </Card.Content>
              <Card.Actions>
                <Button mode="contained" color="darkblue" onPress={goGoodri} style={styles.gogudriBtn}>
                  Go Goodri
                </Button>
              </Card.Actions>
              </ScrollView>
            </Card>
        </Modal>
      </Portal>
    </Provider>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    padding: 20,
    margin: 10,
    marginTop:-50
  },
  locCity: {
    marginBottom: 15,
    backgroundColor: "white",
    height: 40,
  },
  cardView:{
    borderRadius:10
  },
  gogudriBtn: { width: Dimensions.get("screen").width - 80, padding: 5,marginVertical:3 },
  delcityTitle:{
    color:"grey"
  },
  Picker:{
    height: 50,
    width: Dimensions.get("screen").width - 80,
    borderWidth: 0.5,
  },
  Pickeritem:{
    fontSize:15
  },
  HelperText:{
    // color:"red"
  }
});
export default Mainmodal;
