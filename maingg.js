window.addEventListener('load', function(){
    // Referenz auf das ul Element holen
    var taskListElement = document.querySelector('#task-list');
    var taskDetailsElement = document.querySelector('#task-details');
    // Task.json via Ajax holen
    Ajax.getJSON('http://localhost/Labor%2027.05.2013/tasks.json', function(data){

        // Iteration über alle task objekte
        data.tasks.forEach(function(task){

            var taskElement = document.createElement('li');
            var taskTitleText = document.createTextNode(task.title);

            // text an das li anhängen
            taskElement.appendChild(taskTitleText);

            // li ins DOM einfügen
            taskListElement.appendChild(taskElement);

            // li beim Eventhandler registrieren
            taskElement.addEventListener('click', function() {

                // alle Kinderelemente löschen
                taskDetailsElement.innerHTML = '';

                var taskDetails = new TaskDetailsGG(taskDetailsElement,task);

                // rendern
                taskDetails.render();

            });

        });



    });
});
