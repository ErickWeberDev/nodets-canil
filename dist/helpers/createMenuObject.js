"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (active) => {
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
exports.createMenuObject = createMenuObject;
//# sourceMappingURL=createMenuObject.js.map