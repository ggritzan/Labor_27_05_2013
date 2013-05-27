function TaskDetailsGG(container, data){
    this.container = container;
    this.data = data;

    this.render = function() {
         // erzeugen der Überschrift
        var headlineElement = document.createElement('h1');
        var headlineText = document.createTextNode('Aufgabenbeschreibung');

        // Test ans h1 Element anhängen
        headlineElement.appendChild(headlineText);

        // anhängen der Überschrift im DOM
        this.container.appendChild(headlineElement);

        // Title
        var taskTitleElement = document.createElement('h2');
        var titleText = document.createTextNode(this.data.title);
        taskTitleElement.appendChild(titleText);

        // ans DOM anhängen
        this.container.appendChild(taskTitleElement);

        // Datum
        var dateElement = document.createElement('p');
        var dateText = document.createTextNode(this.data.due);
        dateElement.appendChild(dateText);

        this.container.appendChild(dateElement);

        //Beschreibung
        var descElement = document.createElement('p');
        var descText = document.createTextNode(this.data.description);
        descElement.appendChild(descText);

        this.container.appendChild(descElement);




    }



}
