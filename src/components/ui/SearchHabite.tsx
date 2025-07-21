import { IconsAdd } from '@/assets/icons';
import { AddGroupProps } from '@/src/constants/type';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import AddHabitModal from './AddHabitModal';

const SearchHabite = ({ title, addHeading }: AddGroupProps) => {

    const [visible, setVisible] = useState<boolean>(false)
    const [onSave, setOnSave] = useState<string>("")

    return (
        <View style={tw` flex-col gap-3  px-[4%] pt-[3%]`}>
            {/* Header Section */}
            <View style={tw``}>
                <View style={tw`flex-row items-center justify-between `}>
                    <Text style={tw`text-blackish font-montserrat-600 text-xl`}>
                        {title}
                    </Text>
                    <TouchableOpacity onPress={() => setVisible(!visible)} >
                        <SvgXml xml={IconsAdd} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Search Bar */}
            <View style={tw`p`}>
                <TextInput
                    style={tw`
                        py-3 px-4 font-montserrat-600 border-[1px] border-[rgba(165,165,165,0.5)]
                        rounded-full text-blackish
                    `}
                    placeholder="Search"
                    placeholderTextColor="#3e3e3f80"
                    returnKeyType="search"
                    clearButtonMode="while-editing"
                />
            </View>

            {/* Content Section */}
            <View style={tw`px-4`}>
                {/* Your habit list/content will go here */}

                <AddHabitModal addHeading={addHeading} visible={visible} onClose={() => setVisible(!visible)} onSave={() => setOnSave} />
            </View>
        </View>
    );
};

export default SearchHabite;