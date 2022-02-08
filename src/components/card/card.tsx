import React from "react";
import { IRequests } from "@/utils/api/data-types";
import styled from "styled-components";
import { theme } from "@/styles/theme";

const Card = (props: { items: IRequests }) => {
  return (
    <Container>
      <CardWarp>
        <Header>
          <TitleWarp>
            <h1>{props.items.title}</h1>
            <h3>{props.items.client}</h3>
            <span>{props.items.due}까지 납기</span>
          </TitleWarp>
          <IsConsult status={props.items.status}>
            <span>{props.items.status}</span>
          </IsConsult>
        </Header>
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
        <BtnWarp>
          <ButtonLeft>
            <span>요청 내역 보기</span>
          </ButtonLeft>
          <ButtonRight>
            <span>채팅하기</span>
          </ButtonRight>
        </BtnWarp>
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
  border: 1px solid ${theme.color.GRAY};
  border-radius: 4px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    width: 320px;
    height: 344px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleWarp = styled.div`
  width: 100%;
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
    color: ${theme.color.FONTGRAY};
  }
`;

const IsConsult = styled.div<{ status: string }>`
  width: 55px;
  height: 24px;
  display: ${(props) => (props.status === "상담중" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  background: ${theme.color.WHITE};
  border: 1px solid ${theme.color.ORANGE};
  box-sizing: border-box;
  border-radius: 12px;

  span {
    height: 100%;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    color: ${theme.color.ORANGE};
  }
`;

const Diveder = styled.div`
  width: 334px;
  height: 0px;
  border: 1px solid ${theme.color.GRAY};

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    width: 288px;
  }
`;

const ListWarp = styled.ul`
  padding: 0;
  margin-top: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  li {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 8px;
  }
`;

const Category = styled.span`
  width: 70px;
  font-size: 14px;
  line-height: 20px;
  margin-right: 20px;
`;

const Contents = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;

const BtnWarp = styled.div`
  button {
    border: 1px solid ${theme.color.SKY};
    height: 32px;
    flex-shrink: 0;
    border-radius: 4px;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const ButtonLeft = styled.button`
  background: ${theme.color.SKY};
  width: 108px;
  height: inherit;
  text-align: center;
  margin-right: 8px;

  span {
    color: ${theme.color.WHITE};
  }
`;

const ButtonRight = styled.button`
  width: 76px;
  background: ${theme.color.WHITE};

  span {
    color: ${theme.color.SKY};
  }
`;
