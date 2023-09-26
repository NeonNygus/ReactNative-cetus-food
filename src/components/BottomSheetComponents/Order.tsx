import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";

import { useOrder } from "../../store/useOrder";

import Ionicons from "@expo/vector-icons/Ionicons";

//components
import { MyText } from "../../../constants/DefaultElements";

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
        width: "90%",
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
          <MyText co="white">{name}</MyText>
          <MyText fz={18} fw="700" co="white">
            {new Intl.NumberFormat("pl-PL", {
              style: "currency",
              currency: "PLN",
            }).format(price)}
          </MyText>
        </View>
        {description && <MyText co="white">{description}</MyText>}
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
          <Ionicons name="close-circle-outline" color={"white"} size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Order;
