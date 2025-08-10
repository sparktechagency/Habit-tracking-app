import { IconsCelebrate, IconsClose } from '@/assets/icons'
import { NewModalPropsCon } from '@/src/constants/type'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const ConModal = ({ visible, onClose, prors }: NewModalPropsCon) => {

    console.log(prors);


    return (
        <Modal transparent visible={visible} animationType="slide">

            {
                prors === 'ativeChallange' ?
                    <View style={tw`flex-1 shadow-md justify-center items-center`}>
                        <View style={tw`bg-white  shadow-2xl  rounded-lg p-6 w-80`}>
                            {/* Header */}
                            <View >
                                <Pressable style={tw` mb-4  flex-row  items-end justify-end`} onPress={onClose}>
                                    <SvgXml xml={IconsClose} />
                                </Pressable>
                            </View>
                            <View style={tw` flex-col gap-4 justify-center items-center`}>

                                <Image source={require('@/assets/images/user-1.png')} style={tw`w-32 h-32 rounded-full`} />
                                <Text style={tw`text-blackish text-base  font-montserrat-700`}>AB James</Text>
                            </View>
                        </View>
                    </View>
                    :
                    <View style={tw`flex-1 justify-center items-center  `}>
                        <View style={tw`bg-white shadow-2xl rounded-lg  p-6 w-80`}>

                            {/* Header */}
                            <View style={tw`flex-row items-start justify-between`}>

                                {/* Profile */}
                                <View style={tw`flex-row gap-4 items-center`}>
                                    <Image
                                        source={require('@/assets/images/user-1.png')}
                                        style={tw`w-14 h-14 rounded-full`}
                                    />
                                    <View>
                                        <Text style={tw`text-blackish text-base font-montserrat-700`}>
                                            AB James
                                        </Text>
                                        <Text style={tw`text-blackish text-sm font-montserrat-500`}>
                                            2 hours ago
                                        </Text>
                                    </View>
                                </View>

                                {/* Close Button */}
                                <Pressable
                                    style={tw`p-1`}
                                    onPress={onClose}
                                >
                                    <SvgXml xml={IconsClose} />
                                </Pressable>
                            </View>

                            {/* Content */}
                            <View style={tw`mt-8 px-4 py-2`}>
                                <Text style={tw`text-blackish text-base font-montserrat-500`}>
                                    Completed 30-Day Fitness Challenge
                                </Text>

                                {/* Celebrate Button */}
                                <TouchableOpacity
                                    style={tw`mt-4 border-2 border-blackish flex-row items-center gap-2 px-4 py-2 rounded-lg self-start`}
                                    onPress={onClose}
                                >
                                    <SvgXml xml={IconsCelebrate} height={25} width={25} />
                                    <Text style={tw`text-blackText font-montserrat-400 text-sm`}>
                                        CELEBRATE
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

            }



        </Modal>
    )
}

export default ConModal
