import * as React from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import {RouteNames} from '../navigation/routes';

const LoginScreen = ({navigation}) => {
  const onSignupClick = () => {
    navigation.navigate(RouteNames.SIGNUPSCREEN);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Icon
        name="sc-telegram"
        type="evilicon"
        color="#306EFF"
        size={75}
        style={{marginVertical: 50}}
      />
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: 25,
          marginBottom: 25,
          color: '#000000',
        }}>
        Login In To Workroom
      </Text>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
        }}>
        <TextInput
          style={{
            backgroundColor: 'white',
          }}
          label="Your Email"
          keyboardType={'email-address'}
        />
        <TextInput
          style={{
            backgroundColor: 'white',
          }}
          label="Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
      </View>
      <Text style={{width: '100%', paddingHorizontal: 20, textAlign: 'right'}}>
        Forgot Password?
      </Text>
      <View
        style={{
          paddingHorizontal: 40,
          marginVertical: 50,
          width: '100%',
          height: 50,
        }}>
        <Button
          containerStyle={{
            width: '100%',
            borderRadius: 12,
          }}
          buttonStyle={{height: 50}}
          title={'Log In'}
        />
      </View>
      <Text style={{width: '100%', textAlign: 'center'}}>
        <Text style={{fontSize: 15}}>New User? </Text>
        <Text
          style={{fontSize: 15, color: '#306EFF'}}
          onPress={() => onSignupClick()}>
          Create Account
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
