import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// component
import Card from "../card/card";
// type
import { RequestsArray } from "@/utils/api/data-types";
// style
import styled from "styled-components";
import { theme } from "@/styles/theme";

const MainBoard = () => {
  const [data, setData] = useState<RequestsArray | null>([]);

  const getData = async () => {
    const json = await await (
      await fetch("http://localhost:4000/requests")
    ).json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  const CardList = data?.map((data, idx) => (
    <React.Fragment key={idx}>
      <Card items={data} />
    </React.Fragment>
  ));

  return (
    <Container>
      <Warpper>
        <Header>
          <FilterWarp>
            <TitleWarp>
              <h3>들어온 요청</h3>
              <span>파트너님에게 딱 맞는 요청서를 찾아보세요</span>
            </TitleWarp>
          </FilterWarp>
          {/* 여기에 filter, toggle  */}
        </Header>
        <CardWarp>{CardList}</CardWarp>
      </Warpper>
    </Container>
  );
};

export default MainBoard;

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Warpper = styled.div`
  /* width: 69%; */
  width: 1130.01px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  color: ${theme.color.FONTCOLOR};
  /* border: 5px solid yellow; */
`;

const FilterWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 500px;
`;

const TitleWarp = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h3 {
    margin: 0;
    width: 284px;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  span {
    margin: 0;
    width: 284px;
    height: 24px;
  }
`;

const CardWarp = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 356px);
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  height: inherit;
  border: 1px solid red;
`;
