import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

const ProgressBar = ({ progress = 60 }) => {
    return (
        <View style={tw`h-2.5 w-full bg-gray-100 rounded-full overflow-hidden`}>
            <View
                style={[
                    tw`h-full bg-[#d6df22] rounded-full`,
                    { width: `${progress}%` }
                ]}
            />
        </View>
    );
};

export default ProgressBar;