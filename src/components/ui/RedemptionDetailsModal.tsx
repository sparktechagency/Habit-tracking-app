import { IconsClose } from '@/assets/icons'
import { RedeemModalProps } from '@/src/constants/type'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const RedemptionDetailsModal = ({ setViewModal, viewModal }: RedeemModalProps) => {
    return (
        <Modal visible={viewModal} transparent animationType="fade">
            <View style={tw`flex-1 items-center justify-center `}>
                <View style={tw` bg-white shadow-xl px-5 pt-5    pb-8 w-90 rounded-xl`}>
                    {/* Header */}
                    <View style={tw`flex-row justify-between items-center mb-6`}>
                        <Text style={tw`text-xl text-blackish font-montserrat-700 `}>Reward Details</Text>
                        <TouchableOpacity onPress={() => setViewModal(!viewModal)}>
                            <SvgXml xml={IconsClose} />
                        </TouchableOpacity>
                    </View>

                    <View style={tw` flex-col gap-4`}>
                        <View style={tw` flex-col gap-1`}>
                            {/* Description */}


                            {/* Terms */}
                            <View style={tw` flex-row  gap-1`}>
                                <Text style={tw` font-montserrat-700 text-blackish`}>Rewards :</Text  >
                                <Text style={tw` font-montserrat-600 text-blackish`}>Free Coffee with Purchase</Text>
                            </View>
                            {/* Terms */}
                            <View style={tw` flex-row  gap-1`}>
                                <Text style={tw` font-montserrat-700 text-blackish`}>Customer :</Text  >
                                <Text style={tw` font-montserrat-600 text-blackish`}>John Doe</Text>
                            </View>
                            {/* Terms */}
                            <View style={tw` flex-row  gap-1`}>
                                <Text style={tw` font-montserrat-700 text-blackish`}>Date :</Text  >
                                <Text style={tw` font-montserrat-600 text-blackish`}>0/15/2025</Text>
                            </View>

                            {/* Terms */}
                            <View style={tw` flex-row  gap-1`}>
                                <Text style={tw` font-montserrat-700 text-blackish`}>Status :</Text  >
                                <Text style={tw` font-montserrat-600 text-blackish`}></Text>
                            </View>
                        </View>

                        {/* Redeem Button */}
                        <TouchableOpacity
                            style={tw`bg-blackish py-2 rounded-md self-stretch`}
                            onPress={() => setViewModal(!viewModal)}
                        >
                            <Text style={tw`text-white text-lg  font-montserrat-600 text-center`}>Mark as Redeemed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default RedemptionDetailsModal