import { IconsMan, IconsWorkDone } from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const members = [
  "Lara Croft (You)",
  "AB James",
  "John Doe",
  "Jane Smith",
  "Mike Johnson",
  "Emily Davis",
  "Chris Brown",
  "Olivia Taylor",
  "Daniel Wilson",
  "Sophia Moore",
  "David Anderson",
  "Emma Thomas",
  "James Jackson",
];

const habits = [
  "15-minute cardio workout",
  "Drink 2L of water",
  "10-minute meditation",
];

const HabitGrid = () => {
  const [workDone, setWorkDone] = useState(
    members.map(() => habits.map(() => false))
  );

  const toggleDone = (memberIndex, habitIndex) => {
    const updated = [...workDone];
    updated[memberIndex][habitIndex] = !updated[memberIndex][habitIndex];
    setWorkDone(updated);
  };

  return (
    <View style={tw`flex-1 bg-[#F9F9F9] px-[4%] `}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={tw`flex-row `}>
          {/* Left Sidebar - Members */}
          <ScrollView showsVerticalScrollIndicator={false} style={tw`  `}>
            <View style={tw`w-32  shadow-2xl  `}>
              <View style={tw`h-32`} />{" "}
              <View style={tw` flex-col gap-4`}>
                {members.map((member, index) => (
                  <View
                    key={index}
                    style={tw`rounded-md px-3  flex-row gap-2 items-center bg-red-600 py-2 ${
                      index === 0 ? "bg-yellowGreen" : "bg-yellowGreen/80"
                    }`}
                  >
                    <Image
                      source={require("@/assets/images/app-icons.png")}
                      style={tw`w-10 h-10 rounded-full border-[1px] bg-[#D9D9D9] `}
                    />
                    <Text style={tw`text-blackText font-bold text-sm`}>
                      {index === 0 ? "You" : member.slice(0, 5)}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>

          {/* Right Grid - Habits */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {/* Habit Header Row */}
              <View style={tw`flex-row bg-white rounded-tr-xl my-4  `}>
                {habits.map((habit, index) => (
                  <View
                    key={index}
                    style={tw`w-24 items-center justify-center px-2 py-2`}
                  >
                    <SvgXml xml={IconsMan} />
                    <Text style={tw`text-sm font-bold text-black text-center`}>
                      {habit}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Habit Rows per Member */}
              <View style={tw` flex-col gap-10 `}>
                {members.map((_, memberIndex) => (
                  <View key={memberIndex} style={tw`flex-row `}>
                    {habits.map((_, habitIndex) => {
                      const isDone = workDone[memberIndex][habitIndex];
                      return (
                        <View
                          key={habitIndex}
                          style={tw`w-24 px-2 items-center `}
                        >
                          <Pressable
                            onPress={() => toggleDone(memberIndex, habitIndex)}
                            style={tw`w-full rounded py-2 items-center justify-center ${
                              isDone ? "bg-[#1a8b03]" : "bg-blackish"
                            }`}
                          >
                            {isDone ? (
                              <SvgXml
                                xml={IconsWorkDone}
                                width={20}
                                height={20}
                              />
                            ) : (
                              <Text
                                style={tw`text-white text-sm font-montserrat-600`}
                              >
                                Done
                              </Text>
                            )}
                          </Pressable>
                        </View>
                      );
                    })}
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default HabitGrid;
