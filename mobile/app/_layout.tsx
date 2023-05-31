import { styled } from "nativewind";
import { ImageBackground } from "react-native";
const StyledStrips = styled(Stripes);
import Stripes from "../src/assets/stripes.svg";
import * as SecureStore from "expo-secure-store";
import blurBg from "../src/assets/bg-blur.png";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

export default function Layout() {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState<null | boolean>(null)

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  useEffect(() => {
    SecureStore.getItemAsync("token").then((token) => {
        setIsUserAuthenticated(!!token);
    }
    );
  }, []);

  if (!hasLoadedFonts) {
    return <SplashScreen />;
  }

  return (
    <ImageBackground
      source={blurBg}
      className="bg-gray-900 relative flex-1"
      imageStyle={{ position: "absolute", left: "-100%" }}
    >
      <StyledStrips className="absolute left-2" />
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",

          },
        }}
      >
        <Stack.Screen name="index"  redirect={isUserAuthenticated}/>
        <Stack.Screen name="new" />
        <Stack.Screen name="memories" />
        </Stack>
    </ImageBackground>
  );
}
