import { IconsLeftArrowBlack } from '@/assets/icons';
import KeyboardAvoidingComponent from '@/src/components/KeyboardAvoidingComponent';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { OtpInput } from "react-native-otp-entry";
import { SvgXml } from 'react-native-svg';

export default function VerificationScreen() {
    const [otpVerify, setOtpVerify] = useState<string>("");

    const handleNavigate = (): void => {
        if (otpVerify.length === 6) {
            // Proceed to next screen or verify OTP
            //   router.push("/auth/reset-password");
        } else {
            Alert.alert("OTP Error", "Please enter a valid 6-digit OTP code.");
        }
    };
    return (
        <View style={tw`flex-1 relative  bg-blackish `}>

            <KeyboardAvoidingComponent>

                <Wrapper>
                    {/* ----------------- back botton------------------------- */}

                    {/* <BackButton /> */}
                    <View style={tw`flex-1 bg-blackish justify-center items-center `}>
                        <View style={tw` absolute  top-14 left-0 `}>
                            <TouchableOpacity style={tw` `} onPress={() => router.back()} >
                                <SvgXml xml={IconsLeftArrowBlack} />
                            </TouchableOpacity>
                        </View>
                        <View style={tw`w-full  `}>
                            {/* Header */}
                            {/* ----------- heading-------------------------- */}

                            <View style={tw`flex-col gap-2 items-center justify-center pb-16`}>
                                <Text style={tw` text-yellowGreen text-2xl font-montserrat-600`}>
                                    Verification Code
                                </Text>
                                <Text style={tw` text-center text-yellowGreen text-sm font-montserrat-600`}>
                                    We sent a reset link to contact@dscode.com
                                    enter 6 digit code that is mentioned in the email
                                </Text>
                            </View>
                            {/* ------------------ otp-------------------- */}
                            <View style={tw`flex flex-col gap-5`}>
                                {/* Email/Phone Input */}

                                <View style={tw`flex flex-col gap-2 justify-end items-end`}>
                                    <OtpInput
                                        focusColor="#D6DF22"
                                        placeholder="000000"

                                        autoFocus={false}
                                        numberOfDigits={6}
                                        type="numeric"
                                        onFilled={(text: string) => setOtpVerify(text)}
                                        textInputProps={{
                                            accessibilityLabel: "One-Time Password",
                                        }}
                                        textProps={{
                                            accessibilityRole: "text",
                                            accessibilityLabel: "OTP digit",
                                            allowFontScaling: false,

                                        }}
                                        theme={{
                                            pinCodeTextStyle: {
                                                color: '#D6DF22',
                                                fontSize: 20,
                                            },
                                            pinCodeContainerStyle: {
                                                borderColor: '#D6DF22',
                                                borderWidth: 1,
                                                borderRadius: 8,
                                            }

                                        }}
                                    />
                                    {/* -------------- resend ----------- */}
                                    <TouchableOpacity
                                        style={tw`items-end`}
                                    // onPress={() => router.push('/(auth)/verify-email')}
                                    >
                                        <Text style={tw` text-yellowGreen text-lg  font-montserrat-700`}>
                                            Resend
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                {/* ----------------- button--------------- */}
                                {/* Footer */}
                                <View style={tw``}>
                                    <TouchableOpacity
                                        style={tw`h-12 bg-yellowGreen rounded-[18px] justify-center items-center mb-4`}
                                        onPress={() => router?.push('/(auth)/created-new-password')}
                                    // disabled={isSubmitting}
                                    >
                                        <Text style={tw`text-[#3E3E3F] text-[16px]  font-montserrat-700`}>
                                            {/* {isSubmitting ? 'Submiting in...' : 'Submit'} */}
                                            Verify Code
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Wrapper>
            </KeyboardAvoidingComponent>
        </View>
    )
}