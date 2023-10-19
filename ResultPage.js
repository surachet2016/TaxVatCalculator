import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Mystyles from "./Mystyles";

const ResultPage = ({ route, navigation }) => {
  const { total, vat, amount, totalAmount, taxDeduction } = route.params;
  const BAHT_SYMBOL = "\u0E3F";

  return (
    <View style={Mystyles.container}>
      <Text style={Mystyles.header}>ผลการคำนวณ</Text>
      <View style={Mystyles.resultContainer}>
        <Text>
          ราคาก่อน VAT: {BAHT_SYMBOL}
          {amount}
        </Text>
        <Text>
          VAT 7%: {BAHT_SYMBOL}
          {vat}
        </Text>
        {/* Horizontal Line (Divider) */}
        <View style={Mystyles.horizontalLine} />
        <Text>
          ราคารวม VAT: {BAHT_SYMBOL}
          {totalAmount}
        </Text>
        <Text>
          หักภาษี ณ ที่จ่าย: {BAHT_SYMBOL}
          {taxDeduction}
        </Text>
          {/* Horizontal Line (Divider) */}
          <View style={Mystyles.horizontalLine} />
        <Text style={Mystyles.total}>
          TOTAL: {BAHT_SYMBOL}
          {total}
        </Text>
        <Text style={Mystyles.subHeader}>หลังหักภาษี ณ ที่จ่าย</Text>
      </View>

    
    </View>
  );
};

export default ResultPage;
