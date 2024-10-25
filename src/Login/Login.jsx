import React from 'react'
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'

const Login = () => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <SafeAreaView className='flex-1 m-3'>
            <View className='flex-1 items-center justify-center border border-red-500'>
                <Text className='bg-black'>Hello From logins</Text>
                <Text>Centered in Screen</Text>
            </View>
        </SafeAreaView>
    )
}
export default Login
