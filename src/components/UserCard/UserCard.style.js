import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderTopLeftRadius: 55,
    borderBottomLeftRadius: 55,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  username: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  product_container: {
    flexDirection: 'row',
  },
  product_image: {
    marginTop: 10,
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  price_container: {
    flex: 1,
    alignItems: 'flex-end',
    color: 'green',
  },
  price_text: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
  },
  description_text: {
    fontSize: 15,
  },
});
