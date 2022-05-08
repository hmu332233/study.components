import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './index';

const ITEMS = [{
  id: 1,
  text: 'text1',
  value: 'value1',
}, {
  id: 2,
  text: 'text2',
  value: 'value2',
}, {
  id: 3,
  text: 'text3',
  value: 'value3',
}];

const fetchData = (query: string) => new Promise(resolve => {
  setTimeout(() => { resolve(ITEMS.filter(item => item.text.includes(query))) }, 1000)
});

type Props = {};
function SelectExample({}: Props) {
  const [optionsState, setOptionsState] = useState('loading');
  const [items, setItems] = useState([]);
  const handleChange = async (value: string) => {
    setOptionsState('loading');
    const data = await fetchData(value);
    setItems(data);
    setOptionsState(data.length > 0 ? 'show' : 'empty');
  }


  return (
    <Select>
      <Select.Input onChange={handleChange} displayValue={item => item.text} />
      <Select.Options>
        {optionsState === 'show' && items.map(item => (
          <Select.Option key={item.id} value={item}>{item.text}</Select.Option>
        ))}
        {optionsState === 'loading' && 'loading'}
        {optionsState === 'empty' && 'empty'}
        {/* <Select.Loading>Loading</Select.Loading>
        <Select.Empty>Empty</Select.Empty> */}
      </Select.Options>
    </Select>
  );
}



export default {
  title: 'Components/Select',
  component: SelectExample,
} as ComponentMeta<typeof SelectExample>;

const Template: ComponentStory<typeof SelectExample> = (args) => <SelectExample {...args} />;

export const Basic = Template.bind({});
Basic.args = {};