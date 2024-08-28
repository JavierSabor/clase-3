import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const RandomComponent = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100));

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));


  };

  return (
    <View>
      <Text  style={{marginBottom: 22}}>Random Number: {randomNumber}</Text> 
      <Button title="Generate Random Number" onPress={generateRandomNumber} />
    </View>
  );
};

export default RandomComponent;