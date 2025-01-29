import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  View, Text, Image, ScrollView, TextInput, StyleSheet, Button, Alert,
  FlatList, TouchableOpacity, ActivityIndicator, StatusBar, Switch, ProgressBarAndroidBase,
  ImageBackground, Platform
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import * as Progress from 'react-native-progress';
import { AirbnbRating } from '@rneui/themed';
import CheckBox from 'react-native-check-box'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
// import CalendarPicker from 'react-native-calendar-picker'
import DateTimePicker from '@react-native-community/datetimepicker';
// import Demo from './Demo';
// 192.168.0.110

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

const App = (props) => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(false)
  const [arr, setArr] = useState(['1', '2', '3'])
  const [gender, setGender] = useState('')
  const [isEnabled, setIsEnabled] = useState(false);

  //DropDownPicker 
  const [open, setOpen] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' },
    { label: 'C++', value: 'cpp' },
  ]);

  //----check box and radio button 
  const [check1, setCheck1] = useState({
    dancing: false,
    cricket: false
  });

  const [rvalue, setrvalue] = useState(0)
  const [radio, setRadio] = useState([
    { label: 'Male', value: 0 },
    { label: 'FeMale', value: 1 },
    { label: 'Other', value: 2 }
  ]);

  //----Calender
  const [date, setDate] = useState(new Date());
  const [mode, setmode] = useState('date');
  const [show, setShow] = useState(false);

  // Handle date selection
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios')
    // setShow(Platform.OS === 'ios' ? false : true);
    setDate(currentDate)
  }
  const Showmode = (currentmode) => {
    setShow(true)
    setmode(currentmode)
  }

  // Show the picker
  const showDatePicker = () => {
    Showmode('date')
    // Showmode('date' as AndroidMode); 
    // setShow(true);
  }

  const ShowTimepicker = () => {
    Showmode('time')
    // Showmode('time' as AndroidMode);
  }

  // const [progress, setProgress] = useState(0);
  // const increaseProgress = () => {
  //   setProgress(progress + 0.1 > 1 ? 1 : progress + 0.1);
  // };

  const checklogin = () => {
    if (user === "admin" && password === "123") {
      setLogin(true);
      Alert.alert("succesfully login")
    } else {
      Alert.alert("Confirm Action", "invalid username and password", [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ])
    }
    // const Drawer = createDrawerNavigator(); ----------
  }
  // StatusBar.setHidden(false, 'fade');
  return (
    <>
  {/* <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: '#fff',
          drawerStyle: { backgroundColor: '#f4f4f4', width: 240 },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer> */}


      <StatusBar
        backgroundColor="#b3e6ff" // Background color of the status bar
        barStyle="dark-content"  //light-content ->white color Text and icon color style
        // hidden={false}          // Show or hide status bar
        translucent={false}    // Whether the status bar is translucent Android only
      // animated={true}
      />

      <ScrollView> {/* it will scroll by defoult vertically  */}
        {/* <ImageBackground
          source={require('./images/white-simple.avif')}
          style={{ height: '100%', width: '100%' }}
        > */}


        <View style={styles.header}>
          <Text style={styles.heading}>header</Text>
        </View>
        <Button onPress={checklogin} title='click' color={"green"} />

        <View>
          <TextInput
            style={{ height: 40, width: '90%', marginTop: 20, marginLeft: 20, backgroundColor: 'gray', borderCurve: "circular" }}
            placeholder='Enter User Name:'
            onChangeText={setUser}
            editable={true}
            maxLength={20}
            multiline={true}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Enter Password:'
            onChangeText={setPassword}
            editable={true}
            keyboardType="phone-pad"
            secureTextEntry={true} // password
            maxLength={12}
            multiline
          />
        </View>

        {/* -------check box--- need to install npm i react-native-check-box */}
        <CheckBox isChecked={check1.dancing}
          onClick={() => setCheck1({ ...check1, dancing: !check1.dancing })} style={{ marginLeft: 20 }}
          rightText="danicng" rightTextStyle={{ fontSize: 20 }}
          //  leftText="danicng" leftTextStyle={{fontSize:20}}
          // checkBoxColor='red'
          checkedCheckBoxColor='green'
          uncheckedCheckBoxColor='red'
        //  disabled
        />

        <CheckBox isChecked={check1.cricket}
          onClick={() => setCheck1({ ...check1, cricket: !check1.cricket })} style={{ marginLeft: 20 }}
          rightText="cricket" rightTextStyle={{ fontSize: 20 }}
          //  leftText="wgeiue" leftTextStyle={{fontSize:20}}
          // checkBoxColor='red'
          checkedCheckBoxColor='green'
          uncheckedCheckBoxColor='red'
        //  disabled
        />
        <Text style={{ marginLeft: 20 }}>checked:{check1.dancing === true ? "dancing" : " "}  {check1.cricket === true ? "cricket" : " "}</Text>
        {/* One way to define radio button */}
        {/* <RadioForm style={{marginLeft:20}}
          radio_props={radio}
          initial={rvalue} onPress={(val)=>setrvalue(val)}
          buttonColor='red'
          selectedButtonColor='green'
          labelColor='red'
          selectedLabelColor='green'
          // labelHorizontal={false}
         formHorizontal
          /> */}

        {/* Another way to define radio button */}
        <RadioForm style={{ marginLeft: 20 }}>
          {
            radio.map((obj, index) => (
              <RadioButton key={index}>
                <RadioButtonInput
                  obj={obj}
                  index={index}
                  isSelected={index === rvalue}
                  onPress={() => setrvalue(index)}
                  borderWidth={2}
                  buttonInnerColor="green"
                  buttonOuterColor={index === rvalue ? 'green' : 'red'}
                  buttonSize={20}
                  buttonWrapStyle={{ marginRight: 16 }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={index}
                  onPress={() => setrvalue(index)}
                  labelStyle={{
                    color: index === rvalue ? 'green' : 'red',
                    fontSize: 19,
                    fontWeight: 'bold'
                  }}
                />
              </RadioButton>
            ))
          }
        </RadioForm>
        <Text style={{ marginLeft: 20 }}>{ }Radio:{rvalue == 0 ? "male" : ""}{rvalue == 1 ? "female" : ""}{rvalue == 2 ? "other" : ""}</Text>

        {/* ------calender date need tto install npm i react-native-calendar-picker and npm add moment */}
        <View style={{ margin: 20 }}>
          <Text>Select a Date:</Text>
          <Button title="Pick a Date" onPress={showDatePicker} />

          <Text>Select a Time:</Text>
          <Button title="Pick a time" onPress={ShowTimepicker} />

          <Text>Selected Date: {date.toLocaleDateString()}</Text>
          <Text>Selected Date: {date.toLocaleTimeString()}</Text>

          {show && (
            <DateTimePicker
              testID='datetimepicker'
              value={date}
              mode={mode}
              display={'default'}
              onChange={onChange}
              is24Hour={true}
            />
          )}
        </View>

        {/* ------------picker like dropdown or gender used */}
        <Picker
          style={{ marginTop: 20, marginLeft: 13, width: '90%', borderWidth: 2 }}
          // style={{ marginVertical: 20, height: 50, width: '90%', borderWidth: 1, borderColor: '#ccc' }}
          // style={styles.picker}
          selectedValue={gender}
          onValueChange={(val) => setGender(val)}
          enabled={true} >
          <Picker.Item label='Select gender' value={''} />
          <Picker.Item label='male' value={'male'} />
          <Picker.Item label='female' value={'female'} />
        </Picker>
        <Text style={{ marginLeft: 20 }}>Gender:{gender}</Text>

        {/* DropDownPicker to select multiple value al the time you need to install "npm install react-native-dropdown-picker" */}
        <View style={{ marginLeft: 20, }}>
          <DropDownPicker
            style={{ marginTop: 20, width: '95%' }}
            open={open} //true false
            setOpen={setOpen}
            value={selectedItems} // stor value in array define empty array [].
            setValue={setSelectedItems}
            items={items} //array of object label and value.
            setItems={setItems}
            multiple={true}
            min={0}
            max={4}
            searchable={true} // search value display in
            dropDownContainerStyle={{ backgroundColor: 'skyblue', borderColor: 'red' }}
            placeholder="Select programming languages"
            maxHeight={200}
            dropDownDirection="BOTTOM"
            itemSeparator={true}
          />
          <Text>Selected Items:{selectedItems.join(',')}</Text>
        </View>
        <View style={styles.btn}>
          <Button onPress={
            () => Alert.alert("UserName:" + user + "\npassword:" + password)}
            title='login' color={"green"} disabled={false} />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Hello,{props.name}</Text>
        </View>
        <Image
          source={require('./images/backimg1.jpeg')}
          style={{ height: 50, width: '100%' }}
        />

        {/*----------- scroll horizontal */}
        <ScrollView horizontal={true}>
          <View style={styles.container}>
            <View style={styles.innerCon1}>
              <Text>{gender}</Text>
            </View>
            <View style={styles.innerCon2}>
              <Text>{isEnabled}</Text>
            </View>
            <View style={styles.innerCon3}>
              <Text>container1</Text>
            </View>
          </View>
        </ScrollView>
        {/* ------------ListView */}
        <FlatList
          data={arr}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={{ marginLeft: 20 }}>{item}</Text>}
        // nestedScrollEnabled={true}
        />

        <View style={{ margin: 50 }}>
          <TouchableOpacity
            onLongPress={() => Alert.alert('Press Out Triggered!')}
            style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Press Out Me</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activityindicator}>
          <ActivityIndicator size={50} color="red" animating={false} hidesWhenStopped={true} />
        </View>

        {/* switch is used turn on or off */}
        <Switch
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: '50%' }}
          trackColor={{ false: 'red', true: 'green' }}
          thumbColor={isEnabled ? "green" : "red"}
          onValueChange={(newValue) => setIsEnabled(newValue)} // Function to handle switch toggle
          value={isEnabled}  // Current state of switch
        />
        {/* Rating system */}
        {/* <AirbnbRating /> */}
        <AirbnbRating
          count={11}
          reviews={[
            'Terrible','Bad','Meh','OK','Good','Hmm...','Very Good','Wow','Amazing','Unbelievable','Jesus',]}
          defaultRating={11}
          size={20}
        />

        {/* <ProgressBarAndroidBase 
        styleAttr="Horizontal" 
        indeterminate={false} 
        progress={progress} 
        color="blue" 
      /> */}

        {/* <View style={styles.processBar}>
      <Progress.Bar progress={progress} width={200} color="blue" />
      <Button title="Increase Progress" onPress={increaseProgress} />
    </View> */}

        {/* </ImageBackground> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    // color:"red",
    fontWeight: 'bold',
    // marginTop:25,
    textAlign: 'center'
  },
  header: {
    // flex:1,
    // flexDirection:"row",
    height: 50,
    width: "100%",
    backgroundColor: "blue",
    // marginTop:37
  },
  btn: {
    // alignItems:"center",
    margin: 20,
    // justifyContent:'space-between'    
    // backgroundColor:"lightblue"
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20, // Space below the input
    marginTop: 20,
    paddingLeft: 10, // Padding inside the text input
    // width: '90%', // Set width to 80% of the container
    height: 40, // Height of the input field
    borderWidth: 2, // Border thickness
    borderColor: 'blue', // Border color
    justifyContent: 'center',
    borderRadius: 10, // Rounded corners
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around'

  },
  innerCon1: {
    height: 100,
    width: 200,
    backgroundColor: "skyblue",
    marginLeft: 10,
    justifyContent: 'center',//it will center vertically
    alignItems: 'center',//it will center horizontally
    borderWidth: 1,
    borderColor: 'red',
  },
  innerCon2: {
    height: 100,
    width: 200,
    backgroundColor: "skyblue",
    marginLeft: 10,
  },
  innerCon3: {
    height: 100,
    width: 200,
    backgroundColor: "skyblue",
    marginLeft: 10,
  },
  activityindicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
  },
  processBar: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 260,
  },
})
export default App;