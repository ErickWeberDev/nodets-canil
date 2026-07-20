type Menu = "" | "all" | "dog" | "cat" | "fish";

export const createMenuObject = (active: Menu) => {
  let retunObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (active !== "") {
    retunObject[active] = true;
  }

  return retunObject;
};
