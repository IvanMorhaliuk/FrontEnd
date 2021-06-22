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


    document.addEventListener('DOMContentLoaded',function(){
        let container = document.getElementById('todo-app');

        let todoAppTitle = createAppTitle("To Do App");
        let todoForm = createForm();
        let todoList = createToDoList();

        container.append(todoAppTitle);
        container.append(todoForm.form);
        container.append(todoList);

    });

})();