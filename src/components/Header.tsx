import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.avatar}>
            <Icon name="user" size={30} color="#3b82f6" />
          </View>
          <View>
            <Text style={{fontSize: 14, color: 'gray'}}>Chào buổi sáng 👋</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Nguyễn Văn A</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="bells" size={20} color="#e6e641ff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
