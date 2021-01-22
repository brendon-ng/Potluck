import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  Card,
  Image,
  Button,
  Rating,
  Avatar,
  Icon
} from "react-native-elements";
import colors from "../config/colors";
import PropTypes, { any } from "prop-types";

// general design/architecture notes:
// from the landing page, make query to get all of the dishes
// map those results to this card (each dish gets a card) with the columns as props
// pass in all columns for dish into the MenuCard function
// --> for the dish page navigation, pass in the dish's id parameter
// to do another query call for the dish page
//
export default function MenuCard(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Card>
          <Card.Title>{props.title}</Card.Title>
          <Card.Divider />
          <View>
            <Card.Image source={props.image} style={styles.image} />
            <Text style={styles.price}>{props.price}</Text>
            <Rating
              style={styles.rating}
              readonly={true}
              imageSize={13}
              fractions={1}
              startingValue={props.rating ? props.rating : 0}
            />
            {/* <Avatar
            size="small"
            icon={{ name: "user", type: "font-awesome" }}
            // title="SM"
            // onPress={() => console.log("pressed")}
            // rounded={true}
            // icon={{ name: "user", type: "font-awesome" }}
          /> */}
            <View style={styles.card}>
              <Icon name="android" size={10} />
              <Text style={styles.text}>{props.subtitle}</Text>
            </View>
            <Text style={styles.desc}>{props.description}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

MenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: any,
  rating: PropTypes.number,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    maxWidth: "50%"
    // maxHeight: "30%",
    // justifyContent: "center"
  },
  image: {
    alignSelf: "center"
  },
  text: {
    paddingVertical: 4,
    textAlign: "center",
    color: colors.secondary,
    fontWeight: "bold"
  },
  desc: {
    fontSize: 10,
    flexDirection: "column",
    flexGrow: 2
  },
  rating: {},
  avatar: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row"
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  price: {
    fontSize: 10,
    alignSelf: "center",
    paddingVertical: 4,
    color: colors.black
  }
});
