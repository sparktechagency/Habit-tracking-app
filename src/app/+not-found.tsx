import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "../lib/tailwind";

export default function NotFoundScreen() {
    const router = useRouter();

    return (
        <View style={tw`flex-1 items-center justify-center bg-white px-6`}>
            <Ionicons name="alert-circle-outline" size={64} color="#888" />
            <Text style={tw`text-2xl font-bold text-gray-800 mt-4`}>Page Not Found</Text>
            <Text style={tw`text-base text-gray-600 mt-2 text-center`}>
                The page you're looking for doesn't exist or has been moved.
            </Text>

            <TouchableOpacity
                onPress={() => router.replace("/")}
                style={tw`mt-6 bg-blue-500 px-6 py-3 rounded-xl`}
            >
                <Text style={tw`text-white font-semibold`}>Go Home</Text>
            </TouchableOpacity>
        </View>
    );
}
