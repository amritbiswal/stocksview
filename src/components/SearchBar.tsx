import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({
  searchValue,
  onSearch,
}: {
  searchValue: string;
  onSearch: (text: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search stocks..."
        value={searchValue}
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
  },
});

export default SearchBar;