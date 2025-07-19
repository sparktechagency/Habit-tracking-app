import { IconsGroup, IconsGroupActive, IconsHabits, IconsHabitsActive, IconsProfile, IconsProfileActive, IconsRewards, IconsRewardsActive, IconsSayNO, IconsSayNOActive } from '@/assets/icons';
import HeadingTop from '@/src/components/ui/HeadingTop';
import { Tabs } from 'expo-router';
import { Platform, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

/**
 * Tab navigation layout for the app
 */
export default function TabLayout() {

    const { bottom } = useSafeAreaInsets()

    return (
        <View style={{ flex: 1, paddingBottom: bottom }}>
            {/* --------------- heading top ---------------- */}
            <HeadingTop />

            {/* ----------- status bar ------------------ */}
            <StatusBar
                translucent={false}
                backgroundColor={'#000'}
                barStyle={'dark-content'}
            />

            {/* ----------------------- main ------------------ */}
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#000',

                    tabBarStyle: {
                        height: 70,
                        paddingTop: 10,
                        paddingBottom: Platform.OS === "ios" ? 25 : 10,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: '#d9d9d9'
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Habits',
                        tabBarIcon: ({ focused }) => (
                            <SvgXml xml={focused ? IconsHabitsActive : IconsHabits} />
                        ),
                        animation: 'shift'

                    }}
                />
                <Tabs.Screen
                    name="groups"
                    options={{
                        title: 'Groups',
                        tabBarIcon: ({ focused }) => (
                            <SvgXml xml={focused ? IconsGroupActive : IconsGroup} />
                        ),
                        animation: 'shift'
                    }}
                />
                <Tabs.Screen
                    name="say-on"
                    options={{
                        title: 'Say On',
                        tabBarIcon: ({ focused }) => (
                            <SvgXml xml={focused ? IconsSayNOActive : IconsSayNO} />
                        ),
                        animation: 'shift'

                    }}
                />
                <Tabs.Screen
                    name="rewards"
                    options={{
                        title: 'Rewards',
                        tabBarIcon: ({ focused }) => (
                            <SvgXml xml={focused ? IconsRewardsActive : IconsRewards} />
                        ),
                        animation: 'shift'

                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ focused }) => (
                            <SvgXml xml={focused ? IconsProfileActive : IconsProfile} />
                        ),
                        animation: 'shift'

                    }}
                />
            </Tabs>
        </View>
    );
}