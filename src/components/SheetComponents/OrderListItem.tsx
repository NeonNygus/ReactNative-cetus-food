import { View } from "react-native";
import { TouchableOpacity } from "react-native";

import { useOrder } from "../../store/useOrder";

import { XStack, YStack, Stack, Text, styled, Button, GetProps } from "tamagui";
import { XCircle } from "lucide-react-native";
//components
import { MyText } from "../../../constants/DefaultElements";
import Colors from "../../../constants/Colors";

type OrderProps = {
  orderId: number;
  number: number;
  content: { id: number; name: string; price: number; description?: string };
};

const OrderListItem = (props: OrderProps) => {
  const number = props.number + 1;
  const { id, name, price, description } = props.content;
  const { orders, removeOrder } = useOrder();
  styled(Text, {
    color: Colors.white,
  });
  return (
    <XStack>
      <YStack width={"80%"}>
        <XStack justifyContent="space-between">
          <Text color={Colors.white}>
            {number}. {name}
          </Text>
          <Text color={Colors.white} fontSize={20} fontWeight={"700"}>
            {price}
          </Text>
        </XStack>
        <Stack>
          <Text color={Colors.white}> {description}</Text>
        </Stack>
      </YStack>
      <Button
        width={"20%"}
        unstyled
        pressStyle={{ opacity: 0.5 }}
        onPress={() => removeOrder(props.orderId)}
        justifyContent="center"
        alignItems="center"
      >
        <Button.Icon>
          <XCircle size={33} color="#FFF" />
        </Button.Icon>
      </Button>
    </XStack>
  );
};
export default OrderListItem;
