import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState('');
  const [history, setHistory] = useState([]);

  const clear = () => {
    setCurrentValue('0');
    setPreviousValue('');
    setOperation('');
  };

  const appendNumber = (num) => {
    if (currentValue === '0') {
      setCurrentValue(num);
    } else {
      setCurrentValue(currentValue + num);
    }
  };

  const applyOperation = (op) => {
    if (currentValue !== '') {
      setPreviousValue(currentValue);
      setCurrentValue('0');
      setOperation(op);
    }
  };

  const calculate = () => {
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    if (operation === '+') {
      result = prev + current;
    } else if (operation === '-') {
      result = prev - current;
    } else if (operation === '*') {
      result = prev * current;
    } else if (operation === '/') {
      result = prev / current;
    }
    setCurrentValue(result.toString());
    setPreviousValue('');
    setOperation('');
    // Add calculation to history
    setHistory([...history, `${previousValue} ${operation} ${currentValue} = ${result}`]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{currentValue}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => appendNumber('7')} style={styles.button}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber('8')} style={styles.button}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber('9')} style={styles.button}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => applyOperation('+')} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => appendNumber('4')} style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber('5')} style={styles.button}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber('6')} style={styles.button}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => applyOperation('-')} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => appendNumber('1')} style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber('2')} style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => appendNumber('3')} style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => applyOperation('*')} style={styles.button}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => appendNumber('0')} style={styles.button}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clear} style={styles.button}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={calculate} style={styles.button}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => applyOperation('/')} style={styles.button}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.history}>
        <Text style={styles.historyTitle}>History</Text>
        <TouchableOpacity onPress={clearHistory} style={styles.clearHistoryButton}>
          <Text style={styles.buttonText}>Clear History</Text>
        </TouchableOpacity>
        {history.map((entry, index) => (
          <Text key={index} style={styles.historyItem}>
            {entry}
          </Text>
        ))}
      </View>
    </View>
 
