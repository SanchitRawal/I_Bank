import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Lock from '../../assets/mainIcons/lock.svg';
import FingerPrint from '../../assets/mainIcons/fingerPrint.svg';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';

const SignIn = () => {
  const navigation = useNavigation();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#281C9D' }}>
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          paddingBottom: 15,
          paddingLeft: 38,
          paddingTop: 10,
          fontWeight: '700',
        }}
      >
        {isSignUp ? 'Sign up' : 'Sign in'}
      </Text>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          borderTopRightRadius: 38,
          borderTopLeftRadius: 38,
          padding: 20,
          gap: 14,
        }}
      >
        <View style={{ gap: 4, paddingTop: 6 }}>
          <Text style={{ fontWeight: '600', fontSize: 22, color: '#281C9D' }}>
            {isSignUp ? 'Welcome to us' : 'Welcome Back'}
          </Text>
          <Text style={{ fontWeight: '400', fontSize: 16, color: '#000' }}>
            Hello there,{' '}
            <Text>
              {isSignUp ? 'create New account' : 'sign in to continue'}
            </Text>
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              padding: 38,
              justifyContent: 'center',
              alignContent: 'center',
              borderRadius: 200,
              backgroundColor: '#E5E2FF',
            }}
          >
            <Lock width={60} height={60} />
          </View>
        </View>
        <View style={{ gap: 14 }}>
          {isSignUp && (
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#CBCBCB',
                padding: 10,
                borderRadius: 18,
              }}
              placeholder="Name"
              placeholderTextColor="#999"
            />
          )}
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#CBCBCB',
              padding: 10,
              borderRadius: 18,
            }}
            placeholder="Email"
            placeholderTextColor="#999"
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#CBCBCB',
              padding: 10,
              borderRadius: 18,
            }}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
          />
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              flex: 1,
            }}
          >
            <Text>Forgot Password?</Text>
          </View>
        </View>
        {isSignUp && (
          <View
            style={{
              justifyContent: 'center',
              // alignItems: 'center'
              flexDirection: 'row',
              gap: 8,
            }}
          >
            <TouchableWithoutFeedback onPress={() => setIsChecked(!isChecked)}>
              <Ionicons
                name={isChecked ? 'checkbox' : 'square-outline'}
                size={26}
                color="#281C9D"
              />
            </TouchableWithoutFeedback>
            <View>
              <Text style={{ fontSize: 14 }}>
                By creating an account your aggree
              </Text>
              <Text>
                to our{' '}
                <Text style={{ color: '#281C9D', fontWeight: '600' }}>
                  <TouchableWithoutFeedback>
                    <Text>Term and Condtions</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </Text>
            </View>
          </View>
        )}
        <TouchableOpacity
          style={{
            padding: 12,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#281C9D',
          }}
          onPress={()=> navigation.navigate('AppNavigator', {screenName: 'DashBoard'})}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 18, color: '#fff', fontWeight: '600' }}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: 'center' }}>
          <FingerPrint />
        </TouchableOpacity>
        <Text style={{ alignSelf: 'center' }}>
          Don't have an account?{' '}
          <TouchableWithoutFeedback onPress={() => setIsSignUp(true)}>
            <Text style={{ color: '#281C9D', fontWeight: '700' }}>Sign Up</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
