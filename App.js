import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import excerises from './assets/data/exercises.json';

export default function App() {

  // const excerise = excerises[0];

  return (
    <View style={styles.container}>


      {excerises.map(excerise => (
        <View key={excerise.name} style={styles.exceriseContainer}>
        <Text style={styles.exceriseName}>{excerise.name}</Text>
        <Text style={styles.exceriseSubtitle}>{excerise.muscle.toUpperCase()} | {excerise.equipment.toUpperCase()}</Text>
      </View>
      ))}
    


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
    gap: 5,
  },
  exceriseContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exceriseName: {
    fontSize: 20,
    fontWeight: '500'
  },
  exceriseSubtitle: {
    color: 'dimgray',
  }
});
