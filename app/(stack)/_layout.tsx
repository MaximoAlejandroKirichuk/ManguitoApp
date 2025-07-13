
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack>
        <Stack.Screen 
            name = "home/index"
            options={{
                title: 'Inicio'
            }}
        />
        <Stack.Screen 
            name = "profile/index"
            options={{
                title: 'Perfil'
            }}
        />
        <Stack.Screen 
            name = "historyScreen/index"
            options={{
                title: 'Historial',
                animation: 'slide_from_left'
            }}
        />
    </Stack>
  )
}

export default StackLayout