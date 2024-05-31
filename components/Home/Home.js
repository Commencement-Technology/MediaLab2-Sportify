import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import LevelCircle from "./LevelCircle";

const HomeScreen = () => {
  const generateLevels = (numLevels) => {
    const levels = [];
    for (let i = numLevels; i > 0; i--) {
      levels.push({
        level: i,
        icon: (
          <Ionicons
            name={
              i > 5
                ? "basketball-outline"
                : i > 3
                ? "football-outline"
                : i > 2
                ? "golf-outline"
                : i > 1
                ? "american-football-outline"
                : "tennisball-outline"
            }
            size={24}
            color="black"
          />
        ),
      });
    }
    return levels;
  };

  const levels = generateLevels(30);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImage} />
          <View style={styles.textContainer}>
            <Text style={styles.greeting}>Goeiemorgen,</Text>
            <Text style={styles.username}>Gebruikersnaam</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Ionicons name="cash-outline" size={24} color="black" />
            <Text style={styles.statText}>5</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="flame-outline" size={24} color="black" />
            <Text style={styles.statText}>3</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.section}>
        <Text style={styles.sectionText}>Gedeelte 1</Text>
        <Text style={styles.sectionSubtitle}>Beginner</Text>
      </TouchableOpacity>
      <View style={styles.levels}>
        <ScrollView>
          {levels.map((level, index) => (
            <React.Fragment key={index}>
              <View
                style={[
                  styles.levelContainer,
                  { alignSelf: index % 2 === 0 ? "flex-start" : "flex-end" },
                ]}
              >
                <LevelCircle level={level.level} icon={level.icon} />
              </View>
              {index < levels.length - 1 && (
                <View style={styles.dottedLineContainer} key={`line_${index}`}>
                  <View
                    style={[
                      styles.dottedLine,
                      { top: `${(index + 1) * 130}px` },
                    ]}
                  />
                </View>
              )}
            </React.Fragment>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    backgroundColor: "#ccc",
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  greeting: {
    fontSize: 16,
    color: "#333",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  statText: {
    fontSize: 18,
    marginLeft: 5,
  },
  section: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  levels: {
    marginTop: 20,
    padding: 25,
    height: 620,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  levelContainer: {
    height: 130,
    width: "25%",
    marginVertical: 10,
  },
  dottedLineContainer: {
    position: "absolute",
    width: 2,
    backgroundColor: "black",
    zIndex: 1, // Zet de z-index hoger dan de niveaus
  },
  dottedLine: {
    borderStyle: "dotted",
    borderWidth: 2,
    borderColor: "black",
    position: "absolute",
    width: "100%",
  },
  sectionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#333",
  },
});

export default HomeScreen;
