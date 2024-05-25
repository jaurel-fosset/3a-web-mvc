import { Observer } from "../pattern/observer.js";

export class View extends Observer
{
    #controller

    constructor(controller)
    {
        super();
        this.#controller = controller;

        let increment = document.querySelector("#btn-increment");
        increment.addEventListener("click", controller.incrementCounter.bind(controller));

        let decrement = document.querySelector("#btn-decrement");
        decrement.addEventListener("click", controller.decrementCounter.bind(controller));
    }

    notify()
    {
        let counter = document.querySelector("#txt-counter");
        counter.innerHTML = this.#controller.counter;
    }
}