import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// component
import Card from '../card/card';
// type
import { RequestsArray } from '@/utils/api/data-types';
// style
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import Toggle from '../common/toggle';
import SelectFilter from '../filters/selectfilter';
// import Filters from '../filters/filters';

const MainBoard = () => {
  const [data, setData] = useState<RequestsArray | null>([]);

  const [checkedMethod, setCheckedMethod] = React.useState<string[]>([]);
  const [checkedMaterial, setCheckedMaterial] = React.useState<string[]>([]);
  // const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleCheckMethod = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, checked } = event.target as HTMLInputElement;
    if (checked) {
      setCheckedMethod([...checkedMethod, name]);
    } else {
      setCheckedMethod(checkedMethod.filter((option) => option !== name));
    }
  };

  const handleCheckMaterial = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, checked } = event.target as HTMLInputElement;

    if (checked) {
      setCheckedMaterial([...checkedMaterial, name]);
    } else {
      setCheckedMaterial(checkedMaterial.filter((option) => option !== name));
    }
  };

  console.log(checkedMethod);
  console.log(checkedMaterial);

  const [isConsulting, setIsConsulting] = useState(false);

  const toggleConsulting = () => {
    isConsulting ? setIsConsulting(false) : setIsConsulting(true);
  };

  const showFilteredMethod = () => {
    if (checkedMethod.length === 0) {
      setData(data);
    } else {
      setData(
        Array.from(data).filter((data) => {
          return checkedMethod.name.indexOf(data.method) !== -1;
        })
      );
    }
  };

  const getData = async () => {
    const json = await (await fetch('http://localhost:4000/requests')).json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  // const onToggle = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setIsToggled(!isToggled);
  // };

  // useEffect(() => {
  //   console.log("toggle 되고 있습니다");
  // }, [isToggled]);

  // console.log("main Board isToggled", isToggled);

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
          <Toggle onToggle={toggleConsulting} />
          <SelectFilter
            checkedMethod={checkedMethod}
            setCheckedMethod={setCheckedMethod}
            handleCheckMethod={handleCheckMethod}
            checkedMaterial={checkedMaterial}
            setCheckedMaterial={setCheckedMaterial}
            handleCheckMaterial={handleCheckMaterial}
          />
          {/* 여기에 filter, toggle  */}
        </Header>

        <CardWarp>
          {data
            ?.filter((e) => {
              if (isConsulting) {
                return e.status === '상담중';
              } else {
                return e;
              }
            })
            .map((data, idx) => (
              <React.Fragment key={idx}>
                <Card
                  items={data}
                  // isToggled={isToggled}
                />
              </React.Fragment>
            ))}
          {/* 빈 카드인 경우 page */}
        </CardWarp>
      </Warpper>
    </Container>
  );
};

export default MainBoard;

const Container = styled.section`
  margin-top: 70px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Warpper = styled.div`
  /* width: 1130.01px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  color: ${theme.color.FONTCOLOR};
  margin-bottom: 96px;
  /* border: 5px solid yellow; */
`;

const FilterWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 192px;
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

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-rows: repeat(2, 356px);
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (min-width: 825px) and (max-width: 991px) {
    display: grid;
    grid-template-rows: repeat(2, 356px);
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media screen and (max-width: 825px) {
    display: grid;
    grid-template-rows: repeat(2, 356px);
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-rows: repeat(2, 356px);
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    display: grid;
    grid-template-rows: repeat(2, 356px);
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    border: 1px solid red;
  }
`;
