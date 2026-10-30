import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface Props {
      onRetryPress?: () => any;
};

const NoConnectioDialog = ({ onRetryPress }: Props) => {
      return (
            <View style={styles.container}>
                  <Text>NoConnectioDialog</Text>

                  <TouchableOpacity onPress={() => onRetryPress?.()}>
                        <Text>Retry again</Text>
                  </TouchableOpacity>
            </View>
      )
}

export default NoConnectioDialog

const styles = StyleSheet.create({
      container: {
            width : "100%",
            height : "100%",
            padding: 16,
            backgroundColor: "red",
      }
})