import { View, Text, TouchableOpacity, ViewBase, Switch, ScrollView } from "react-native";
import NlwLogo from "../src/assets/nlw-spacetime-logo.svg";
import { Link } from "expo-router";
import Icon from "@expo/vector-icons/Feather";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function NewMemory() {
  const { top, bottom } = useSafeAreaInsets();
  const [isPublic, setIsPublic] = useState(false);
  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingTop: top, paddingBottom: bottom }}
      keyboardShouldPersistTaps="always"
    >
      <View className="flex-row items-start justify-between mt-7">
        <NlwLogo />
        <Link href="/memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>
      <View className="mt-6 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch
            value={isPublic}
            onValueChange={setIsPublic}
            thumbColor={isPublic ? "#ac88ff" : "#767577"}
            trackColor={{ false: "#767577", true: "#c7b7ec" }}
          />
          <Text className="font-body text-base text-gray-200">
            Tornar memória pública
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="h-32 justify-center rounded-lg border border-dashed border-gray-500 bg-black/20 items-center"
        >
          <View className="flex-row items-center gap-2">
            <Icon name="image" color="#ffffff" />
            <Text className="font-body text-sm text-gray-200">
              Adicionar foto ou vídeo de capa
            </Text>
          </View>
        </TouchableOpacity>
        <TextInput
          multiline
          className="p-o font-body text-lg text-gray-50"
          placeholderTextColor="#56565a"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2 items-center"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
