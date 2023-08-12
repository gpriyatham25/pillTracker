import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Pill Tracker</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Welcome to Pill Tracker!
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <FontAwesome name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: '#201E20', // Adjust as needed
    paddingVertical: 10,
    alignItems: 'left',
    padding:20
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    
    flex: 1,
    backgroundColor: '#f0f0f0', // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1
  },
  scrollView: {
    top:100,
    marginHorizontal: 20,
  },
  
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#201E20', // Adjust as needed
    paddingVertical: 10,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#E0A96D', // Adjust as needed
    width: 60,
    height: 60,
    borderRadius: 30,
    top:-40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
