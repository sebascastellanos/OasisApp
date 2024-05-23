import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const initializeGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: '429308432569-26dmpbiefrejae5k8hcpp29ir27sn0sc.apps.googleusercontent.com',
  });
};
