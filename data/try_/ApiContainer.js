import React, { Component } from "react";
import ApiView from "./ApiView";
import axios from "axios";
import styles from "./ApiStyles";
import { View, Text, TouchableOpacity } from "react-native";
class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fromAxios: false,
      dataSource: [],
      axiosData: null,
    };
  }

  goForAxios = () => {
    this.setState({
      fromFetch: false,
      loading: true,
    });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("getting data from axios", response.data);
        setTimeout(() => {
          this.setState({
            loading: false,
            axiosData: response.data,
          });
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  FlatListSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
    );
  };
  renderItem = (data) => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>{data.item.name}</Text>
        <Text style={styles.lightText}>{data.item.email}</Text>
        <Text style={styles.lightText}>{data.item.company.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { dataSource, fromAxios, loading, axiosData } = this.state;
    return (
      <ApiView
        goForAxios={this.goForAxios}
        dataSource={dataSource}
        loading={loading}
        fromAxios={fromAxios}
        axiosData={axiosData}
        FlatListSeparator={this.FlatListSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

export default ApiContainer;
