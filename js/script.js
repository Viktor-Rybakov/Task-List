$(function() {
  var taskFormElem = $(".js-task-form");
  var taskNameElem = $(".js-task-name__field");
  var taskDescriptionElem = $(".js-task-description__field");
  var emptyListElem = $(".js-empty-list");
  var taskListElem = $(".js-task-list");

  taskFormElem.on("submit", function() {
    //Записываю содержимое полей в переменные
    var taskName = taskNameElem.val();
    var taskDescription = taskDescriptionElem.val();

    //Скрываю пустой лист
    emptyListElem.addClass('hidden');

    //Генерирую элементы HTML
    taskListElem.append(`
      <li class="task-list__item js-task-list__item">
        <article class="task-item js-task-item">
          <header class="task-item__header js-task-item__header flex-container">
            <h3 class="task-item__name js-task-item__name">${taskName}</h3>
            <button class="task-item__delete js-task-item__delete" type="button" aria-label="Удалить дело"></button>
            <button class="task-item__open js-task-item__open" type="button" aria-label="Свернуть описание"></button>
          </header>

          <p class="task-item__description js-task-item__description">${taskDescription}</p>
        </article>
      </li>
    `);

    //Очищаю форму
    taskFormElem[0].reset();

    event.preventDefault();
  });

  //Удаление задачи
  taskListElem.on('click', '.js-task-item__delete', function() {
    $(this)
      .closest('.js-task-list__item')
      .remove();
  });

  //Cворачивание задачи
  taskListElem.on('click', '.js-task-item__open', function() {
    $(this).toggleClass('rotate');
    $(this)
      .closest('.js-task-item')
      .children('.task-item__description')
      .slideToggle({
        duration: 300,
        easing: 'linear'
      });

  });

});
