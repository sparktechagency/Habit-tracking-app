import { IconsClose } from '@/assets/icons'
import { NewModalProps } from '@/src/constants/type'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const NewAddedModal = ({ visible, onClose }: NewModalProps) => {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={tw`flex-1  justify-center items-center`}>
                <View style={tw`bg-white shadow-2xl rounded-lg p-6 w-80`}>
                    {/* Header */}
                    <View style={tw`flex-row justify-between items-center mb-4`}>
                        <Text style={tw`text-xl  font-montserrat-700`}>Create New Habit</Text>
                        <Pressable onPress={onClose}>
                            <SvgXml xml={IconsClose} />
                        </Pressable>
                    </View>


                    {/* Form fields */}
                    <View style={tw`mb-4`}>
                        <View style={tw`mt-4`}>
                            {/* <Text style={tw`text-blackish mb-2 font-semibold`}>Select a Date</Text> */}

                            <Pressable onPress={onClose}>
                                <TextInput
                                    style={tw`border-[1px] border-blackish rounded px-3 py-2 `}
                                    placeholder="Enter habit name"
                                    editable={false} // prevent manual typing
                                    pointerEvents="none"
                                    placeholderTextColor={'#000'}
                                />
                            </Pressable>

                        </View>
                    </View>



                    {/* Save button */}
                    <TouchableOpacity
                        style={tw`bg-blackish px-4 py-2 rounded self-end`}
                        onPress={() =>
                            // onSave({ habitName, description, goal, duration, participants })
                            onClose()
                        }
                    >
                        <Text style={tw`text-white  font-montserrat-400 text-sm`}>Save Entry</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default NewAddedModal