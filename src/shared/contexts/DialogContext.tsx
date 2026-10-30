import { createContext, ReactNode, useContext, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';

interface DialogContextType {
  openDialog: (content: ReactNode) => void;
  closeDialog: () => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [dialogContent, setDialogContent] = useState<ReactNode>(null);

  const openDialog = (content: ReactNode) => {
    setDialogContent(content);
    setVisible(true);
  };

  const closeDialog = () => {
    setVisible(false);
    setDialogContent(null);
  };

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      <Modal transparent visible={visible} animationType="fade">
        <View style={styles.overlay}>
          {dialogContent}
        </View>
      </Modal>
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) throw new Error('useDialog must be used within a DialogProvider');
  return context;
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
