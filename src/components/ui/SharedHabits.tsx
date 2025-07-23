import tw from "@/src/lib/tailwind";
import { Alert, Share, Text, TouchableOpacity, View } from "react-native";

const SharedHabits = () => {
    const onShare = async () => {
        try {
            await Share.share({
                message: "https://reactnative.dev/docs/touchableopacity",
            });
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };
    return (
        <View style={tw`flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md`}>
            <TouchableOpacity onPress={onShare} style={tw``}>
                <Text style={tw`text-base font-montserrat-600`} >Shared</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SharedHabits;