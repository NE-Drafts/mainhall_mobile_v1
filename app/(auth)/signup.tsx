import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { TextInput } from 'react-native';
import { Button } from 'react-native'; 

export default function SignupScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="person.crop.circle.badge.plus"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Create Account</ThemedText>
      </ThemedView>

      <ThemedText>Join our community by creating a new account.</ThemedText>

      <Collapsible title="Personal Information">
        <ThemedView style={styles.inputContainer}>
          <TextInput
            placeholder="Full Name"
            autoCapitalize="words"
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />
        </ThemedView>
      </Collapsible>

      <Collapsible title="Security">
        <ThemedView style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
          />
        </ThemedView>
      </Collapsible>

      <ThemedView style={styles.buttonContainer}>
        <Button 
          title="Sign Up" 
          onPress={() => {}} 
        //   style={styles.button}
        />
        <ThemedText style={styles.termsText}>
          By signing up, you agree to our Terms of Service and Privacy Policy
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  inputContainer: {
    gap: 12,
  },
  input: {
    width: '100%',
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center',
    gap: 16,
  },
  button: {
    width: '100%',
    paddingVertical: 12,
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.7,
  },
});