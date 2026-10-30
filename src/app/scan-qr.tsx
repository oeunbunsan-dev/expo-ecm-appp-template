import AppScanner from '@/shared/components/common/AppScanner';

const ScanQr = () => {
      const handleScanSuccess = async (successResult : any) => {
      };

      const handleScanError = async (errorResult : any) => {
      };

      return <>
            <AppScanner 
                  onScanSuccess={handleScanSuccess}
                  onScanError={handleScanError}
            />
      </>
}

export default ScanQr