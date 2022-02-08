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
import { METHODS } from '../filters/selectfilter';
import { MATERIALS } from '../filters/selectfilter';
// import Filters from '../filters/filters';

const MainBoard = () => {
  const [data, setData] = useState<RequestsArray | null>();
  const [isConsulting, setIsConsulting] = useState(false);

  const [isChecked, setIsChecked] = useState(0);

  const [checkedMethod, setCheckedMethod] = React.useState<string[]>([]);
  const [checkedMaterial, setCheckedMaterial] = React.useState<string[]>([]);

  const toggleConsulting = () => {
    isConsulting ? setIsConsulting(false) : setIsConsulting(true);
  };

  // method 담아주는 함수
  const handleCheckMethod = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, checked } = event.target as HTMLInputElement;
    // checked
    if (checked) {
      setCheckedMethod([...checkedMethod, name]);

      // !checked
    } else {
      setCheckedMethod(checkedMethod.filter((option) => option !== name));
    }
  };

  // Material 담아주는 함수
  const handleCheckMaterial = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, checked } = event.target as HTMLInputElement;

    // checked
    if (checked) {
      setCheckedMaterial([...checkedMaterial, name]);

      // !checked
    } else {
      setCheckedMaterial(checkedMaterial.filter((option) => option !== name));
    }
  };

  // data => 배열[{}]
  // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
  // indexOf() 메서드는 배열의 특정한 값을 갖는 문자열을 갖고 있는 인덱스 번호를 반환

  const hadleFilteredMethod = (event: React.FormEvent<HTMLInputElement>) => {
    // const { name } = event.target as HTMLInputElement;

    if (checkedMethod.length === 0) {
      setData(data);
    } else {
      for (let i = 0; i < checkedMethod.length; i++) {
        const filterResult = data?.filter((e) =>
          checkedMethod.includes(e.method[i])
        );
        setData(filterResult);
      }
    }
  };

  const getData = async () => {
    const json = await (await fetch('http://localhost:4000/requests')).json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  const onReset = () => {
    setCheckedMethod([]);
    setCheckedMaterial([]);
  };

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
                <SelectFilter
                  checkedMethod={checkedMethod}
                  setCheckedMethod={setCheckedMethod}
                  handleCheckMethod={handleCheckMethod}
                  checkedMaterial={checkedMaterial}
                  setCheckedMaterial={setCheckedMaterial}
                  handleCheckMaterial={handleCheckMaterial}
                />
                <TagButton onReset={onReset} />
              </SelectWarp>
              <ToggleWarp>
                <Toggle onToggle={toggleConsulting} />
                <span>상담 중인 요청만 보기</span>
              </ToggleWarp>
            </Display>
          </FilterWarp>

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
            .filter((item) => {
              if (checkedMethod.length === 0) return true;
              else if (checkedMethod.length < METHODS.length) {
                for (let i = 0; i < checkedMethod.length; i++) {
                  return item.method.includes(checkedMethod[i]);
                }
              } else if ((checkedMethod.length = METHODS.length)) return true;
            })
            .filter((item) => {
              if (checkedMaterial.length === 0) return true;
              else if (checkedMaterial.length < MATERIALS.length) {
                for (let i = 0; i < checkedMaterial.length; i++) {
                  return item.material.includes(checkedMaterial[i]);
                }
              } else if ((checkedMaterial.length = MATERIALS.length))
                return true;
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
