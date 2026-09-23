import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <View style={styles.card}>
      <Icon name={icon} size={24} color={color} style={{ marginBottom: 10 }} />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    width: '30%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  value: { fontSize: 20, fontWeight: 'bold' },
  title: { fontSize: 12, color: 'gray' }
});

export default StatCard;
