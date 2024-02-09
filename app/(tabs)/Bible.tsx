import { FlatList, Image, StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [products, setProducts] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError]= useState(null);

    useEffect(()=>{
        getProduct();
    },[]);

    const getProduct = ()=>{   
    const URL = 'https://fakestoreapi.com/products';
    fetch(URL)
    .then((res)=>{
            if(!res.ok){
                throw new Error("somthing went wrong Afe");
            }
        return res.json(); //convcert it into readable format

    })
    .then((data)=>{
        setProducts(data);
        setIsLoading(false);

    }).catch((error)=>{
        setError(error.message);
    });

    }
  return (
    <View>
    {
        isloading?(
            <ActivityIndicator color="red" size="large"/>
        ):error? <Text style={styles.errorStyle}>{error}</Text>:(
        <FlatList
    showsVerticalScrollIndicator={false}
      data={products}
      renderItem={({item}) => (
      <View style={styles.card}>
        <Image source={{uri:item.image}} style={styles.cardImage}/>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardTitle}>{item.description}</Text>
        <Text style={{fontSize:18, textAlign:'center'}}>Uploaded date and uploaded by</Text>
      </View>
  )}
/>
        )
    }
   
</View>
  );
};

export default page

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#333',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
      },
      cardImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      },
      cardTitle: {
        fontSize: 18,
        marginBottom: 8,
      },
      
    errorStyle:{
        color:'red',
        fontSize:18
    },
});