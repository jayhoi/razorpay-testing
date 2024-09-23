import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import { TouchableOpacity, Text, Alert } from 'react-native';
const RazorpayScreen = () => {
  const handlePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_live_E0z6lyPuzMfDa3',
      order_id:'',
      amount: 1000,
      name: 'Acme Corp',
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191',
        name: 'Gaurav Kumar'
      },
      theme: { color: '#53A20E' },
      modal:{
        "confirm_close": true
        },
        callback_url : 'www.google.com',
        redirect: true
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <TouchableOpacity
      onPress={handlePayment}
      style={{
        backgroundColor: '#53A20E',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      }}
    >
      <Text style={{ color: '#fff', fontSize: 16 }}>Pay</Text>
    </TouchableOpacity>
  );
};
export default RazorpayScreen;
