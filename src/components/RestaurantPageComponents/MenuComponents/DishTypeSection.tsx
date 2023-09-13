import { StyleSheet, View } from "react-native";
import Colors from "../../../../constants/Colors";
import DishListElement from "./DishListElement";
import dishesData from "../../../../constants/dishesData";

//components
import { MyText } from "../../../../constants/DefaultElements";

const DishTypeSection = ({ dishType, restaurantName, navigateToDish }: any) => {
  return (
    <View>
      {dishType.map((type: String, index: Number) => (
        <View key={index}>
          <>
            {dishesData.some(
              (item) => item.type == type && item.restaurant == restaurantName
            ) && (
              <MyText fz={26} fw="700">
                {type}:{" "}
              </MyText>
            )}
          </>
          <>
            {dishesData.map((item, index) =>
              item.type == type && item.restaurant == restaurantName ? (
                <DishListElement
                  key={index}
                  content={item}
                  navigateToDish={navigateToDish}
                />
              ) : null
            )}
          </>
        </View>
      ))}
    </View>
  );
};

export default DishTypeSection;
