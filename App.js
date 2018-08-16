import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CarList from "./src/components/CarList/CarList";

export default class App extends Component {
  state = {
    cars : {
      key : Math.random(),
      name : 'RENAULT 404',
      image : {
        uri : "https://st.lowrider.com/uploads/sites/7/2010/10/lrmp_1012_37_o-oldies_car_club_show-chevy_belair.jpg"
      },
      portes : 4,
      sieges:  4
    },
    selectedCar: null
  };

  CarSelectedHandler = key => alert('item pressed');

  render() {
    return (
      <CarList
        cars={this.state.cars}
        onItemPressed={this.CarSelectedHandler}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
