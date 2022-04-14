import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./shoppingButton";

export default {
  title: "Library/Button",
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const addToTheCar = Template.bind({});
addToTheCar.args = {
  label: "加入購物車",
  className: "light-button",
};