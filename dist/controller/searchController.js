"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saerch = void 0;
const pet_1 = require("../models/pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const saerch = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect("/");
        return;
    }
    let list = pet_1.Pet.getFromName(query);
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuObject)(""),
        list,
        query,
    });
};
exports.saerch = saerch;
//# sourceMappingURL=searchController.js.map