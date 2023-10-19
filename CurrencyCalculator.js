import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Mystyles from "./Mystyles";

function CurrencyCalculator({ navigation }) {
  const [amount, setAmount] = useState("");
  const [vatRate, setVatRate] = useState("");
  const [withholdingTax, setWithholdingTax] = useState("");
  const [total, setTotal] = useState(0);
  const BAHT_SYMBOL = "\u0E3F";

  const calculateTotal = () => {
    const vat = (amount * vatRate) / 100;
    const totalAmount = parseFloat(amount) + vat;
    const taxDeduction = (totalAmount * withholdingTax) / 100;
    const finalTotal = totalAmount - taxDeduction;

    // Format the numbers as currency with commas
    const formattedAmount = new Intl.NumberFormat("en-US").format(amount);
    const formattedVat = new Intl.NumberFormat("en-US").format(vat);
    const formattedTotalAmount = new Intl.NumberFormat("en-US").format(
      totalAmount
    );
    const formattedTaxDeduction = new Intl.NumberFormat("en-US").format(
      taxDeduction
    );
    const formattedFinalTotal = new Intl.NumberFormat("en-US").format(
      finalTotal
    );

    navigation.navigate("ResultPage", {
      total: formattedFinalTotal,
      vat: formattedVat,
      amount: formattedAmount,
      totalAmount: formattedTotalAmount,
      taxDeduction: formattedTaxDeduction,
    });
  };

  return (
    <View style={Mystyles.container}>
      <View style={Mystyles.resultContainer}>
        <Text style={Mystyles.greentext}>ราคาก่อน VAT</Text>
        <TextInput
          label="ราคาก่อน VAT"
          keyboardType="numeric"
          placeholder={BAHT_SYMBOL +"0"}
          value={amount}
          onChangeText={(value) => setAmount(value)}
          style={Mystyles.input}
        />
        <TextInput
          label="ภาษีมูลค่าเพิ่ม(VAT) (%)"
          keyboardType="numeric"
          placeholder="ภาษีมูลค่าเพิ่ม(VAT) (%)"
          value={vatRate}
          onChangeText={(value) => setVatRate(value)}
          style={Mystyles.input}
        />
        <TextInput
          label="หักภาษี ณ ที่จ่าย (%)"
          keyboardType="numeric"
          placeholder="หักภาษี ณ ที่จ่าย (%)"
          value={withholdingTax}
          onChangeText={(value) => setWithholdingTax(value)}
          style={Mystyles.input}
        />
      </View>
      <TouchableOpacity style={Mystyles.button} onPress={calculateTotal}>
        <Text style={Mystyles.buttonText}>คำนวณ</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CurrencyCalculator;
