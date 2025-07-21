import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import tw from 'twrnc';

type Props = {
    children: React.ReactNode;
};

const KeyboardAvoidingComponent = ({ children }: Props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <View style={tw`flex-1`}>
                {children}
            </View>
        </KeyboardAvoidingView>
    );
};

export default KeyboardAvoidingComponent;
