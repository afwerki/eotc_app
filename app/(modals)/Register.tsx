import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Page = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>ተዋህዶ</Text>
          <Text style={styles.subtitle}>እዚህ ላይ የሚሰጡንመረጃ ጠቃሚ ሰለሆነ በጥንቃቄ ይሙሉት</Text>
        </View>

        <View style={styles.form}>
        <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="afe.programmer@gmail.com"
            placeholderTextColor='#6b7280'
            style={styles.inputControl}
            />
          </View>
          

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Create Password</Text>
            <Text style={{color:'gray', fontSize:12}}>የማይረሳ የይለፍ ቃል ያስገቡ</Text>

            <TextInput
              autoCorrect={false}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true} />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>ስም/first name</Text>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputControl}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>የአባት ስም/last name</Text>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputControl}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>ፆታ/gender</Text>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputControl}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>እድሜ/age</Text>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputControl}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>ጋብቻ/marital satus</Text>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputControl}
            />
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
              <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
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
