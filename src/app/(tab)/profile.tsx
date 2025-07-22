import ProfileHeader from '@/src/components/ui/ProfileHeader';
import ProfileStatsCards from '@/src/components/ui/ProfileStatsCards';
import SubscriptionCard from '@/src/components/ui/SubscriptionCard';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { ScrollView, View } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={tw`flex-1 bg-primaryBg `}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }} >

                <View style={tw`flex-1 flex-col gap-6`}>
                    {/* Profile Header */}
                    <ProfileHeader />
                    {/* Stats Cards */}
                    <ProfileStatsCards />

                    {/* Subscription Section */}
                    <SubscriptionCard />
                </View>



            </ScrollView>
        </View>
    );
};

export default ProfileScreen;
