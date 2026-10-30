import { BottomSheetRefProps } from '@/shared/components/common/BottomSheet';
import NoConnectionDialog from '@/shared/components/common/dialog/NoConnectioDialog';

import DiscoveryFeedView from '@/features/discovery-feed/view/DiscoveryFeedView';
import { useDialog } from '@/shared/contexts/DialogContext';
import { useRouter } from 'expo-router';
import { useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';


const HomeView = () => {
  const router = useRouter();
  const { openDialog } = useDialog();

  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);


  const handleOpenDialog = () => {
    openDialog(<NoConnectionDialog />)
  };


  return <>
    <DiscoveryFeedView />
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'red',
    opacity: 0.6,
  },
});

export default HomeView