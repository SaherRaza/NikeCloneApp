import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { TextInput } from "react-native-paper";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function SignupScreen({ navigation }) {
  const [text, setText] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [username, setUsername] = React.useState("");

  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [visible1, setVisible1] = React.useState(true);
  const [visible2, setVisible2] = React.useState(true);

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.bgContainer}
        source={require("../../assets/n1.jpg")}
      >
        {/* <TouchableOpacity>
          <Image
            resizeMode="contain"
            source={require("../../assets/icons/leftIcon.png")}
            style={styles.iconStyle}
          />
        </TouchableOpacity> */}

        <View style={styles.txtContainer}>
          <Text style={styles.textStyle1}>Create Account</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text
              style={[
                styles.textStyle1,
                {
                  textDecorationLine: "underline",
                  color: "#6C8193",
                  fontSize: 14,
                },
              ]}
            >
              Login Instead
            </Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
          enabled={true}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          >
            <View>
              <View style={{ marginTop: hp("1%") }}>
                <TextInput
                  style={styles.textInputStyle}
                  label="Name"
                  value={text}
                  onChangeText={(text) => setText(text)}
                  mode="outlined"
                  outlineColor="#495864"
                  keyboardType="default"
                  textColor="#495864"
                  theme={{
                    colors: {
                      primary: "white",
                      underlineColor: "transparent",
                      placeholder: "#495864",
                      text: "white",
                      fontFamily: "semibold",
                    },
                    roundness: 14,
                  }}
                />
              </View>

              <View>
                <TextInput
                  style={styles.textInputStyle}
                  label="Email"
                  value={email}
                  onChangeText={(email) => setEmail(email)}
                  mode="outlined"
                  outlineColor="#495864"
                  keyboardType="default"
                  textColor="white"
                  theme={{
                    colors: {
                      primary: "white",
                      underlineColor: "transparent",
                      placeholder: "#495864",
                      text: "white",
                      fontFamily: "semibold",
                    },
                    roundness: 14,
                  }}
                />
              </View>

              <View>
                <TextInput
                  style={styles.textInputStyle}
                  label="Phone"
                  value={phone}
                  onChangeText={(phone) => setPhone(phone)}
                  mode="outlined"
                  outlineColor="#495864"
                  keyboardType="default"
                  textColor="#495864"
                  theme={{
                    colors: {
                      primary: "#495864",
                      underlineColor: "transparent",
                      placeholder: "#495864",
                      text: "white",
                      fontFamily: "semibold",
                    },
                    roundness: 14,
                  }}
                />
              </View>

              <View>
                <TextInput
                  style={styles.textInputStyle}
                  label="Username"
                  value={username}
                  onChangeText={(username) => setUsername(username)}
                  mode="outlined"
                  outlineColor="#495864"
                  keyboardType="default"
                  textColor="#495864"
                  theme={{
                    colors: {
                      primary: "#495864",
                      underlineColor: "transparent",
                      placeholder: "#495864",
                      text: "white",
                      fontFamily: "semibold",
                    },
                    roundness: 14,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <TextInput
                  style={styles.textInputStyle}
                  label="Enter New Password"
                  value={password1}
                  onChangeText={(password) => setPassword1(password)}
                  mode="outlined"
                  outlineColor="#495864"
                  textColor="#495864"
                  keyboardType="default"
                  secureTextEntry={visible1}
                  theme={{
                    colors: {
                      primary: "#495864",
                      underlineColor: "transparent",
                      placeholder: "#495864",
                      text: "white",
                    },
                    roundness: 14,
                  }}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 20,
                    zIndex: 200,
                    alignItems: "center",
                    top: 30,
                  }}
                  onPress={() => {
                    setVisible1(!visible1);
                    setShow1(!show1);
                  }}
                >
                  <MaterialCommunityIcons
                    style={{ zIndex: 200 }}
                    name={show1 === false ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    color="#495864"
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <TextInput
                  style={styles.textInputStyle}
                  label="Confirm Password"
                  value={password2}
                  onChangeText={(password) => setPassword2(password)}
                  mode="outlined"
                  outlineColor="#495864"
                  textColor="#495864"
                  keyboardType="default"
                  secureTextEntry={visible2}
                  theme={{
                    colors: {
                      primary: "#495864",
                      underlineColor: "transparent",
                      placeholder: "#495864",
                      text: "white",
                    },
                    roundness: 14,
                  }}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 20,
                    zIndex: 200,
                    alignItems: "center",
                    top: 30,
                  }}
                  onPress={() => {
                    setVisible2(!visible2);
                    setShow2(!show2);
                  }}
                >
                  <MaterialCommunityIcons
                    style={{ zIndex: 200 }}
                    name={show2 === false ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    color="#495864"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.btnMainContainer}>
              <TouchableOpacity style={styles.btnContainer}>
                <Text
                  style={[
                    styles.textStyle,
                    { color: "#FFFFFF", textAlign: "center" },
                  ]}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            <StatusBar
              barStyle="dark-content"
              hidden={false}
              backgroundColor="#495864"
              translucent={true}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    width: WIDTH,
    height: HEIGHT,
  },
  bottomBG: {
    width: WIDTH,
    marginTop: hp("30%"),
  },
  imageContainer: {
    width: wp("52%"),
    height: hp("10%"),
    alignSelf: "center",
    marginTop: hp("4%"),
  },
  txtContainer: {
    marginTop: hp("12%"),
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  textStyle1: {
    fontSize: 20,
    color: "#EAA795",
    fontFamily: "semibold",
    textAlignVertical: "center",
  },
  textInputStyle: {
    marginTop: hp("1%"),
    backgroundColor: "#272E34",
    width: WIDTH / 1.05,
    alignSelf: "center",
    fontFamily: "semibold",
  },

  textStyle: {
    fontFamily: "semibold",
    padding: 10,
  },
  btnTextStyle: {
    color: "#464F57",
    textDecorationLine: "underline",
    fontFamily: "semibold",
  },
  iconStyle: {
    width: 13,
    height: 13,
    tintColor: "#EAA795",
    marginTop: hp("5%"),
    marginLeft: wp("4%"),
  },
  btnMainContainer: {
    marginTop: hp("5.8%"),
  },
  btnContainer: {
    width: wp("40%"),
    alignSelf: "center",
    backgroundColor: "#EAA795",
    borderRadius: 10,
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
  },
});
