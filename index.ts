#!/usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
let isAddMore: boolean = true;

type Answers = {
  todo: string;
  addMore: boolean;
};
while (isAddMore) {
  const answers: {
    todo: string;
    addMore: boolean;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "todo",
      message: "Add your new todo!",
    },
    {
      type: "confirm",
      name: "addMore",
      message: "Do you want add more todo's?",
    },
  ]);

  const { todo, addMore } = answers;
  isAddMore = addMore;

  if (todo) {
    todos.push(todo);
  } else {
    console.log("Invalid input");
  }
}
console.log("Todo list:\n");
todos.map((todo, index) => {
  console.log(`${++index}: ${todo}`);
});
