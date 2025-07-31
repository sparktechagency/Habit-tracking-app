import CalendarView from '@/src/components/ui/CalendarView';
import HabitCompletionRateGraph from '@/src/components/ui/HabitCompletionRateGraph';
import MoodTrackingGraph from '@/src/components/ui/MoodTrackingGraph';
import ProductivityInsightsGraph from '@/src/components/ui/ProductivityInsightsGraph';
import ProfileHeader from '@/src/components/ui/ProfileHeader';
import ProfileStatsCards from '@/src/components/ui/ProfileStatsCards';
import SubscriptionCard from '@/src/components/ui/SubscriptionCard';
import WorkoutProgress from '@/src/components/ui/WorkoutProgress';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { ScrollView, View } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={tw`flex-1 bg-primaryBg `}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }} >

                <View style={tw`flex-1 flex-col gap-6 pb-5`}>
                    {/* Profile Header */}
                    <ProfileHeader />
                    {/* Stats Cards */}
                    <ProfileStatsCards />

                    {/* Subscription Section */}
                    <SubscriptionCard />
                    {/*  */}

                    <View style={tw`flex-1 flex-col gap-6  rounded-md shadow bg-[#FCFCFC] px-5 py-4`}>
                        <CalendarView />
                        <WorkoutProgress />
                    </View>

                    <MoodTrackingGraph />
                    <HabitCompletionRateGraph />
                    <ProductivityInsightsGraph />
                </View>

            </ScrollView>
        </View>
    );
};

export default ProfileScreen;
