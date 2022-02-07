import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  Entypo,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const DotsMenuIcon = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              <AntDesign name="adduser" size={24} color="black" />
              {"  "} Follow @
            </Text>

            <Text style={styles.modalText}>
              <MaterialIcons name="post-add" size={24} color="black" />
              {"  "}
              Add/remove from Lists
            </Text>
            <Text style={styles.modalText}>
              <Ionicons
                name="ios-volume-mute-outline"
                size={24}
                color="black"
              />
              {"  "}
              Mute @
            </Text>
            <Text style={styles.modalText}>
              <Entypo name="block" size={22} color="black" />
              {"  "}Block @
            </Text>
            <Text style={styles.modalText}>
              <Feather name="flag" size={20} color="black" />
              {"  "} Report Tweet
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity>
        <Pressable onPress={() => setModalVisible(true)}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={20}
            color="lightgray"
          />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginTop: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default DotsMenuIcon;
