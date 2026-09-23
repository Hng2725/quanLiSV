import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const BottomNav = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#3b82f6" />
          <Text style={[styles.text, { color: '#3b82f6' }]}>Trang chủ</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Icon name="book" size={24} color="gray" />
          <Text style={styles.text}>Môn học</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Icon name="form" size={24} color="gray" />
          <Text style={styles.text}>Bài tập</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user" size={24} color="gray" />
          <Text style={styles.text}>Cá nhân</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: { alignItems: 'center' },
  text: { fontSize: 12, color: 'gray', marginTop: 5 }
});

export default BottomNav;
