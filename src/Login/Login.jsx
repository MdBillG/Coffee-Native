import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Home');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-slate-500"
        >
            <ScrollView
                contentContainerClassName="flex-grow"
                keyboardShouldPersistTaps="handled"
            >
                <View className="flex-1 bg-[#FFF9E8] px-6 justify-center">
                    <View className="bg-[#FFFFFF] rounded-xl p-6 pb-0 w-full ">
                        <Text className="text-2xl font-bold text-center mb-1 text-[#D37207]">
                            Welcome
                        </Text>
                        <Image
                            source={require('../public/images/image5.jpg')}
                            className="w-full h-[36%] object-contain rounded-md my-4"
                        />
                        <View className="mb-4">
                            <Text className="text-[Black]  mb-2 font-medium">
                                Name
                            </Text>
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Enter your Name..."
                                keyboardType="email-address"
                                autoCapitalize="none"
                                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-[#ece0d1] border border-gray-200 "
                            />
                        </View>
                        <View className="mb-6">
                            <Text className="text-black  mb-2 font-medium">
                                Phone Number
                            </Text>
                            <TextInput
                                value={phone}
                                onChangeText={setPhone}
                                placeholder="Enter your phone number"
                                keyboardType="phone-pad"
                                className="w-full bg-gray-100 rounded-lg px-4 py-3   border border-gray-200 text-gray-200"
                            />
                        </View>
                        <TouchableOpacity
                            onPress={handleLogin}
                            className=" py-4 rounded-lg   "
                        >
                            <Text className="text-white text-center font-bold text-lg p-2 bg-[#D37207]  border border-gray-200 rounded-lg">
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LoginForm;