import { View, Text } from 'react-native'
import React from 'react'
import { CustomButton } from '@/components/CustomButton'
import { Link } from 'expo-router'


const index = () => {
  return (
  <View className="flex-1 items-center justify-center bg-background ">
      <Text className="text-5xl font-bold text-primary font-Patrick-Regular">
        Welcome to Manguito App!
      </Text>

        <Link href={'/historyScreen'} asChild>
            <CustomButton className=''>History</CustomButton>
        </Link>
      
    </View>
  )
}

export default index    