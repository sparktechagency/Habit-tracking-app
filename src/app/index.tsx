// import { Image, Text, TouchableOpacity, View } from "react-native";
// import tw from "../lib/tailwind";

// export default function Index() {
//   return (
//     <View style={tw`flex-1 bg-[#D6DF22]`}>
//       {/* Profile image */}
//       <Image
//         source={{ uri: "https://placehold.co/192x192" }}
//         style={tw`w-48 h-48 rounded-2xl absolute left-[124px] top-[229px]`}
//       />

//       {/* Welcome text */}
//       <Text
//         style={tw`absolute left-[84px] top-[446px] text-[#3E3E3F] text-[25px] font-bold`}
//       >
//         Welcome to DooGoo
//       </Text>

//       {/* Subtitle */}
//       <Text
//         style={tw`absolute w-[369px] left-[35px] top-[494px] text-center text-[#3E3E3F] text-[15px] font-semibold`}
//       >
//         Build better habits and transform your life one day at a time
//       </Text>

//       {/* Get Started button */}
//       <TouchableOpacity
//         style={tw`absolute left-[40px] top-[718px] w-[360px] h-12 bg-[#3E3E3F] rounded-2xl flex-row items-center justify-center`}
//       >
//         <Text style={tw`text-[#D6DF22] text-[16px] font-bold leading-6`}>
//           Get Started
//         </Text>
//         <View style={tw`w-[23px] h-[23px] ml-2 items-center justify-center`}>
//           <View style={tw`w-[15px] h-[15px] bg-[#D6DF22]`} />
//           {/* Or use icon: <Ionicons name="arrow-forward" size={16} color="#D6DF22" /> */}
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// import React from "react";
// import { Image, Text, TouchableOpacity, View } from "react-native";
// import tw from "../lib/tailwind";

// const OnboardingScreen = () => {
//   return (
//     <View style={tw`w-[440px] h-[956px] relative bg-white`}>
//       {/* Background Image with blur */}
//       <Image
//         source={require('@/assets/images/Splash Screen 2.png')}
//         blurRadius={1}
//         style={tw`absolute w-[440px] h-[956px] left-0 top-0`}
//       />

//       {/* Quote */}
//       <Text
//         style={tw`absolute w-[369px] left-[36px] top-[524px] text-center text-[#D6DF22] text-[28px] font-bold`}
//       >
//         The best time to build habits was yesterday. The next best is now
//       </Text>

//       {/* Dots (pagination indicators) */}
//       <View
//         style={tw`absolute w-[20px] h-[10px] left-[194px] top-[669px] bg-[#D6DF22] rounded-full`}
//       />
//       <View
//         style={tw`absolute w-[10px] h-[10px] left-[220px] top-[669px] bg-[#D9D9D9] rounded-full`}
//       />
//       <View
//         style={tw`absolute w-[10px] h-[10px] left-[236px] top-[669px] bg-[#D9D9D9] rounded-full`}
//       />

//       {/* Get Started Button */}
//       <TouchableOpacity
//         style={tw`absolute w-[360px] h-[48px] left-[40px] top-[718px] bg-[#D6DF22] rounded-2xl justify-center`}
//         activeOpacity={0.7}
//       >
//         <Text
//           style={tw`absolute left-[113px] top-[12px] text-center text-[#3E3E3F] text-[16px] font-bold leading-[24px]`}
//         >
//           Get Started
//         </Text>
//         <View
//           style={tw`absolute w-[23px] h-[23px] left-[264px] top-[13px] overflow-hidden items-center justify-center`}
//         >
//           <View
//             style={tw`w-[15px] h-[15px] bg-[#3E3E3F]`}
//           />
//         </View>
//       </TouchableOpacity>

//       {/* Decorative Square at top */}
//       <View
//         style={tw`absolute w-[120px] h-[120px] left-[161px] top-[135px] overflow-hidden items-center justify-center`}
//       >
//         <View
//           style={tw`absolute w-[100px] h-[100px] left-[10px] top-[10px] bg-[#D6DF22]`}
//         />
//       </View>
//     </View>
//   );
// };

// export default OnboardingScreen;


import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import tw from "../lib/tailwind";

const OnboardingScreen = () => {
  return (
    <View style={tw`flex-1 relative`}>
      {/* Background Image with Blur */}
      <Image
        source={require('@/assets/images/Splash Screen 2.png')}
        blurRadius={1}
        style={tw`absolute w-full h-full`}
      />

      {/* Top Decorative Box */}
      <View style={tw`absolute w-30 h-30 left-1/2 -ml-15 top-36 items-center justify-center`}>
        <View style={tw`w-24 h-24 bg-[#D6DF22]`} />
      </View>

      {/* Motivational Text */}
      <Text
        style={tw`absolute w-11/12 text-center text-[#D6DF22] text-2xl font-bold top-[55%] left-1/2 -ml-[45%]`}
      >
        The best time to build habits was yesterday. The next best is now
      </Text>

      {/* Pagination Dots */}
      <View style={tw`absolute flex-row gap-2  top-[70%] left-1/2 -ml-8`}>
        <View style={tw`w-5 h-2.5 bg-[#D6DF22] rounded-full`} />
        <View style={tw`w-2.5 h-2.5 bg-[#D9D9D9] rounded-full`} />
        <View style={tw`w-2.5 h-2.5 bg-[#D9D9D9] rounded-full`} />
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={tw`absolute bottom-20 left-5 right-5 h-12 bg-[#D6DF22] rounded-2xl justify-center items-center`}
      >
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-[#3E3E3F] text-base font-bold`}>Get Started</Text>
          <View style={tw`w-6 h-6 ml-2 items-center justify-center`}>
            <View style={tw`w-4 h-4 bg-[#3E3E3F]`} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

