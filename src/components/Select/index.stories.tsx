import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './index';

type Props = {};
function SelectExample({}: Props) {
  return (
    <Select>
      <Select.Input />
      <Select.Options>
        <Select.Option>value1</Select.Option>
        <Select.Option>value2</Select.Option>
        <Select.Option>value3</Select.Option>
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