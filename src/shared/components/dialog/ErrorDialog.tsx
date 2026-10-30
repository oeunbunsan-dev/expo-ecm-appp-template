import { useDialog } from '@/shared/contexts/DialogContext';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ErrorDialogProps {
  message?: string;
}

const ErrorDialog = ({ message = 'Something went wrong' }: ErrorDialogProps) => {
  const { closeDialog } = useDialog();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Error</Text>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={styles.button} onPress={closeDialog}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff4d4d',
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ErrorDialog;
