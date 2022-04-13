import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./shoppingButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const addToTheCar = Template.bind({});
addToTheCar.args = {
  label: "加入購物車",
  className: "light-button",
};
export const orderOnline = Template.bind({});
orderOnline.args = {
  label: ">>  Order Online",
  className: "light-button",
};
export const pay = Template.bind({});
pay.args = {
  label: "結帳",
  className: "light-button",
};