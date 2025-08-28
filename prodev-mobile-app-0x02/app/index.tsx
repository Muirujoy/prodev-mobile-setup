import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Company Logo */}
            <View style={styles.companyLogo}>
              <Image
                source={require("@/assets/images/Logo.png")}
                style={{ width: 120, height: 120, resizeMode: "contain" }}
              />
            </View>

            {/* Text Section */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>
                The best prices for over 2 million properties worldwide
              </Text>
            </View>

            {/* Buttons + Navigation Prompt */}
            <View style={styles.bottomSection}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>
                    Join here
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white", fontSize: 16 }}>
                  Continue to home
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // add horizontal breathing space
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  textGroup: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: width > 380 ? 36 : 28, // responsive text
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 42,
  },
  textSmall: {
    color: "white",
    fontSize: width > 380 ? 18 : 16, // adjust size on small screens
    fontWeight: "300",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 15,
    paddingHorizontal: 20,
  },
  bottomSection: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: 20,
  },
});
