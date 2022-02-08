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
import TagButton from '../common/tagbutton';
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

  const onReset = () => {};

  return (
    <Container>
      <Warpper>
        <Header>
          <FilterWarp>
            <TitleWarp>
              <h3>들어온 요청</h3>
              <span>파트너님에게 딱 맞는 요청서를 찾아보세요</span>
            </TitleWarp>

            <Display>
              <SelectWarp>
                <SelectFilter></SelectFilter>
                <TagButton onReset={onReset} />
              </SelectWarp>
              <ToggleWarp>
                <Toggle onToggle={toggleConsulting} />
                <span>상담 중인 요청만 보기</span>
              </ToggleWarp>
            </Display>
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
                <Card items={data} />
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
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Warpper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 192px;
  color: ${theme.color.FONTCOLOR};
  margin-bottom: 32px;
`;

const FilterWarp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    align-items: flex-start;
  }
`;

const Display = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    flex-direction: column;
  }
`;

const ToggleWarp = styled.div`
  width: 179px;
  height: 20px;
  display: flex;
  justify-content: space-between;

  > span {
    width: 126px;
    height: 20px;
    font-size: 14px;
    color: ${theme.color.FONTCOLOR};
    font-weight: 500;
  }
`;

const TitleWarp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    margin: 0;
    width: 284px;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    line-height: 32px;
  }

  span {
    margin: 0;
    width: 284px;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
  }
`;

const SelectWarp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
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
    grid-template-rows: repeat(1, 356px);
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    margin-bottom: 16px;
  }
`;
