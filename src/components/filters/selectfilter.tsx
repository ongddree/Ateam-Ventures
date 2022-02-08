import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowDropDownGray } from '@/assets/image';
import { ArrowDropDownWhite } from '@/assets/image';

const METHODS = [
  { id: 0, name: '밀링' },
  { id: 1, name: '선방' },
];

const MATERIALS = [
  { id: 0, name: '알루미늄' },
  { id: 1, name: '탄소강' },
  { id: 2, name: '구리' },
  { id: 3, name: '합금강' },
  { id: 4, name: '강철' },
];

interface FocusType {
  select: number;
  active: string;
  inactive: string;
}

const SelectFilter = () => {
  const [checkedMethod, setCheckedMethod] = React.useState<string[]>([]);
  const [checkedMaterial, setCheckedMaterial] = React.useState<string[]>([]);
  const [materialToggle, setMaterialToggle] = useState(0);
  const [methodToggle, setMethodToggle] = useState(0);

  const handleMaterialToggle = () => {
    materialToggle ? setMaterialToggle(0) : setMaterialToggle(1);
  };

  const handleMethodToggle = () => {
    methodToggle ? setMethodToggle(0) : setMethodToggle(1);
  };

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

  console.log('method', checkedMethod);
  console.log('material', checkedMaterial);

  return (
    <Wrapselect>
      <Selectbox>
        <Btnselect
          select={checkedMethod.length}
          onClick={handleMethodToggle}
          active={ArrowDropDownWhite}
          inactive={ArrowDropDownGray}
        >
          <span>가공방식</span>
          <Countitem select={checkedMethod.length}>
            ({checkedMethod.length})
          </Countitem>
        </Btnselect>
        <Itemlist mode={methodToggle}>
          {METHODS.map((option) => {
            return (
              <Item key={option.id}>
                <Input
                  type="checkbox"
                  name={option.name}
                  onChange={handleCheckMethod}
                  checked={checkedMethod.includes(option.name)}
                />
                {option.name}
              </Item>
            );
          })}
        </Itemlist>
      </Selectbox>
      <Selectbox>
        <Btnselect
          select={checkedMaterial.length}
          onClick={handleMaterialToggle}
          active={ArrowDropDownWhite}
          inactive={ArrowDropDownGray}
        >
          재료
          <Countitem select={checkedMaterial.length}>
            ({checkedMaterial.length})
          </Countitem>
        </Btnselect>
        <Itemlist mode={materialToggle}>
          {MATERIALS.map((option) => {
            return (
              <Item key={option.id}>
                <Input
                  type="checkbox"
                  name={option.name}
                  onChange={handleCheckMaterial}
                  checked={checkedMaterial.includes(option.name)}
                />
                {option.name}
              </Item>
            );
          })}
        </Itemlist>
      </Selectbox>
    </Wrapselect>
  );
};

export default SelectFilter;

const Wrapselect = styled.section`
  display: flex;
`;

const Selectbox = styled.div`
  position: relative;
  & + & {
    margin-left: 8px;
  }
`;

const Btnselect = styled.button<FocusType>`
  height: 32px;
  padding: 9px 41px 9px 12px;
  display: flex;
  font-size: 12px;
  background-color: #fff;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;

  background: url(${(props) => (props.select ? props.active : props.inactive)})
    center right 13.5px no-repeat
    ${(props) => (props.select ? '#1565c0' : '#fff')};

  color: ${(props) => (props.select ? '#fff' : '#000')};
  :hover {
    border: 1px solid #2196f3;
  }
`;

const Countitem = styled.span<{ select: number }>`
  display: ${(props) => (props.select ? 'block' : 'none')};
`;

const Itemlist = styled.ul<{ mode: number }>`
  display: ${(props) => (props.mode ? 'block' : 'none')};
  position: absolute;
  margin: 0;
  width: 130px;
  top: 36px;
  border: 1px solid #939fa5;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 17px 12px;
`;

const Item = styled.li`
  color: #323d45;
  font-size: 14px;
  font-weight: 500;

  box-sizing: border-box;

  & + & {
    margin-top: 8px;
  }
`;

const Input = styled.input``;
