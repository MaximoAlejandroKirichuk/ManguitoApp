
import { Stack } from 'expo-router'


const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#F8F4EC',
                },
                headerTitleStyle: {
                    color: '#5E4638',
                    fontSize: 22,
                    fontWeight: 'bold',

                },
                headerTintColor: '#91C788', // Color de flecha "back" o íconos
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerShown:false,
            }}
    
        >
            
           
            <Stack.Screen
                name="historyScreen/index"
                options={{
                    title: 'Historial',
                    animation: 'slide_from_left'
                }}
            />
        </Stack>
    )
}

export default StackLayout