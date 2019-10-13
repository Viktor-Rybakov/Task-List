$(function() {
  var taskFormElem = $(".js-task-form");
  var taskNameElem = $(".js-task-name__field");
  var taskDescriptionElem = $(".js-task-description__field");
  var emptyListElem = $(".js-empty-list");
  var taskListElem = $(".js-task-list");

  var i = 0; //счеткик для индекса дел

  taskFormElem.on("submit", function() {
    event.preventDefault();

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
            <button class="task-item__open js-task-item__open" type="button" aria-label="Свернуть описание" aria-expanded="true" aria-controls="item-${i}"></button>
          </header>

          <p class="task-item__description js-task-item__description" id="item-${i}">${taskDescription}</p>
        </article>
      </li>
    `);

    //Очищаю форму
    taskFormElem[0].reset();

    //Увеличиваю счетчик задачи
    i++; 
  });

  //Удаление задачи
  taskListElem.on('click', '.js-task-item__delete', function() {
    $(this)
      .closest('.js-task-list__item')
      .remove();
  });

  //Cворачивание задачи
  taskListElem.on('click', '.js-task-item__open', function() {

    var taskItemOpenElem = $(this);
    var taskItemDescriptionElem = $(this).closest('.js-task-item').children('.task-item__description');

    taskItemOpenElem.toggleClass('rotate');

    if ( taskItemOpenElem.attr('aria-expanded') === 'true' ) {
      taskItemOpenElem.attr('aria-label', 'Развернуть описание');
      taskItemOpenElem.attr('aria-expanded', 'false');
    } else {
      taskItemOpenElem.attr('aria-label', 'Свернуть описание');
      taskItemOpenElem.attr('aria-expanded', 'true');
    }

    taskItemDescriptionElem.slideToggle({
        duration: 300,
        easing: 'linear'
      });

  });

});
