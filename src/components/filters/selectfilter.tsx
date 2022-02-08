import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowDropDownGray } from '@/assets/image';
import { ArrowDropDownWhite } from '@/assets/image';
import { theme } from '@/styles/theme';

export const METHODS = [
  { id: 0, name: '밀링' },
  { id: 1, name: '선반' },
];

export const MATERIALS = [
  { id: 0, name: '알루미늄' },
  { id: 1, name: '탄소강' },
  { id: 2, name: '구리' },
  { id: 3, name: '합금강' },
  { id: 4, name: '강철' },
];

interface typeMethod {
  checkedMethod: string[];
  setCheckedMethod: React.Dispatch<React.SetStateAction<string[]>>;
  handleCheckMethod: (event: React.FormEvent<HTMLInputElement>) => void;
  checkedMaterial: string[];
  setCheckedMaterial: React.Dispatch<React.SetStateAction<string[]>>;
  handleCheckMaterial: (event: React.FormEvent<HTMLInputElement>) => void;
}

interface FocusType {
  select: number;
  active: string;
  inactive: string;
}

const SelectFilter = (props: typeMethod) => {
  const [materialToggle, setMaterialToggle] = useState(0);
  const [methodToggle, setMethodToggle] = useState(0);

  const handleMaterialToggle = () => {
    materialToggle ? setMaterialToggle(0) : setMaterialToggle(1);
  };

  const handleMethodToggle = () => {
    methodToggle ? setMethodToggle(0) : setMethodToggle(1);
  };

  // console.log('method', checkedMethod);
  // console.log('material', checkedMaterial);

  return (
    <Wrapselect>
      <Selectbox>
        <Btnselect
          select={props.checkedMethod.length}
          onClick={handleMethodToggle}
          active={ArrowDropDownWhite}
          inactive={ArrowDropDownGray}
        >
          <span>가공방식</span>
          <Countitem select={props.checkedMethod.length}>
            ({props.checkedMethod.length})
          </Countitem>
        </Btnselect>
        <Itemlist mode={methodToggle}>
          {METHODS.map((option) => {
            return (
              <Item key={option.id}>
                <Input
                  type="checkbox"
                  name={option.name}
                  onChange={props.handleCheckMethod}
                  checked={props.checkedMethod.includes(option.name)}
                />
                {option.name}
              </Item>
            );
          })}
        </Itemlist>
      </Selectbox>
      <Selectbox>
        <Btnselect
          select={props.checkedMaterial.length}
          onClick={handleMaterialToggle}
          active={ArrowDropDownWhite}
          inactive={ArrowDropDownGray}
        >
          재료
          <Countitem select={props.checkedMaterial.length}>
            ({props.checkedMaterial.length})
          </Countitem>
        </Btnselect>
        <Itemlist mode={materialToggle}>
          {MATERIALS.map((option) => {
            return (
              <Item key={option.id}>
                <Input
                  type="checkbox"
                  name={option.name}
                  onChange={props.handleCheckMaterial}
                  checked={props.checkedMaterial.includes(option.name)}
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
  background-color: ${theme.color.WHITE};
  border: 1px solid ${theme.color.FONTGRAY};
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;

  background: url(${(props) => (props.select ? props.active : props.inactive)})
    center right 13.5px no-repeat
    ${(props) =>
      props.select ? `${theme.color.BLUE}` : `${theme.color.WHITE}`};

  color: ${(props) =>
    props.select ? `${theme.color.WHITE}` : `${theme.color.BLACK}`};
  :hover {
    border: 1px solid ${theme.color.LIGHTBLUE};
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
  border: 1px solid ${theme.color.FONTGRAY};
  background-color: ${theme.color.WHITE};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 17px 12px;
`;

const Item = styled.li`
  color: ${theme.color.FONTCOLOR};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  box-sizing: border-box;

  & + & {
    margin-top: 8px;
  }
`;

const Input = styled.input`
  margin-right: 10px;
`;
