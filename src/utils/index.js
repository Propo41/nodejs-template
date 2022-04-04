import { test1 } from "./test1/index";

console.log("utils!!");

const pop = () => {
  console.log("pop");
  test1();
};

export { pop };
