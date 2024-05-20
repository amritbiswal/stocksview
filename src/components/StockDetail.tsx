import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const StockDetail = ({ route }) => {
  const { stock } = route.params;

  return (
    <View style={styles.container}>
      <Header title="Stock Detail" />
      <Text style={styles.name}>{stock.title}</Text>
      <Text style={styles.price}>Price: ${stock.price}</Text>
      <Text style={styles.rating}>Rating: {stock.rating}</Text>
      <Text style={styles.description}>{stock.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default StockDetail;