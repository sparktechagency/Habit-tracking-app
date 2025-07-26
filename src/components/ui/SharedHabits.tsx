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
        <View style={tw``}>
            <TouchableOpacity onPress={onShare} style={tw` px-2 py-1  bg-blackish  rounded-lg flex-row justify-center items-center gap-2.5`}>
                <Text style={tw`text-base text-white font-montserrat-600`} >Invite</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SharedHabits;