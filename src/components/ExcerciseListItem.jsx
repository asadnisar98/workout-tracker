
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
    },
    exceriseName: {
        fontSize: 20,
        fontWeight: '500'
    },
    exceriseSubtitle: {
        color: 'dimgray',
    }
});
