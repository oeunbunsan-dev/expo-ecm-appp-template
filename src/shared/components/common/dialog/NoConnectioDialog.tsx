import { assetManager } from '@/shared/configs';
import { useDialog } from '@/shared/contexts/DialogContext';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  onRetryPress?: () => void;
}

const NoConnectionDialog = ({ onRetryPress }: Props) => {
  const { closeDialog } = useDialog();

  return (
    <View style={styles.overlay}>
      <View style={styles.card}>

        <View>
          <Image source={assetManager.images.noInternetConnection} />
        </View>

        {/* Visual indicator / Icon placeholder */}
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>⚡</Text>
        </View>

        <Text style={styles.title}>No Internet Connection</Text>

        <Text style={styles.description}>
          Make sure Wi-Fi or mobile data is turned on, then try again.
        </Text>

        <TouchableOpacity
          style={styles.retryButton}
          activeOpacity={0.8}
          onPress={closeDialog}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoConnectionDialog;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(15, 23, 42, 0.45)', // subtle backdrop dim
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    // Elevation for Android
    elevation: 8,
    // Shadow for iOS
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FEE2E2', // soft light red/rose
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 28,
  },
  retryButton: {
    width: '100%',
    backgroundColor: '#2563EB', // accessible primary blue
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});