import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const SignupScreen = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  const onNextClick = () => {
    navigation.goBack();
  };
  const element = <TextInput.Icon name="eye" />;
  return (
    <ScrollView>
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
          Sign Up To Workroom
        </Text>

        <Text
          style={{
            marginLeft: 30,
            fontSize: 15,
            marginBottom: 10,
            color: '#555555',
          }}>
          Phone Number
        </Text>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderWidth: 1,
                flex: 0.3,
                marginHorizontal: 15,
                paddingHorizontal: 15,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Picker
                selectedValue={selectedLanguage}
                mode={'dropdown'}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
                style={{
                  width: 100,
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#666',
                }}>
                <Picker.Item label="+91" value="+91" />
                <Picker.Item label="+92" value="+92" />
              </Picker>
            </View>
            <View
              style={{
                borderWidth: 1,
                flex: 0.7,
                marginHorizontal: 15,
                paddingHorizontal: 15,
                borderRadius: 15,
              }}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                }}
              />
            </View>
          </View>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 15,
              marginTop: 25,
              marginBottom: 10,
              color: '#555555',
            }}>
            Code
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderWidth: 1,
                flex: 0.25,
                marginHorizontal: 15,
                paddingHorizontal: 15,
                borderRadius: 15,
              }}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                }}
                maxLength={1}
                keyboardType={'number-pad'}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                flex: 0.25,
                marginHorizontal: 15,
                paddingHorizontal: 15,
                borderRadius: 15,
              }}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                }}
                maxLength={1}
                keyboardType={'number-pad'}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                flex: 0.25,
                marginHorizontal: 15,
                paddingHorizontal: 15,
                borderRadius: 15,
              }}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                }}
                maxLength={1}
                keyboardType={'number-pad'}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                flex: 0.25,
                marginHorizontal: 15,
                paddingHorizontal: 15,
                borderRadius: 15,
              }}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                }}
                maxLength={1}
                keyboardType={'number-pad'}
              />
            </View>
          </View>
          <TextInput
            style={{
              backgroundColor: 'white',
            }}
            label="Your Name"
          />
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
            right={element}
          />
          <TextInput
            style={{
              backgroundColor: 'white',
            }}
            label="Confirm Password"
            secureTextEntry
            right={element}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 40,
            marginTop: 50,
            width: '100%',
            height: 50,
          }}>
          <Button
            containerStyle={{
              width: '100%',
              borderRadius: 12,
            }}
            buttonStyle={{height: 50}}
            title={'Next'}
          />
        </View>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            marginBottom: 50,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 15}}>Have Account? </Text>
          <Text
            style={{fontSize: 15, color: '#306EFF'}}
            onPress={() => onNextClick()}>
            Log In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
