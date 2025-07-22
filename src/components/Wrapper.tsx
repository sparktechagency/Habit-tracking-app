import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Wrapper = ({ children }: { children: React.ReactNode }) => {

    const { bottom } = useSafeAreaInsets();

    return (
        <View
            style={{ flex: 1 }}
        >
            <View style={styles.container}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});

export default Wrapper;
