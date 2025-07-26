import { IconsWorkDone } from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const members = ["Lara Croft (You)", "AB James"];
const habits = [
  "15-minute cardio workout",
  "Drink 2L of water",
  "10-minute meditation",
];

const HabitGrid = () => {
  // Initialize workDone status for each [member][habit] as false
  const [workDone, setWorkDone] = useState(
    members.map(() => habits.map(() => false))
  );

  const toggleDone = (memberIndex: number, habitIndex: number) => {
    const updated = [...workDone];
    updated[memberIndex][habitIndex] = !updated[memberIndex][habitIndex];
    setWorkDone(updated);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tw`flex-1 bg-gray/20`}
    >
      <View style={tw`px-2 flex-row py-4`}>
        {/* Left Sidebar (Members) */}
        <View style={tw`w-32 bg-primaryBg rounded py-4 px-2`}>
          {members.map((member, index) => (
            <View
              key={index}
              style={tw`mb-3 rounded ${
                index === 0 ? "bg-yellowGreen" : "bg-yellowGreen/50"
              } px-3 py-2`}
            >
              <Text style={tw`text-black font-bold text-sm`}>{member}</Text>
            </View>
          ))}
        </View>

        {/* Habit Grid */}
        <View style={tw`flex-1  px-2`}>
          {/* Header Row (Habit Titles) */}
          <View style={tw`flex-row`}>
            {habits.map((habit, index) => (
              <View key={index} style={tw`w-48 items-center px-2`}>
                <Text style={tw`text-xs text-black text-center mb-2`}>
                  {habit}
                </Text>
              </View>
            ))}
          </View>

          {/* Rows (Members x Habits) */}
          {members.map((_, memberIndex) => (
            <View key={memberIndex} style={tw`flex-row`}>
              {habits.map((_, habitIndex) => {
                const isDone = workDone[memberIndex][habitIndex];
                return (
                  <View
                    key={habitIndex}
                    style={tw`w-48 px-2 py-2 items-center`}
                  >
                    <Pressable
                      onPress={() => toggleDone(memberIndex, habitIndex)}
                      style={tw`px-4 py-2 rounded ${
                        isDone ? "bg-[#1a8b03]" : "bg-blackish"
                      }`}
                    >
                      <Text style={tw`text-white text-sm font-semibold`}>
                        {isDone ? <SvgXml xml={IconsWorkDone} /> : "Done"}
                      </Text>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HabitGrid;
