import * as Calendar from 'expo-calendar';
import { useEffect, useState } from 'react';
import { Alert, Button, Platform, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import tw from 'twrnc';

export default function GroupsScreen() {
    const [calendarPermission, setCalendarPermission] = useState(null);
    const [isCreatingCalendar, setIsCreatingCalendar] = useState(false);

    useEffect(() => {
        const checkCalendarPermissions = async () => {
            try {
                const { status } = await Calendar.requestCalendarPermissionsAsync();
                setCalendarPermission(status);

                if (status === 'granted') {
                    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
                    console.log('Available calendars:', calendars);
                }
            } catch (error) {
                console.error('Calendar permission error:', error);
                Alert.alert('Error', 'Failed to access calendar permissions');
            }
        };

        checkCalendarPermissions();
    }, []);

    const getDefaultCalendarSource = async () => {
        try {
            return Platform.OS === 'ios'
                ? await Calendar.getDefaultCalendarAsync()
                : { isLocalAccount: true, name: 'Habits Calendar' };
        } catch (error) {
            console.error('Error getting default calendar:', error);
            throw error;
        }
    };

    const createCalendar = async () => {
        if (calendarPermission !== 'granted') {
            Alert.alert('Permission Required', 'Please grant calendar access first');
            return;
        }

        setIsCreatingCalendar(true);

        try {
            const defaultCalendarSource = await getDefaultCalendarSource();

            const newCalendarID = await Calendar.createCalendarAsync({
                title: 'Habits Tracker',
                color: '#00A86B', // Using your app's green color
                entityType: Calendar.EntityTypes.EVENT,
                sourceId: defaultCalendarSource?.id,
                source: defaultCalendarSource,
                name: 'habitsTrackerCalendar',
                ownerAccount: 'personal',
                accessLevel: Calendar.CalendarAccessLevel.OWNER,
            });

            Alert.alert('Success', `New calendar created with ID: ${newCalendarID}`);
            console.log('New calendar ID:', newCalendarID);
        } catch (error) {
            console.error('Calendar creation error:', error);
            Alert.alert('Error', 'Failed to create calendar');
        } finally {
            setIsCreatingCalendar(false);
        }
    };

    return (
        <SafeAreaView style={tw`flex-1 bg-white p-4`}>
            <View style={tw`flex-1 justify-center items-center`}>
                <Text style={tw`text-xl font-bold text-gray-800 mb-6`}>
                    Habit Tracking Calendar
                </Text>

                <Text style={tw`text-gray-600 mb-8 text-center`}>
                    {calendarPermission === 'granted'
                        ? 'You can now create a dedicated habits calendar'
                        : 'Calendar access is required to track habits'}
                </Text>

                <Button
                    title={isCreatingCalendar ? 'Creating...' : 'Create Habits Calendar'}
                    onPress={createCalendar}
                    disabled={isCreatingCalendar}
                    color="#00A86B"
                />

                {calendarPermission !== 'granted' && (
                    <Text style={tw`mt-4 text-sm text-gray-500`}>
                        You may need to enable calendar permissions in settings
                    </Text>
                )}
            </View>
        </SafeAreaView>
    );
}