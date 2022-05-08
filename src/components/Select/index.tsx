/*
* - Input에 포커스가 있고, 한 글자 이상 입력이 되었을 경우 옵션 목록이 보인다.
* - loading 시에는 Loading UI가 보인다.
* - 검색 결과가 비어있을 경우에는 Empty UI가 보인다.
*/

/*
  TODO: 만들고자하는 최종 형태
  <Select>
    <Select.Input />
    <Select.Options>
      <Select.Option value="value1">value1</Select.Option>
      <Select.Option value="value2">value2</Select.Option>
      <Select.Option value="value3">value3</Select.Option>
    </Select.Options>
    <Select.Loading>{로딩시 나올 페이지}</Select.Loading>
    <Select.Empty>{결과가 비어있을때 나올 페이지}</Select.Empty>
  </Select>
*/

import React from 'react';
import { SelectProvider } from './context';

type Props = {
  children: React.ReactNode
};

function Select({ children }: Props) {
  return (
    <SelectProvider>
      {children}
    </SelectProvider>
  );
}

function Input() {
  return (
    <input />
  );
}

function Options({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
};

function Option({ children }: { children: React.ReactNode }) {
  return (
    <div>{children}</div>
  );
};

Select.Input = Input;
Select.Options = Options;
Select.Option = Option;

export default Select;