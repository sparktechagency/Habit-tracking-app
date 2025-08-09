import tw from "@/src/lib/tailwind";
import { getDaysInMonth } from "@/src/utils/getDaysInMonth";
import { habits, months, yearData } from "@/src/utils/HabitInfo";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";


const HabitTracker = () => {
  const today = new Date();
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());

  const days = getDaysInMonth(selectedYear, selectedMonth);
  const currentMonthData = yearData?.[selectedYear]?.[selectedMonth] || {};



  return (
    <View style={tw`flex-1 `}>
      {/* Year Selector */}
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Pressable onPress={() => setSelectedYear((prev) => prev - 1)}>
          <Text style={tw`text-yellowGreen text-lg`}>◀</Text>
        </Pressable>
        <Text style={tw`text-lg font-montserrat-700`}>{selectedYear}</Text>
        <Pressable onPress={() => setSelectedYear((prev) => prev + 1)}>
          <Text style={tw`text-yellowGreen text-lg`}>▶</Text>
        </Pressable>
      </View>

      {/* Month Selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`mb-4`}
      >
        {months?.map((month, i) =>
          <Pressable
            key={i}
            onPress={() => setSelectedMonth(i)}
            style={tw`px-2 py-2 rounded-full mx-1 ${today.getMonth() === i ? "bg-yellowGreen" : "bg-[#E5E7EB]"}`}
          >
            <Text
              style={tw`${selectedMonth === i ? "text-white " : "text-blackText"} text-sm font-montserrat-600`}
            >
              {month}
            </Text>
          </Pressable>
        )}
      </ScrollView>

      {/* Habit Tracker Grid */}
      <View style={tw`flex-row items-center`}>
        {/* Day Header */}
        <View style={tw`flex-col justify-center gap-4 mt-3 w-[35%]`}>
          {habits?.map((habit, index) => (
            <View key={index} style={tw`flex-row items-center mb-2`}>
              <Text style={tw` text-xs font-montserrat-600`}>{habit}</Text>
            </View>
          ))}
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {/* Habit Rows */}
          <View style={tw`flex-col items-center mb-2`}>
            <View style={tw`flex-row items-center mb-2`}>
              {days.map((d) => (
                <Text key={d} style={tw`w-8.5 text-xs  text-center  text-gray`}>
                  {d}
                </Text>
              ))}
            </View>
            {habits?.map((habit, index) => (
              <View key={index} style={tw`flex-row items-center mb-2`}>
                {days.map((day) => {
                  const filled = currentMonthData?.[habit]?.includes(day);
                  return (
                    <View
                      key={day}
                      style={tw`w-8 h-8 mx-[1px] rounded-md ${filled ? "bg-yellowGreen" : "bg-[#E5E7EB]"}`}
                    />
                  );
                })}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HabitTracker;
