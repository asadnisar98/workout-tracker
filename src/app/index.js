import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, Text, View, FlatList, SafeAreaView } from 'react-native';
import excerises from '../../assets/data/exercises.json';
import ExceriseListItem from '../../src/components/ExcerciseListItem';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={excerises}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <ExceriseListItem item={item} />}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    padding: 10,
    gap: 5,
    paddingTop: Platform.OS === 'ios' ? 0 :10,
  }
});
