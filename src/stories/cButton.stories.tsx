import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { countButton, countButton2} from './Button';

export default {
  title: 'Example/cButton',
  component: countButton,
};

// const Template: ComponentStory<typeof countButton> = (args) => <button {...args} />;

export const Primary = () => countButton();
export const Primary2 = () => countButton();