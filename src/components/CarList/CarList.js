import React from "react";
import { Flatlist, StyleSheet } from "react-native";
import CarItem from "../CarItem/CarItem";

const CarList = props => {
  return(
    <Flatlist
      style={styles.listcontainer}
      data={props.cars}
      renderItem={ (info) => (
        <CarList
          carName = {info.item.name}
          carImage = {info.item.image}
          sieges = {info.item.sieges}
          portes = {info.item.portes}
          onItemPressed={ () => props.onItemPressed(info.item.key)}
        />
      )}
    />
  );
};


const styles=StyleSheet.create({
  listcontainer: {
    width : '100%'
  }
});

export default CarList;
