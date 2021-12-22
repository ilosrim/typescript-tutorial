export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, headeing, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = headeing;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
