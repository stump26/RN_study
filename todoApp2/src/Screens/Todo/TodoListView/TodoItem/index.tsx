import React from "react";
import Styled from "styled-components/native";

const Container = Styled.View`
  flex-direction: row;
  background-color: #FFF;
  margin:4px 16px;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
`;
const Label = Styled.Text`
  flex:1;
`;
const DeleteButton = Styled.TouchableOpacity``;
const Icon = Styled.Image`
  width: 24px;
  height: 24px;
`;

interface Props {
  text: string;
  onDelete: () => void;
}

const TodoItem = ({ text, onDelete }: Props) => {
  return (
    <Container>
      <Label>{text}</Label>
      <DeleteButton onPress={onDelete}>
        <Icon
          source={require("~/Assets/images/remove_circle-black-18dp/1x/baseline_remove_circle_black_18dp.png")}
        />
      </DeleteButton>
    </Container>
  );
};

export default TodoItem;
