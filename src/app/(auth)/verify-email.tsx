import { IconsLeftArrowBlack } from '@/assets/icons';
import KeyboardAvoidingComponent from '@/src/components/KeyboardAvoidingComponent ';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Yup from 'yup';

// Validation Schema
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email or phone is required')
        .test('is-email-or-phone', 'Must be a valid email or phone number', (value) => {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return true; // email
            if (/^[0-9]+$/.test(value)) return true; // phone
            return false;
        }),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
});


export default function EmailVarificationScreen() {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (values: { email: string; password: string }) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            Alert.alert('Success', 'Logged in successfully!');
        } catch (error) {
            Alert.alert('Error', 'Login failed. Please try again.');
        }
    };
    return (
        <View style={tw`flex-1 relative bg-blackish `}>

            <KeyboardAvoidingComponent>
                <Wrapper>
                    <View style={tw`flex-1 bg-blackish justify-center items-center `}>
                        {/* -------------- back button---------------------- */}
                        <View style={tw` absolute  top-14 left-0 `}>
                            <TouchableOpacity style={tw` `} onPress={() => router.back()} >
                                <SvgXml xml={IconsLeftArrowBlack} />
                            </TouchableOpacity>
                        </View>
                        {/* ------------------- heading------------------------- */}
                        <View style={tw`w-full  `}>
                            {/* Header */}
                            <View style={tw`flex-row items-center justify-center mb-8`}>
                                <Text style={tw` text-yellowGreen text-[25px] font-montserrat-600`}>
                                    Reset Your Password
                                </Text>
                            </View>
                            {/* ---------------- form------------------------------ */}
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validationSchema={LoginSchema}
                                onSubmit={handleLogin}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                                    <View>
                                        {/* Email/Phone Input */}
                                        <View style={tw`mb-6`}>
                                            <Text style={tw` text-yellowGreen  text-sm font-montserrat-600 mb-2`}>
                                                Email
                                            </Text>
                                            <View style={tw`border border-gray rounded-[18px]`}>
                                                <TextInput
                                                    placeholder="Enter your email"
                                                    placeholderTextColor={'#d6df22'}
                                                    style={tw`px-4 py-4  text-yellowGreen  text-xs font-montserrat-600`}
                                                    onChangeText={handleChange('email')}
                                                    onBlur={handleBlur('email')}
                                                    value={values.email}
                                                    keyboardType="email-address"
                                                    autoCapitalize="none"
                                                />
                                            </View>
                                            <TouchableOpacity
                                                style={tw`items-end`}
                                            // onPress={() => router.push('/(auth)/verify-email')}
                                            >
                                                <Text style={tw` text-yellowGreen text-[16px]  font-montserrat-700`}>
                                                    Resend
                                                </Text>
                                            </TouchableOpacity>
                                            {touched.email && errors.email && (
                                                <Text style={tw`text-red-500 text-xs mt-1`}>{errors.email}</Text>
                                            )}

                                        </View>


                                        {/* --------------------- submit button -------------------------- */}
                                        {/* Footer */}
                                        <View style={tw`mb-8`}>
                                            <TouchableOpacity
                                                style={tw`h-12 bg-yellowGreen rounded-[18px] justify-center items-center mb-4`}
                                                onPress={() => router?.push('/(auth)/verification-opt')}
                                                disabled={isSubmitting}
                                            >
                                                <Text style={tw`text-[#3E3E3F] text-[16px]  font-montserrat-700`}>
                                                    {isSubmitting ? 'Submiting in...' : 'Submit'}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            </Formik>
                        </View>
                    </View>
                </Wrapper>
            </KeyboardAvoidingComponent>
        </View>
    )
}