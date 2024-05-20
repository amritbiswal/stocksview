import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { fetchStocks } from '../services/stockService';
import Header from './Header';
import Stock from './Stock';
import SearchBar from './SearchBar';

interface Stock {
    id: number;
    title: string;
    price: number;
    description: string;
}

const StockList: React.FC = () => {

    const [stocks, setStocks] = useState([]);
    const [searchStock, setSearchStock] = useState('');

    useEffect(() => {
        fetchStocks().then(setStocks);
    }, []);

    const filteredStocks = stocks.filter(stock =>
        stock.title.toLowerCase().includes(searchStock.toLowerCase())
      );

    const handleSearch = (text: string) => {
        setSearchStock(text);
    };

    return (
        <View style={styles.container}>
            <Header title="Stock List" />
            <SearchBar searchValue={searchStock} onSearch={handleSearch} />
            <FlatList
                data={filteredStocks}
                renderItem={({ item }) => (
                    <Stock item={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 10,
    },
});

export default StockList;