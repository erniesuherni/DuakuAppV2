import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, FlatList, AsyncStorage, Button, TextInput, Keyboard, Platform } from "react-native";

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class AddDuas extends Component {
  state = {
    dua: [],
    text: ""
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addDua = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { dua, text } = prevState;
          return {
            dua: dua.concat({ key: dua.length, text: text }),
            text: ""
          };
        },
        () => Duas.save(this.state.dua)
      );
    }
  };

  deleteDua = i => {
    this.setState(
      prevState => {
        let dua = prevState.dua.slice();

        dua.splice(i, 1);

        return { dua: dua };
      },
      () => Duas.save(this.state.dua)
    );
  };

  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewMargin: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewMargin: viewPadding })
    );

    Duas.all(dua => this.setState({ dua: dua || [] }));
  }

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewMargin }]}
      >
        <FlatList
          style={styles.list}
          data={this.state.dua}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <Button title="X" onPress={() => this.deleteDua(index)} />
              </View>
              <View style={styles.hr} />
            </View>}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addDua}
          value={this.state.text}
          placeholder="Add Dua"
          returnKeyType="done"
          returnKeyLabel="done"
        />
      </View>
    );
  }
}

let Duas = {
  convertToArrayOfObject(dua, callback) {
    return callback(
      dua ? dua.split("||").map((dua, i) => ({ key: i, text: dua })) : []
    );
  },
  convertToStringWithSeparators(dua) {
    return dua.map(dua => dua.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("DUA", (err, dua) =>
      this.convertToArrayOfObject(dua, callback)
    );
  },
  save(dua) {
    AsyncStorage.setItem("DUA", this.convertToStringWithSeparators(dua));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  }
});

AppRegistry.registerComponent("AddDuas", () => AddDuas);
