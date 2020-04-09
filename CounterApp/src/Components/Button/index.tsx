import React from "react";
import Styled from "styled-components/native";

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
  iconName: "plus" | "minus";
  onPress?: () => void;
}

const Button = ({ iconName, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon
        source={
          iconName === "plus"
            ? require("~/Assets/images/add_circle-black-18dp/1x/baseline_add_circle_black_18dp.png")
            : require("~/Assets/images/remove_circle-black-18dp/1x/baseline_remove_circle_black_18dp.png")
        }
      />
    </Container>
  );
};

export default Button;
