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
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const separatorComp = <View style={styles.separator}/>
  // const headerComp = <Text>Top of List</Text>
  const footerComp = <Text style = {{color: theme.text}}>End of Menu</Text>
  return (
    <Container style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator = {false}
        contentContainerStyle = {styles.contentContainer}
        ItemSeparatorComponent={separatorComp}
        ListFooterComponent={footerComp}
        // ListHeaderComponent={headerComp}
        ListFooterComponentStyle = {styles.footerComp}
        ListEmptyComponent={<Text>No Items</Text>}
        renderItem={({ item }) => (
          <View style = {styles.row}>
            <View style = {styles.menuTextRow}>
              <Text style = {[styles.menuItemText ,styles.menuItemTitle]}>{item.title}</Text>
              <Text style = {styles.menuItemText}>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} style = {styles.menuImage} />
          </View>
        )}
      />
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
      paddingBottom: 20,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === 'dark' ? 'papayawhip': "#000",
      width: '50%',
      maxWidth: 300,
      marginHorizontal: 'auto',
      marginBottom: 10,
    },
    footerComp :{
      
      marginHorizontal: 'auto',
    },
    row:{
      flexDirection: 'row',
      width: '100%',
      height: 100,
      maxWidth: 600,
      marginBottom: 10,
      borderStyle: 'solid',
      borderColor: colorScheme === 'dark'? 'papayawhip': '#000',
      borderWidth: 1,
      borderRadius: 20,
      overflow: 'hidden',
      marginHorizontal: 'auto',
    },
    menuTextRow: {
      width: '65%',
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      flexGrow: 1,
    },
    menuItemTitle:{
      fontSize: 18,
      textDecorationLine: 'underline',
    },
    menuItemText:{
      color: theme.text,
    },
    menuImage:{
      width: 100,
      height: 100,
    }
  });
}
