//@flow
export type RecipeModel = {
    id: number;
    title: string;
    image: string;
};

export type State = RecipeModel[];

//   export const filterCompleted = RecipeModel => todos.filter(t =>
// t.completed);   export const filterActive = RecipeModel => todos.filter(t =>
// !t.completed);