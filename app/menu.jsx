import {
  Appearance,
  StyleSheet,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  Image,
  Text
} from "react-native";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

import { Colors } from "@/constants/Colors";
export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme;
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);
  const container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  return (
    <container style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      />
    </container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({});
}
