import React, { useState } from 'react';
import styled from 'styled-components';

const METHODS = [
  { id: 0, name: '밀링' },
  { id: 1, name: '선반' },
];

const MATERIALS = [
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

const SelectFilter = (props: typeMethod) => {
  const [materialToggle, setMaterialToggle] = useState(false);
  const [methodToggle, setMethodToggle] = useState(false);

  const handleMaterialToggle = () => {
    materialToggle ? setMaterialToggle(false) : setMaterialToggle(true);
  };

  const handleMethodToggle = () => {
    methodToggle ? setMethodToggle(false) : setMethodToggle(true);
  };

  // console.log('method', checkedMethod);
  // console.log('material', checkedMaterial);

  return (
    <Wrapselect>
      <Selectbox>
        <Btnselect onClick={handleMethodToggle}>
          가공방식
          <Countitem>({props.checkedMethod.length})</Countitem>
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
        <Btnselect onClick={handleMaterialToggle}>
          재료
          <Countitem>({props.checkedMaterial.length})</Countitem>
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

const Btnselect = styled.button`
  width: 76px;
  height: 32px;
  padding: 9px 9px 12px;
  display: block;
  font-size: 12px;
  background-color: #fff;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  :hover {
    border: 1px solid #2196f3;
  }
`;

const Countitem = styled.span``;

const Itemlist = styled.ul<{ mode: boolean }>`
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
