import KeyboardAvoidingComponent from '@/src/components/KeyboardAvoidingComponent ';
import BackButton from '@/src/components/ui/BackButton';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

// Validation Schema
const PasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
        .required('Please confirm your password')
        .oneOf([Yup.ref('password')], 'Passwords must match')
});

export default function CreatedNewPasswordScreen() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (values: { password: string; confirmPassword: string }) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            Alert.alert('Success', 'Password changed successfully!');
            // router.push('/(auth)/login'); // Navigate to login after success
        } catch (error) {
            Alert.alert('Error', 'Password change failed. Please try again.');
        }
    };

    return (
        <View style={tw`flex-1 bg-blackish`}>
            <KeyboardAvoidingComponent>
                <Wrapper>
                    {/* ------------ back button ------------------------- */}
                    <BackButton />

                    {/* -----------------header--------------- */}
                    <View style={tw`flex-1  flex-col gap-10 justify-center`}>
                        {/* Header */}
                        <View style={tw``}>
                            <Text style={tw`text-yellowGreen text-2xl font-montserrat-600 text-center`}>
                                Create New Password
                            </Text>
                        </View>
                        {/* ----------------- form --------------------------- */}
                        <Formik
                            initialValues={{ password: '', confirmPassword: '' }}
                            validationSchema={PasswordSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                                <View>
                                    {/* New Password Input */}
                                    <View style={tw`mb-6`}>
                                        <Text style={tw`text-yellowGreen text-sm font-montserrat-600 mb-2`}>
                                            New Password
                                        </Text>
                                        <View style={tw`border border-gray rounded-[18px] opacity-90 flex-row items-center`}>
                                            <TextInput
                                                placeholder="Enter new password"
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

                                    {/* Confirm Password Input */}
                                    <View style={tw`mb-8`}>
                                        <Text style={tw`text-yellowGreen text-sm font-montserrat-600 mb-2`}>
                                            Confirm Password
                                        </Text>
                                        <View style={tw`border border-gray rounded-[18px] opacity-90 flex-row items-center`}>
                                            <TextInput
                                                placeholder="Confirm new password"
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

                                    {/*------------------ Submit Button ---------------------- */}
                                    <TouchableOpacity
                                        style={tw`h-12 bg-yellowGreen rounded-[18px] justify-center items-center mb-4`}
                                        onPress={() => handleSubmit()}
                                        disabled={isSubmitting}
                                    >
                                        <Text style={tw`text-blackish text-[16px] font-montserrat-700`}>
                                            {isSubmitting ? 'Updating...' : 'Update Password'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                    </View>
                </Wrapper>
            </KeyboardAvoidingComponent>
        </View>
    );
}