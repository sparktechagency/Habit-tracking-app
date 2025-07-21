import { IconsLeftArrowBlack } from '@/assets/icons';
import KeyboardAvoidingComponent from '@/src/components/KeyboardAvoidingComponent';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Link, router } from 'expo-router';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Yup from 'yup';

// Validation Schema
const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .required('Email or phone is required')
        .test('is-email-or-phone', 'Must be a valid email or phone number', (value) => {
            if (!value) return false;
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^[0-9]+$/.test(value);
        }),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
        .required('Please confirm your password')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export default function RegisterScreen() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async (values: { name: string; email: string; password: string; confirmPassword: string }) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            Alert.alert('Success', 'Registered successfully!');
        } catch (error) {
            Alert.alert('Error', 'Registration failed. Please try again.');
        }
    };

    return (
        <View style={tw`flex-1 relative bg-blackish`}>
            <Wrapper>
                <KeyboardAvoidingComponent>
                    <View style={tw`flex-1 bg-blackish justify-center items-center`}>
                        {/* Back Button */}
                        <View style={tw`absolute top-14 left-0`}>
                            <TouchableOpacity onPress={() => router.back()}>
                                <SvgXml xml={IconsLeftArrowBlack} />
                            </TouchableOpacity>
                        </View>

                        <View style={tw`w-full`}>
                            {/* Header */}
                            <View style={tw`flex-row items-center justify-center mb-8`}>
                                <Text style={tw`text-yellowGreen text-[25px] font-montserrat-600`}>
                                    Create Account
                                </Text>
                            </View>

                            <Formik
                                initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                                validationSchema={RegisterSchema}
                                onSubmit={handleRegister}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                                    <View>
                                        {/* Name */}
                                        <View style={tw`mb-6`}>
                                            <Text style={tw`text-yellowGreen text-sm font-montserrat-600 mb-2`}>
                                                Name
                                            </Text>
                                            <View style={tw`border border-gray rounded-[18px] opacity-90`}>
                                                <TextInput
                                                    placeholder="Enter your name"
                                                    placeholderTextColor={'#d6df22'}
                                                    style={tw`px-4 py-4 text-yellowGreen text-xs font-montserrat-600`}
                                                    onChangeText={handleChange('name')}
                                                    onBlur={handleBlur('name')}
                                                    value={values.name}
                                                />
                                            </View>
                                            {touched.name && errors.name && (
                                                <Text style={tw`text-red-500 text-xs mt-1`}>{errors.name}</Text>
                                            )}
                                        </View>

                                        {/* Email/Phone */}
                                        <View style={tw`mb-6`}>
                                            <Text style={tw`text-yellowGreen text-sm font-montserrat-600 mb-2`}>
                                                Email or Phone
                                            </Text>
                                            <View style={tw`border border-gray rounded-[18px] opacity-90`}>
                                                <TextInput
                                                    placeholder="Enter your email or phone"
                                                    placeholderTextColor={'#d6df22'}
                                                    style={tw`px-4 py-4 text-yellowGreen text-xs font-montserrat-600`}
                                                    onChangeText={handleChange('email')}
                                                    onBlur={handleBlur('email')}
                                                    value={values.email}
                                                    keyboardType="email-address"
                                                    autoCapitalize="none"
                                                />
                                            </View>
                                            {touched.email && errors.email && (
                                                <Text style={tw`text-red-500 text-xs mt-1`}>{errors.email}</Text>
                                            )}
                                        </View>

                                        {/* Password */}
                                        <View style={tw`mb-6`}>
                                            <Text style={tw`text-yellowGreen text-sm font-montserrat-600 mb-2`}>
                                                Password
                                            </Text>
                                            <View style={tw`border border-gray rounded-[18px] opacity-90 flex-row items-center`}>
                                                <TextInput
                                                    placeholder="Enter password"
                                                    placeholderTextColor="#d6df22"
                                                    style={tw`flex-1 px-4 py-4 text-yellowGreen text-xs font-montserrat-600`}
                                                    onChangeText={handleChange('password')}
                                                    onBlur={handleBlur('password')}
                                                    value={values.password}
                                                    secureTextEntry={!showPassword}
                                                />
                                                <TouchableOpacity
                                                    style={tw`px-4`}
                                                    onPress={() => setShowPassword(!showPassword)}
                                                >
                                                    <Text style={tw`text-yellowGreen text-xs font-montserrat-600`}>
                                                        {showPassword ? 'Hide' : 'Show'}
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                            {touched.password && errors.password && (
                                                <Text style={tw`text-red-500 text-xs mt-1`}>{errors.password}</Text>
                                            )}
                                        </View>

                                        {/* Confirm Password */}
                                        <View style={tw`mb-8`}>
                                            <Text style={tw`text-yellowGreen text-sm font-montserrat-600 mb-2`}>
                                                Confirm Password
                                            </Text>
                                            <View style={tw`border border-gray rounded-[18px] opacity-90 flex-row items-center`}>
                                                <TextInput
                                                    placeholder="Confirm password"
                                                    placeholderTextColor="#d6df22"
                                                    style={tw`flex-1 px-4 py-4 text-yellowGreen text-xs font-montserrat-600`}
                                                    onChangeText={handleChange('confirmPassword')}
                                                    onBlur={handleBlur('confirmPassword')}
                                                    value={values.confirmPassword}
                                                    secureTextEntry={!showConfirmPassword}
                                                />
                                                <TouchableOpacity
                                                    style={tw`px-4`}
                                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                                >
                                                    <Text style={tw`text-yellowGreen text-xs font-montserrat-600`}>
                                                        {showConfirmPassword ? 'Hide' : 'Show'}
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                            {touched.confirmPassword && errors.confirmPassword && (
                                                <Text style={tw`text-red-500 text-xs mt-1`}>{errors.confirmPassword}</Text>
                                            )}
                                        </View>

                                        {/* Submit Button */}
                                        <View style={tw`mb-8`}>
                                            <TouchableOpacity
                                                style={tw`h-12 bg-yellowGreen rounded-[18px] justify-center items-center mb-4`}
                                                onPress={() => handleSubmit()}
                                                disabled={isSubmitting}
                                            >
                                                <Text style={tw`text-[#3E3E3F] text-[16px] font-montserrat-700`}>
                                                    {isSubmitting ? 'Registering...' : 'Register'}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>

                                        {/* Already have an account */}
                                        <Text style={tw`text-yellowGreen text-base text-center font-montserrat-400`}>
                                            Already have an account?{' '}
                                            <Link href={'/(auth)/loging'} >
                                                <Text style={tw`text-yellowGreen font-montserrat-700`}>Log In</Text>
                                            </Link>
                                        </Text>
                                    </View>
                                )}
                            </Formik>
                        </View>
                    </View>
                </KeyboardAvoidingComponent>
            </Wrapper>
        </View>
    );
}
