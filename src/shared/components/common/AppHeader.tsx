import AppLottieView from './AppLottieView';

import { AppIcons } from '@/shared/configs';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';

interface Props {
      onBackTap?: () => void;
};


const AppHeader = ({ onBackTap }: Props) => {
      return (
            <View style={styles.container}>
                  { onBackTap ? <AppIcons.ArrowLeft /> : <AppIcons.Menu /> }

                  <ThemedText variant="title">I love you Poppins</ThemedText>

                  <AppLottieView name="rocket" style={{ width: 50, height: 50 }} />

                  <AppIcons.Bag />
            </View>
      )
}

const styles = StyleSheet.create({
      container: {
            width: "100%",
            height: 50,
            alignItems: "center",
            paddingInline: 16,
            flexDirection: "row",
            justifyContent: "space-between",
      }
})

export default AppHeader