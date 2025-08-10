import { IconsClose } from '@/assets/icons'
import { NewModalProps } from '@/src/constants/type'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Image, Modal, Pressable, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const ConModal = ({ visible, onClose }: NewModalProps) => {

    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={tw`flex-1 shadow-md justify-center items-center`}>
                <View style={tw`bg-white  shadow-2xl  rounded-lg p-6 w-80`}>
                    {/* Header */}
                    <View >
                        <Pressable style={tw` mb-4  flex-row  items-end justify-end`} onPress={onClose}>
                            <SvgXml xml={IconsClose} />
                        </Pressable>
                    </View>
                    <View style={tw` flex-col gap-4 justify-center items-center`}>

                        <Image source={require('@/assets/images/user-1.png')} />
                        <Text style={tw`text-blackish text-base  font-semibold font-montserrat-700`}>AB James</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ConModal
