import { Controller } from "../controllers/controller.js";
import { View } from "../views/view.js";
import { Counter } from "./../models/counter.js"

function main()
{
    let controller = new Controller();

    let view = new View(controller);
    controller.addObserver(view);
}
window.addEventListener("load", main);

