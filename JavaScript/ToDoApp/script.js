(function(){
    function createAppTitle(title){
        let appTitle = document.createElement('h2');
        appTitle.textContent = title;
        return appTitle;
    }

    function createForm(){
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group','mb-3');
        input.classList.add('form-control');
        input.placeholder = "Enter new task";
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn','btn-primary');
        button.textContent = "add task";

        form.append(input);
        form.append(buttonWrapper)
        buttonWrapper.append(button);

        return {
            form,
            input,
            button,
        };
    }

    function createToDoList(){
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createToDoTask(name){
        let task = document.createElement('li');

        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        
        task.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
        task.textContent = name;

        buttonGroup.classList.add('btn-group','btn-group-sm');
        doneButton.classList.add('btn','btn-success');
        doneButton.textContent = "Done";
        deleteButton.classList.add('btn','btn-danger');
        deleteButton.textContent = "Delete";

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);

        task.append(buttonGroup);

        return {
            task,
            doneButton,
            deleteButton,
        };

    }

    document.addEventListener('DOMContentLoaded',function(){
        let container = document.getElementById('todo-app');

        let todoAppTitle = createAppTitle("To Do App");
        let todoForm = createForm();
        let todoList = createToDoList();

        

        container.append(todoAppTitle);
        container.append(todoForm.form);
        container.append(todoList);
        
       

        todoForm.form.addEventListener('submit',function(event){
            event.preventDefault();
            if(!todoForm.input.value) return;

            let todoTask = createToDoTask(todoForm.input.value);

            todoTask.doneButton.addEventListener('click',function(event){
                todoTask.task.classList.toggle('list-group-item-success');
            });
            todoTask.deleteButton.addEventListener('click',function(event){
                if(confirm("Are you sure?")){
                    todoTask.task.remove();
                }
            });
            todoList.append(todoTask.task);

            
            todoForm.input.value = '';
        });


    });

})();