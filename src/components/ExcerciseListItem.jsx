
import { StyleSheet, Text, View } from 'react-native';


export default function ExceriseListItem({ item }) {
  return (
    <View key={item.name} style={styles.exceriseContainer}>
      <Text style={styles.exceriseName}>{item.name}</Text>
      <Text style={styles.exceriseSubtitle}>{item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
  