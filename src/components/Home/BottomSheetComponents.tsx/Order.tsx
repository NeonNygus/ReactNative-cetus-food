import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useOrder } from "../../../store/useOrder";

import Ionicons from "@expo/vector-icons/Ionicons";

type OrderProps = {
  orderId: number;
  content: { id: number; name: string; price: number; description?: string };
};

const Order = (props: OrderProps) => {
  const { id, name, price, description } = props.content;
  const { orders, removeOrder } = useOrder();

  return (
    <View
      style={{
        width: "100%",
        marginTop: 9,
        marginBottom: 9,
        flexDirection: "row",
      }}
    >
      <View style={{ width: "90%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            {price}zł
          </Text>
        </View>
        {description && (
          <Text
            style={{
              color: "#fff",
            }}
          >
            {description}
          </Text>
        )}
      </View>
      <View
        style={{
          width: "23%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => removeOrder(props.orderId)}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            <Ionicons name="close-circle-outline" color={"white"} size={35} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Order;
const styles = StyleSheet.create({});
