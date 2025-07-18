import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Wrapper = ({ children }: { children: React.ReactNode }) => {

    return (
        <SafeAreaView
            style={[
                styles.safeView,

            ]}
        >
            <View style={styles.container}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
});

export default Wrapper;
