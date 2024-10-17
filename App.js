import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Platform, StatusBar as RNStatusBar } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import Font Awesome

export default function App() {
  const [follower, setFollower] = useState(0);

  const addFollower = () => {
    setFollower(follower + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* แถบบน */}
      <View style={styles.topBar}>
        <FontAwesome
          style={styles.topBarIcon}
          name="arrow-left"
          size={20}
          color="#696969"
        />
        <Text style={styles.topBarText}>Intocomputerlab</Text>
        <FontAwesome
          style={styles.topBarIcon}
          name="paper-plane"
          size={20}
          color="#696969"
        />
        <FontAwesome
          style={styles.topBarIcon}
          name="ellipsis-v"
          size={20}
          color="#696969"
        />
      </View>

      <ScrollView>
        {/* ภาพโปรไฟล์ โพส ผู้ติดตาม */}
        <View style={styles.profileSection}>
          <Image
            style={styles.imageProfile}
            source={require("./assets/comdep_logo.jpg")}
          />

          <View style={styles.accoutInfo}>
            <Text>36</Text>
            <Text>โพสต์</Text>
          </View>

          <View style={styles.accoutInfo}>
            <Text>{follower}</Text>
            <Text>ผู้ติดตาม</Text>
          </View>

          <View style={styles.accoutInfo}>
            <Text>66</Text>
            <Text>กำลังติดตาม</Text>
          </View>
        </View>

        {/* ไบโอ */}
        <View style={styles.accountBio}>
          <Text>Sharpen your skills. Create your futures ❤️</Text>
          <Text style={{ color: "blue" }}>#WeAreComputer</Text>
        </View>

        {/* ปุ่ม */}
        <View style={styles.actionButtonGroup}>
          <TouchableOpacity style={styles.followButton} onPress={addFollower}>
            <Text style={styles.actionButtonText}>ติดตาม</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>ส่งข้อความ</Text>
          </TouchableOpacity>
        </View>

        {/* เลือกประเภทคอนเทนต์ */}
        <View style={styles.contentType}>
          <FontAwesome
            style={styles.contentTypeMenu}
            name="bars"
            size={20}
            color="#696969"
          />
          <FontAwesome
            style={styles.contentTypeMenu}
            name="film"
            size={20}
            color="#696969"
          />
          <FontAwesome
            style={styles.contentTypeMenu}
            name="address-book"
            size={20}
            color="#696969"
          />
        </View>

        {/* โพสต์ */}
        <View style={styles.postGroup}>
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87-768x1170.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B9%82%E0%B8%88%E0%B9%89-768x1170.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%9A%E0%B8%AD%E0%B8%A2-768x1170.png",
            }}
          />

          {/* แถว 2 */}
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99-768x1170.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C-768x1170.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%AB%E0%B8%99%E0%B8%B6%E0%B9%88%E0%B8%87-768x1170.png",
            }}
          />

          {/* แถว 3 */}
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%81%E0%B8%8B%E0%B9%8C-768x1170.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B9%80%E0%B8%AD%E0%B8%AA-768x1170.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%A1%E0%B8%B4%E0%B8%81%E0%B8%8B%E0%B9%8C-768x1170.png",
            }}
          />

          {/* แถว 4 */}
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%A3%E0%B8%B8%E0%B8%88-768x1170.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B9%82%E0%B8%AD%E0%B9%8A%E0%B8%84-768x1170.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B9%81%E0%B8%9A%E0%B8%A1-768x1170.png",
            }}
          />

          {/* แถว 5 */}
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%81%E0%B8%B1%E0%B8%99-768x1170.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%A1-768x1170.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri: "https://it.e-tech.ac.th/main/wp-content/uploads/2024/05/%E0%B8%AD.%E0%B8%9A%E0%B8%B5%E0%B8%A1-768x1170.png",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
  },
  topBar: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  topBarText: {
    flex: 1,
    fontSize: 18,
  },
  topBarIcon: {
    paddingHorizontal: 10,
  },
  profileSection: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  accoutInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageProfile: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  accountBio: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  actionButtonGroup: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
  },
  followButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#E5E4E2",
    marginHorizontal: 5,
    borderRadius: 4,
  },
  actionButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#E5E4E2",
    marginHorizontal: 5,
    borderRadius: 4,
  },
  actionButtonText: {
    textAlign: "center",
  },
  contentType: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 5,
  },
  contentTypeMenu: {
    flex: 1,
    textAlign: "center",
  },
  postGroup: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  postImage: {
    width: "30%",
    height: 100,
    margin: 2,
  },
});
