import { Sheet } from "@tamagui/sheet";
import { View, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { useOrder } from "../store/useOrder";
import {
  Button,
  Input,
  Stack,
  XStack,
  YStack,
  Text,
  GetProps,
  styled,
} from "tamagui";
import { ChevronUp, ChevronDown } from "lucide-react-native";
import { BlurView } from "expo-blur";
import Colors from "../../constants/Colors";
import OrderListItem from "./SheetComponents/OrderListItem";
import Order from "./BottomSheetComponents/Order";
import dishesData from "../../constants/dishesData";
import { color } from "@tamagui/themes";

const windowHeight = Dimensions.get("window").height;

const FoldedContent = ({ unfold }) => {
  const { totalPrice } = useOrder();
  return (
    <YStack height={190} padding={15}>
      <XStack justifyContent="space-between" alignItems="center">
        <Text color={Colors.white} fontSize={24} fontWeight={"700"}>
          Moje zamówienie
        </Text>
        <Button unstyled pressStyle={{ opacity: 0.5 }} onPress={() => unfold()}>
          <Button.Icon>
            <ChevronUp size={43} color="#FFF" />
          </Button.Icon>
        </Button>
      </XStack>
      <XStack justifyContent="space-between" alignItems="center">
        <Text color={Colors.white} fontSize={20}>
          Kwota mojego zamówienia
        </Text>
        <Text color={Colors.white} fontSize={23} fontWeight={"700"}>
          {totalPrice}
        </Text>
      </XStack>
    </YStack>
  );
};
const UnfoldedContent = ({ fold }) => {
  const { orders, totalPrice, removeOrder } = useOrder();
  const Section = styled(XStack, {
    name: "Section",
    borderColor: "#FFF",
    borderStyle: "dashed",
    borderBottomWidth: 2,
  });

  return (
    <YStack height={(25 / 100) * windowHeight} padding={15}>
      <Section justifyContent="space-between" bc={""}>
        <Text color={Colors.white} fontSize="$9" fontWeight={"700"}>
          Twoje zamówienie
        </Text>
        <Button unstyled pressStyle={{ opacity: 0.5 }} onPress={() => fold()}>
          <Button.Icon>
            <ChevronDown size={43} color="#FFF" />
          </Button.Icon>
        </Button>
      </Section>
      <Section>
        <YStack>
          {orders != null
            ? orders.map((item, index) => (
                <OrderListItem
                  key={item.orderId}
                  orderId={item.orderId}
                  number={index}
                  content={dishesData[item.dishId - 1]}
                />
              ))
            : null}
        </YStack>
      </Section>
    </YStack>
  );
};

export const SheetDemo = () => {
  const { orders } = useOrder();
  const [price, setPrice] = useState<number>(0);
  const [position, setPosition] = useState(1);

  const [open, setOpen] = useState(false);

  const snapPoints = [(85 / 100) * windowHeight, (25 / 100) * windowHeight];
  useEffect(() => {
    orders.length > 0 ? setOpen(true) : setOpen(false);
  }, [orders]);

  return (
    <>
      <Sheet
        forceRemoveScrollEnabled={open}
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={snapPoints}
        snapPointsMode="constant"
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="quick"
      >
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Sheet.Handle
          unstyled
          style={{ borderColor: "#00F", borderWidth: 0 }}
        />

        <Sheet.Frame
          pos={"absolute"}
          padding="$4"
          space="$5"
          backgroundColor={Colors.textGray}
          elevation={16}
        >
          {position == 1 ? (
            <FoldedContent unfold={() => setPosition(0)} />
          ) : (
            <UnfoldedContent fold={() => setPosition(1)} />
          )}
        </Sheet.Frame>
      </Sheet>
    </>
  );
};
