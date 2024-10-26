import { Coffee } from 'lucide-react-native';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryCard = ({ title, iconName, description }) => (
    <TouchableOpacity
        className="w-full h-40 bg-[#D37207] border border-gray-200 rounded-xl mb-4 "
    >
        <View className="flex-1 p-4">
            <View className="flex-row items-center justify-between">
                <Text className="text-lg font-bold text-white text-center">{title}</Text>
                <Icon name={iconName} size={24} color="#4A5568" />
            </View>
            <Text className="text-sm  mt-2 text-gray-200">{description}</Text>
        </View>
    </TouchableOpacity>
);


const HomeScreen = () => {
    const categories = [
        {
            title: 'Raw Coffee',
            description: 'Explore premium green coffee beans from finest regions.'
        },
        {
            title: 'Roasted Coffee',
            description: 'Discover our selection of freshly roasted coffee beans.'
        },

        {
            title: 'Sellers',
            description: 'Connect with trusted coffee sellers and roasters.'
        }
    ];

    return (
        <ScrollView className="flex-1 bg-[#FFF9E8]">
            <View className="px-4 py-6">
                <Text className="text-gray-600 mb-6 text-center text-xl font-mont">What would you like to explore today?</Text>
                <Text className="text-gray-600 mb-6 text-center text-xl font-mont-bold">What would you like to explore today?</Text>
                <Text className="font-mont text-gray-600 mb-4 text-center text-xl">
                    Regular - Testing Font
                </Text>

                <Text className="font-mont-black text-gray-600 mb-4 text-center text-xl">
                    Black - Testing Font
                </Text>

                <Text className="font-mont-bold text-gray-600 mb-4 text-center text-xl">
                    Bold - Testing Font
                </Text>

                <Text className="font-mont-extrabold text-gray-600 mb-4 text-center text-xl">
                    ExtraBold - Testing Font
                </Text>

                <Text className="font-mont-extralight text-gray-600 mb-4 text-center text-xl">
                    ExtraLight - Testing Font
                </Text>

                <Text className="font-mont-light text-gray-600 mb-4 text-center text-xl">
                    Light - Testing Font
                </Text>

                <Text className="font-mont-medium text-gray-600 mb-4 text-center text-xl">
                    Medium - Testing Font
                </Text>

                <Text className="font-mont-semibold text-gray-600 mb-4 text-center text-xl">
                    SemiBold - Testing Font
                </Text>

                <Text className="font-mont-thin text-gray-600 mb-4 text-center text-xl">
                    Thin - Testing Font
                </Text>
                {categories.map((category, index) => (
                    <CategoryCard
                        key={index}
                        title={category.title}

                        description={category.description}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default HomeScreen;