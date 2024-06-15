import Button from "../Button";

export default {
  title: "Components/Button"
};

export const Default = {
  render: () => <Button>Search</Button>,
  name: "default"
};

export const Transparent = {
  render: () => <Button transparent>TV</Button>,
  name: "transparent"
};
