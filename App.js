
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
// import FontAwesome, { Icons } from 'react-native-fontawesome';


let wordlist = []
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      words: []
     };
    this.onPressLearnMore = this.onPressLearnMore.bind(this)
    this.onPressDelete = this.onPressDelete.bind(this)
  }

  
  onPressLearnMore = () => {
    if (this.state.text.length > 0) {
      wordlist.push(this.state.text)
      this.setState({words: wordlist})
      this.setState({text: ''})
    } else {
      this.setState({text: ''})
    }
  }

  onPressDelete = (num) => {
    this.state.words.splice(num, 1)
    this.setState({text: ''})
  }


  

  render() {
    const items = this.state.words.map((data, i) => {
      return (
        <View key={i} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: 5, width: width, marginLeft: 50}}>
          <TouchableOpacity style={styles.button} onPress={() => this.onPressDelete(i)}><Text style={{color: 'white'}}>-</Text></TouchableOpacity>          
          <Text style={{textAlign: "left", width: '75%'}}>{data}{i}</Text>
        </View>
      )
    })

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>ToDo List</Text>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <TextInput
              style={{height: 40, width: 200, marginBottom: 10, paddingLeft: 7, borderBottomColor: 'teal', borderBottomWidth: 1, marginRight: 10}}
              onChangeText={(text) => this.setState({ text: text })}
              value={this.state.text}
              placeholder="Enter To Do"
            />
            <Button
              onPress={this.onPressLearnMore}
              title="Add"
              color="teal"
            />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {items}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    marginTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    padding: 10,
    fontSize: 20,
    color: 'teal'
  },
  contentContainer: {
    paddingBottom: 20,
    width: width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    paddingTop: 5, 
    paddingRight: 10, 
    paddingBottom: 5, 
    paddingLeft: 10, 
    backgroundColor: 'teal', 
    marginRight: 15,  
    borderRadius: 100
  }
});


