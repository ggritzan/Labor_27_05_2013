function TaskDetailsnd(container, data){
    this.container = container;
    this.data = data;
    this.render = function() {
        //erzeugen der Überschrift und allgemeiner Beschreibung
        var headLineElement = document.createElement('h1');
        var headLineText = document.createTextNode('Aufgabenbeschreibung');
        //Verknüpfen
        headLineElement.appendChild(headLineText);
        //Überschrift ins DOM hängen
        this.container.appendChild(headLineElement);
        //Titel
        var taskTitleElement = document.createElement('h2');
        var titleText = document.createTextNode(this.data.title);
        //Verknüpfung
        taskTitleElement.appendChild(titleText);
        //Ins DOM -> Document Object Model
        this.container.appendChild(taskTitleElement);
        //Datum
        var dateElement = document.createElement('p');
        var dateText = document.createTextNode(this.data.due);
        dateElement.appendChild(dateText);
        this.container.appendChild(dateElement);
        //Beschreibungstext
        var desElement = document.createElement('p');
        var desText = document.createTextNode(this.data.description);
        desElement.appendChild(desText);
        this.container.appendChild(desElement);
    }
}