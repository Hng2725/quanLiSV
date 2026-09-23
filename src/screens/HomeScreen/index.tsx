import React from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import Header from '../../components/Header';
import StatCard from '../../components/StatCard';
import SearchBar from '../../components/SearchBar';
import SubjectItem from '../../components/SubjectItem';
import BottomNav from '../../components/BottomNav';

const MOCK_SUBJECTS = [
  {
    id: '1',
    name: 'Lập trình React Native',
    lessons: 24,
    progress: 75,
    iconName: 'mobile1',
  },
  {
    id: '2',
    name: 'Thiết kế UI/UX',
    lessons: 18,
    progress: 100,
    iconName: 'layout',
  },
  {
    id: '3',
    name: 'Lập trình Node.js',
    lessons: 30,
    progress: 30,
    iconName: 'database',
  },
  {
    id: '4',
    name: 'Cơ sở dữ liệu',
    lessons: 15,
    progress: 50,
    iconName: 'hdd',
  },
  {
    id: '5',
    name: 'Lập trình Java',
    lessons: 40,
    progress: 10,
    iconName: 'appstore-o',
  },
  {
    id: '6',
    name: 'Quản trị dự án',
    lessons: 20,
    progress: 80,
    iconName: 'project',
  },
  {
    id: '7',
    name: 'Mạng máy tính',
    lessons: 12,
    progress: 0,
    iconName: 'wifi',
  },
];

const HomeScreen = () => {
  const renderHeader = () => (
    <View style={{ paddingBottom: 10 }}>
      <View style={styles.statsContainer}>
        <StatCard title="Môn học" value="12" icon="book" color="#3b82f6" />
        <StatCard title="Bài tập" value="5" icon="form" color="#f59e0b" />
        <StatCard title="Hoàn thành" value="8" icon="checkcircleo" color="#10b981" />
      </View>

      <SearchBar />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Danh sách môn học</Text>
        <Text style={styles.seeAll}>Xem tất cả</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <Header />
      
      <FlatList
        data={MOCK_SUBJECTS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <SubjectItem 
            name={item.name} 
            lessons={item.lessons} 
            progress={item.progress} 
            iconName={item.iconName} 
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  seeAll: { color: '#3b82f6', fontWeight: 'bold' }
});

export default HomeScreen;
