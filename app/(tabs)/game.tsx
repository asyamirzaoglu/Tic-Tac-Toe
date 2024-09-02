import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Board from './board';

const Game = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handlePress = (index: number) => {
    const newSquares = squares.slice();
    if (newSquares[index] || calculateWinner(newSquares)) return;
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(''));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);

  return (
    <View style={styles.container}>
      <Board squares={squares} onPress={handlePress} />
      {winner && <Text style={styles.winnerText}>{winner} Wins!</Text>}
      {!winner && squares.every(square => square) && <Text style={styles.winnerText}>It's a Draw!</Text>}
      <Pressable style={styles.restartButton} onPress={handleRestart}>
        <Text style={styles.restartButtonText}>Restart Game</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  winnerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  restartButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const lines = [
  [0, 1, 2], // İlk satır
  [3, 4, 5], // İkinci satır
  [6, 7, 8], // Üçüncü satır
  [0, 3, 6], // İlk sütun
  [1, 4, 7], // İkinci sütun
  [2, 5, 8], // Üçüncü sütun
  [0, 4, 8], // Ana köşegen
  [2, 4, 6], // Diagonal köşegen
];

const calculateWinner = (squares: string[]): string | null => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Kazanan 'X' veya 'O'
    }
  }
  return null; // Kazanan yoksa
};

export default Game;
