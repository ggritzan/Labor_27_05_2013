//load -> erster Parameter, function(){} -> zweiter Parameter
window.addEventListener('load', function() {
    //Rfernez auf das ul Element holen
    //document.querySelector holt eine Line aus der DOM
    var taskListElement = document.querySelector('#tasklist');
    var taskDetailsElement = document.querySelector('#taskdetails');
    // Tasks.json via Ajax holen
    Ajax.getJSON('http://localhost/Labor_27_05_2013/tasks.json', function(data) {
        //Iteration über alle Task-Objects
        data.tasks.forEach(function(task){
            var taskElement = document.createElement('li');
            var taskTitleText = document.createTextNode(task.title);
            //Text ans li anhängen
            taskElement.appendChild(taskTitleText);
            //ins html-Dokument einfügen
            taskListElement.appendChild(taskElement);
            //Deatilliste implementieren

            //Eventhandler auf Klick öffnen sich die Deatils
            //li beim Eventhandler registrieren
            taskElement.addEventListener('click', function(){
                //alles was evtl. schon offen ist löschen
                //alle Kindelemente löschen
                taskDetailsElement.innerHTML = '';
                var taskDetails = new TaskDetailsnd(taskDetailsElement, task);
                //rendern
                taskDetails.render();
            });
        });
    });
});