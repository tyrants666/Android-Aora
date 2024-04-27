import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router';

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
        </Stack>
    )

    // ================= Slot Example  ==================
    // return (
    //     <>
    //         <Text>Header</Text>
    //         <Slot />
    //         <Text>Footer</Text>
    //     </>
    // )
}

export default RootLayout
