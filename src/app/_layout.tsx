import { DialogProvider } from "@/shared/contexts/DialogContext";
import { LoadingProvider } from "@/shared/contexts/LoadingContext";
import { Stack } from "expo-router";

const App = () => {
    return (
        <Stack screenOptions={{
            headerShown: false,
            contentStyle: {
                // backgroundColor: "black"
            }
        }}>
        </Stack>
    )
};



export default function RootLayout() {
    return <>
        <DialogProvider>
            <LoadingProvider>
                <App />
            </LoadingProvider>
        </DialogProvider>
    </>
}
