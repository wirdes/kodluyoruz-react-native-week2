import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {UserCard} from '~/components';
import {SearchBar} from 'react-native-elements';

const Shopping = () => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState();
  async function fetchData() {
    const {data} = await axios.get('https://fakestoreapi.com/products');
    setProductList(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const renderitem = ({item}) => {
    return (
      <UserCard
        title={item.title}
        description={item.description}
        image={item.image}
        price={item.price}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        round
        placeholder="Arama"
        onChangeText={setSearch}
        value={search}
        lightTheme="true"
      />
      <FlatList data={productList} renderItem={renderitem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {fontSize: 20, color: 'rgb(250,160,38)'},
});
export {Shopping};
