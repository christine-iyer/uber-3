// import { useSignIn } from '@clerk/clerk-expo';
// import { Link, useRouter } from 'expo-router';
// import React from 'react';
// import { Text, TextInput, Button, View } from 'react-native';

// export default function Page() {
//   const { signIn, setActive, isLoaded } = useSignIn();
//   const router = useRouter();

//   const [emailAddress, setEmailAddress] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   // Handle the submission of the sign-in form
//   const onSignInPress = React.useCallback(async () => {
//     if (!isLoaded) return;

//     // Start the sign-in process using the email and password provided
//     try {
//       const signInAttempt = await signIn.create({
//         identifier: emailAddress,
//         password,
//       });

//       // If sign-in process is complete, set the created session as active
//       // and redirect the user
//       if (signInAttempt.status === 'complete') {
//         await setActive({ session: signInAttempt.createdSessionId });
//         router.replace('/');
//       } else {
//         // If the status isn't complete, check why. User might need to
//         // complete further steps.
//         console.error(JSON.stringify(signInAttempt, null, 2));
//       }
//     } catch (err) {
//       // See https://clerk.com/docs/custom-flows/error-handling
//       // for more info on error handling
//       console.error(JSON.stringify(err, null, 2));
//     }
//   }, [isLoaded, emailAddress, password]);

//   return (
//     <View>
//       <TextInput
//         autoCapitalize="none"
//         value={emailAddress}
//         placeholder="Enter email"
//         onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
//       />
//       <TextInput
//         value={password}
//         placeholder="Enter password"
//         secureTextEntry
//         onChangeText={(password) => setPassword(password)}
//       />
//       <Button title="Sign in" onPress={onSignInPress} />
//       <View>
//         <Text>Don't have an account?</Text>
//         <Link href="/sign-up">
//           <Text>Sign up</Text>
//         </Link>
//       </View>
//     </View>
//   );
// }
import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function SignInScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign In Here</Text>
      <Button title="🔙" onPress={() => router.back()} />
      <Button title="Go to Home" onPress={() => router.replace('/(root)/(tabs)/home')} />
    </View>
  );
}
