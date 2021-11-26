import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {getUsers} from '../services/Services';
const windowWidth = Dimensions.get('window').width;

const UserDetailsScreen = ({route, navigation}) => {
  const id: any = route.params.data.userId;
  const title: any = route.params.data.title;
  const getUserDetails = async () => {
    return await getUsers(id);
  };
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserDetails().then(data => {
      console.log('data==>', data);
      setUser([data]);
    });
  }, []);
  return (
    <View style={styles.albumDetailsScreenContainer}>
      <Text style={styles.albumTitleText}>User Details</Text>
      <FlatList
        data={user}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}
        renderItem={(items: any) => {
          return (
            <View style={styles.renderItemContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.titleStyle}>
                  <Text style={styles.renderItemTitleText}>ID</Text>
                </View>
                <View style={styles.titleItemStyle}>
                  <Text style={styles.renderItemText}>{items.item?.id}</Text>
                </View>
              </View>
              <View style={styles.titleContainer}>
                <View style={styles.titleStyle}>
                  <Text style={styles.renderItemTitleText}>Title</Text>
                </View>
                <View style={styles.titleItemStyle}>
                  <Text style={styles.renderItemText}>{title}</Text>
                </View>
              </View>
              <View style={styles.titleContainer}>
                <View style={styles.titleStyle}>
                  <Text style={styles.renderItemTitleText}>User Name</Text>
                </View>
                <View style={styles.titleItemStyle}>
                  <Text style={styles.renderItemText}>
                    {items.item?.username}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => item?.id + index}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  titleItemStyle: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    flex: 1,
  },
  renderItemText: {color: 'black', left: 10, fontSize: 15},
  renderItemTitleText: {color: 'black', fontSize: 15},
  renderItemContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexGrow: 1,
    height: 200,
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
  headerTitle: 'User Details',
  headerStyle: {
    backgroundColor: '#2080B5',
  },
  headerTintColor: 'white',
};
export default UserDetailsScreen;
