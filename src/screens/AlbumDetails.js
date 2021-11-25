import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {getAlbum} from '../services/Services';
const windowWidth = Dimensions.get('window').width;

const AlbumDetailsScreen = ({navigation}: any) => {
  const getAlbumDetails = async () => {
    return await getAlbum();
  };
  const [album, setAlbum] = useState([]);
  useEffect(() => {
    getAlbumDetails().then((data: any) => {
      setAlbum(data);
    });
  }, []);
  return (
    <View style={styles.albumDetailsScreenContainer}>
      <Text style={styles.albumTitleText}>Album Title</Text>
      <FlatList
        data={album}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}
        renderItem={(items: any) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UserDetailsScreen', {
                  data: items.item,
                });
              }}
              style={styles.renderItemContainer}>
              <Text style={styles.renderItemText}>{items.item?.title}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => item?.id + index}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  renderItemText: {color: 'black', left: 10, fontSize: 15},
  renderItemContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 50,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 3,
    marginVertical: 5,
    width: windowWidth - 60,
    paddingHorizontal: 10,
  },
  albumTitleText: {
    color: '#0068A2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  albumDetailsScreenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
export const screenOptions: StackNavigationOptions = {
  headerTitle: 'Albums',
  headerStyle: {
    backgroundColor: '#2080B5',
  },
  headerTintColor: 'white',
};
export default AlbumDetailsScreen;
