import React from "react";
import { IRequests } from "@/utils/api/data-types";
import styled from "styled-components";
import { theme } from "@/styles/theme";

const Card = (props: { items: IRequests }) => {
  return (
    <Container>
      <CardWarp>
        <TitleWarp>
          <h1>{props.items.title}</h1>
          <h3>{props.items.client}</h3>
          <span>{props.items.due}</span>
        </TitleWarp>
        <Diveder></Diveder>
        <ListWarp>
          <li>
            <Category>도면개수</Category>
            <Contents>{props.items.count}개</Contents>
          </li>
          <li>
            <Category>총 수량</Category>
            <Contents>{props.items.amount}개</Contents>
          </li>
          <li>
            <Category>가공방식</Category>
            <Contents>{props.items.method.join(", ")}</Contents>
          </li>
          <li>
            <Category>재료</Category>
            <Contents>{props.items.material.join(", ")}</Contents>
          </li>
        </ListWarp>
        <BrnWarp>
          <ButtonLeft /> <ButtonRight />
        </BrnWarp>
      </CardWarp>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const CardWarp = styled.div`
  width: 366px;
  height: 356px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TitleWarp = styled.div`
  height: 108px;
  h1 {
    position: static;
    width: 125px;
    height: 24px;
    left: 0px;
    top: 0px;

    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    align-items: center;
  }

  h3 {
    font-weight: 500;
    font-size: 14px;
  }
  span {
    font-size: 14px;
    color: #939fa5;
  }
`;

const Diveder = styled.div`
  width: 334px;
  height: 0px;
  border: 1px solid #e5e5e5;
`;

const ListWarp = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  li {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const Category = styled.span`
  width: 30%;
`;

const Contents = styled.span`
  width: 70%;
`;

const BrnWarp = styled.div`
  button {
    border: 1px solid ${theme.color.SKY};
    height: 36px;
    line-height: 36px;
    flex-shrink: 0;
    border-radius: 8px;
    text-align: center;
  }
`;

const ButtonLeft = styled.button`
  width: 100px;
  background-color: ${theme.color.SKY};
`;

const ButtonRight = styled.button`
  width: 100px;
  color: ${theme.color.WHITE}
  background-color: ${theme.color.SKY}
`;
