import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


const Stock: React.FC<{item: any}> = ({item}) => {

    // const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.itemContainer}
            // onPress={() => navigation.navigate('StockDetail', { stock: item })}
            >
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.rating}>{item.rating}</Text>
        </TouchableOpacity>        
    );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    flex: 3,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  price: {
    flex: 1,
    fontSize: 14,
    color: '#888',
    marginRight: 10,
  },
  rating: {
    flex: 1,
    fontSize: 14,
    color: '#888',
    marginRight: 10,
  },
});


export default Stock;