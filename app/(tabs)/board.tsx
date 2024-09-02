import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

interface BoardProps {
  squares: string[];
  onPress: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onPress }) => {
  return (
    <View style={styles.board}>
      {squares.map((square, index) => (
        <Pressable key={index} style={styles.square} onPress={() => onPress(index)}>
          <Text style={styles.text}>{square}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default Board;
