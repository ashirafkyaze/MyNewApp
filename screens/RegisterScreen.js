import React from "react";
import { Pressable, StyleSheet,Text ,View,Image,TextInput,TouchableOpacity} from "react-native";

const RegisterScreen = () =>{
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
        }}>
            <Image
                source={ require('../assets/logo.png')}// Replace with your logo's URL
                style={{
                    width: 150,
                    height: 100,
                    marginBottom: 20,
                }}
            />
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 20,
                color: '#333',
            }}>SocentLoop</Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '80%',
                marginBottom: 15,
                borderWidth: 1,
                borderColor: '#ddd',
                padding: 10,
                borderRadius: 5,
            }}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Email"
                    //value={email}
                    //onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '80%',
                marginBottom: 15,
                borderWidth: 1,
                borderColor: '#ddd',
                padding: 10,
                borderRadius: 5,
            }}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Password"
                //value={password}
                //onChangeText={setPassword}
                //secureTextEntry={!showPassword}
                />
                <TouchableOpacity >
                    <Text></Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '80%',
                marginBottom: 15,
                borderWidth: 1,
                borderColor: '#ddd',
                padding: 10,
                borderRadius: 5,
            }}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder=" Verify Password"
                //value={password}
                //onChangeText={setPassword}
                //secureTextEntry={!showPassword}
                />
                <TouchableOpacity >
                    <Text></Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{
                backgroundColor: '#007BFF',
                padding: 15,
                borderRadius: 5,
                width: '80%',
                alignItems: 'center',
                marginBottom: 10,
            }}>
                <Text style={{
                    color: '#fff',
                    fontSize: 16,
                }}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{
                    color: '#007BFF',
                    marginTop: 10,
                }}> Keep me logged in</Text>
            </TouchableOpacity>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <Text style={{
                    color: "gray",
                    marginTop: 10,
                }}>Already have an account? Sign In</Text>
            </Pressable>
        </View>
    );
}
export default RegisterScreen
const sytles = StyleSheet.create()