import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Link } from 'expo-router'

const Page = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={email=>setForm({...form, email})}
            placeholder="afe.programmer@gmail.com"
            placeholderTextColor='#6b7280'
            style={styles.inputControl}
            value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password} />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle link
            }}>
            <Text style={styles.formFooter}>
              Don't have an account?{' '}
              <Link href={"/(modals)/Register"} style={{ textDecorationLine: 'underline' }}> Register</Link>
            </Text>
           </TouchableOpacity>


        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    padding:24,
    flexGrow:1,
    flexShrink:1,
    flexBasis:0,
  },
  header:{
    marginVertical:36,
  },
  title:{
      fontSize:32,
      fontWeight:'bold',
      color:'#1d1d1d',
      marginBottom:6,
      textAlign:'center',
  },
  subtitle:{
    fontSize:15,
    fontWeight:'500',
    color:'#929292',
    textAlign:'center',
  },
  /**form */
  form:{
    marginBottom:24,
  },
  formAction:{
    marginVertical:24,
  },
  formFooter:{
    fontSize:15,
    fontWeight:'500',
    color:'#222',
    textAlign:'center',
  },
  /**Input */
  input:{
    marginBottom:16,
  },
  inputLabel:{
    fontSize:17,
    fontWeight:'600',
    color:'#222',
    marginBottom:8,
  },
  inputControl:{
    height:44,
    backgroundColor:'#f1f5f9',
    paddingHorizontal:16,
    borderRadius:12,
    fontSize:15,
    fontWeight:'500',
    color:'#222',
  },
  /**button */
  btn:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
    paddingVertical:8,
    paddingHorizontal:16,
    borderWidth:1,
    backgroundColor:'#007aff',
    borderColor:'#007aff',
  },
  btnText:{
    fontSize:17,
    lineHeight:24,
    fontWeight:'600',
    color:'#fff'

  },
});
export default Page;
