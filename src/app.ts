//tsc
//npm run compile

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

//const selectedCategory: Category = selectedRadioElement.value as Category; //Aliasy Type casting
let selectedCategory: Category;

//Type aliasing
type Category = "general" | "work" | "gym" | "hobby";

interface Task {
  title: string;
  done: boolean;
  category?: Category; //Type literal/ string | number union type
}

const categories: Category[] = ["general", "work", "gym", "hobby"];
//const categories: string[] = ["general", "work", "gym", "hobby"];

//const tasks: { title: string; done: boolean }[] = [
const tasks: Task[] = [
  { title: "Wyrzucić śmieci", done: false },
  { title: "Pójść na tańce", done: true, category: "hobby" },
  { title: "Pójść na siłkę", done: true, category: "gym" },
  { title: "Nakarmić kota", done: false, category: "work" },
];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    const id: string = `task-${index}`;

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.title;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.title = task.title;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });
    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    tasksContainerElement.appendChild(taskElement);
  });
};

const renderCategories = () => {
  console.log("Kategoria");
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");

    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      selectedCategory = category;
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerElement.appendChild(categoryElement);
    console.log("Kategoria");
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};
addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({
    title: taskNameInputElement.value,
    done: false,
    category: selectedCategory,
  });
  render();
});

addTask({ title: "Wrzutka", done: false, category: "work" });
renderCategories();
console.log("Kategoria");
render();

/*
const addButtonElement = document.querySelector("button");

const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
  return hasDiscount ? originalPrice * 0.8 : originalPrice;
};

addButtonElement.addEventListener("click", () => {
  const originalPrice: number = 100;
  const hasDiscount: boolean =
    new URLSearchParams(window.location.search).get("discount") === "true";
  console.log(calculatePrice(originalPrice, hasDiscount));
});
*/
//console.log("Test1");

//let age: number = 31;

//let age = 29;
/*
let age;
age = "testttt";
age = 3;
console.log(age);

const logAge = (age: number | string) =>{ //union type
    console.log(`Hej mam ${age} lat!`)
}

logAge(31);
logAge("trzydzieści jeden");
*/
//console.log(add(10, ""));

/*
const input1Element: HTMLInputElement = document.querySelector("#input1");
const input2Element: HTMLInputElement = document.querySelector("#input2");

const addButtonElement = document.querySelector("button");

const add = (v1: number, v2: number) => v1 + v2;

addButtonElement.addEventListener("click", () => {
    const sum = add(Number(input1Element.value), Number(input2Element.value));
    console.log(sum);
});
*/
