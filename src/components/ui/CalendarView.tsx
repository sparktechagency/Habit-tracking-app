import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const getFormattedDate = (date: any) => {
    return date.toISOString().split('T')[0];
};

const CalendarView = () => {
    const today = getFormattedDate(new Date());

    return (
        <View>
            <Calendar
                onDayPress={(day) => {
                    console.log('Selected day:', day);
                }}
                style={{
                    borderRadius: 16, // Add border radius
                }}

                markedDates={{
                    [today]: {
                        customStyles: {
                            container: {
                                backgroundColor: '#D6DF22',
                            },
                            text: {
                                color: '#fff',
                                fontWeight: 'bold',
                            },
                        },
                    },
                }}
                markingType={'custom'}
                hideExtraDays={true}
                enableSwipeMonths={false}
                renderHeader={() => <View />}
                theme={{

                    calendarBackground: '#f8f8f8',
                    textSectionTitleColor: '#3E3E3F',
                    dayTextColor: '#3E3E3F',
                    textDisabledColor: '#BCBDC0',
                    arrowColor: 'transparent', // hide arrows
                }}
            />
        </View>
    );
};

export default CalendarView;
