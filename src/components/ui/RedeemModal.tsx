import { IconRewards, IconsClose } from '@/assets/icons';
import { RedeemModalProps } from '@/src/constants/type';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';


const RedeemModal = ({ setViewModal, viewModal }: RedeemModalProps) => {
    return (
        <Modal visible={viewModal} transparent animationType="fade">
            <View style={tw`flex-1 items-center justify-center `}>
                <View style={tw` bg-white shadow-xl px-5 pt-5    pb-8 w-90 rounded-2xl`}>
                    {/* Header */}
                    <View style={tw`flex-row justify-between items-center mb-6`}>
                        <Text style={tw`text-xl text-blackish font-montserrat-700 `}>Reward Details</Text>
                        <TouchableOpacity onPress={() => setViewModal(!viewModal)}>
                            <SvgXml xml={IconsClose} />
                        </TouchableOpacity>
                    </View>

                    {/* Reward Icon */}
                    <View style={tw`w-24 h-24 bg-[#d9d9d9] rounded-md self-center items-center justify-center mb-6`}>
                        {/* Placeholder for spoon and fork icon - You'd typically use an SVG or image component here */}
                        <SvgXml xml={IconRewards} />
                    </View>

                    {/* Reward Title */}
                    <Text style={tw`text-base font-montserrat-700  text-center text-blackish mb-2`}>Coffee Discount</Text>

                    {/* Points Cost */}
                    <Text style={tw`text-base font-montserrat-700 text-[#1a8b03] text-center mb-6`}>50 points</Text>

                    <View style={tw` flex-col gap-4`}>
                        <View style={tw` flex-col gap-4`}>
                            {/* Description */}
                            <Text style={tw`text-base text-blackish text-center `}>
                                Get 20% off your next coffee at Brew Haven
                            </Text>

                            {/* Terms */}
                            <View style={tw` flex-row  gap-1  mr-`}>
                                <Text style={tw` font-montserrat-700 text-blackish`}>Terms :</Text  >
                                <Text style={tw` font-montserrat-600 text-blackish`}>{'Offer valid for 30 days after redemption. \n One  per customer'}.</Text>
                            </View>
                        </View>

                        {/* Redeem Button */}
                        <TouchableOpacity
                            style={tw`bg-blackish py-2 rounded-md self-stretch`}
                            onPress={() => setViewModal(!viewModal)}
                        >
                            <Text style={tw`text-white text-lg  font-montserrat-600 text-center`}>Redeem</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default RedeemModal;