import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SubjectItem = ({ name, lessons, progress, iconName }: any) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.5}>
      <Icon name={iconName} size={30} color="#3b82f6" style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={{ color: 'gray' }}>{lessons} bài học</Text>
      </View>
      <View>
        <Text style={styles.progressText}>{progress}%</Text>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  icon: { marginRight: 15 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  progressText: { fontSize: 14, fontWeight: 'bold', color: '#3b82f6', textAlign: 'right', marginBottom: 5 },
  progressBg: { width: 50, height: 6, backgroundColor: '#ddd', borderRadius: 3 },
  progressFill: { height: 6, backgroundColor: '#3b82f6', borderRadius: 3 }
});

export default SubjectItem;
