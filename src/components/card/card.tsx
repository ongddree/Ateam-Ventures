import React from 'react';
import { IRequests } from '@/utils/api/data-types';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

const Card = (props: { items: IRequests }) => {
  return (
    <Container>
      <CardWarp>
        <Header>
          <TitleWarp>
            <h1>{props.items.title}</h1>
            <h3>{props.items.client}</h3>
            <span>{props.items.due}</span>
          </TitleWarp>
          {/* {props.isToggled === true && ( */}
          <IsConsult status={props.items.status}>
            <span>{props.items.status}</span>
          </IsConsult>
          {/* )} */}
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
            <Contents>{props.items.method.join(', ')}</Contents>
          </li>
          <li>
            <Category>재료</Category>
            <Contents>{props.items.material.join(', ')}</Contents>
          </li>
        </ListWarp>
        <BrnWarp>
          <ButtonLeft>
            <span>요청 내역 보기</span>
          </ButtonLeft>
          <ButtonRight>
            <span>채팅하기</span>
          </ButtonRight>
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
    color: #939fa5;
  }
`;

const IsConsult = styled.div<{ status: string }>`
  width: 55px;
  height: 24px;
  display: ${(props) => (props.status === '상담중' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ffa000;
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
    color: #ffa000;
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
    justify-content: flex-start;
  }
`;

const Category = styled.span`
  width: 70px;
`;

const Contents = styled.span`
  display: flex;
  align-items: center;
`;

const BrnWarp = styled.div`
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
