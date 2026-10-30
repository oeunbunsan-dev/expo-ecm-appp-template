import { createContext, ReactNode, useContext, useState } from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

// 1. Define the interface
interface LoadingContextType {
  startLoading: () => void;
  dismissLoading: () => void;
}

// 2. Create a context
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// 3. Create a export provider
export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);
  const dismissLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ startLoading, dismissLoading }}>
      {children}
      <Modal transparent visible={isLoading} animationType="none">
        <View style={styles.overlay}>
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        </View>
      </Modal>
    </LoadingContext.Provider>
  );
};

// 4. Create a custome hook
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) throw new Error('useLoading must be used within a LoadingProvider');
  return context;
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
  },
});
