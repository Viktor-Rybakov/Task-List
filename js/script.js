$(function(){

  var task_form_Elem = $('.js-task-form');
  var task_name_Elem = $('.js-task-name__field');
  var task_description_Elem = $('.js-task-description__field');
  var empty_list_Elem = $('.js-empty-list');
  var task_list_Elem = $('.js-task-list');

  task_form_Elem.on('submit', function(){

    //Записываю содержимое полей в переменные
    let task_name = task_name_Elem.val();
    let task_description = task_description_Elem.val();
  
    //Скрываю пустой лист
    empty_list_Elem.addClass('hidden');
    
    //Генерирую элементы HTML
    task_list_Elem.append('<li class="task-list__item js-task-list__item"></li>');
    $('.js-task-list__item').last()
      .append('<article class="task-item js-task-item"></article>');
    $('.js-task-item').last()
      .append('<header class="task-item__header js-task-item__header flex-container"></header>')
      .append('<p class="task-item__description js-task-item__description"></p>');
    $('.js-task-item__header').last()
      .append('<div class="flex-container js-flex-container"></div>')
      .append('<button class="task-item__open js-task-item__open" type="button" aria-label="Раскрыть дело"></button>');
    $('.js-flex-container').last()
      .append('<h3 class="task-item__name js-task-item__name"></h3>')
      .append('<button class="task-item__delete js-task-item__delete" type="button" aria-label="Удалить дело"></button>');

    //Вставляю содержимое полей в сгенерированные элементы
    $('.task-item__name').last().text(task_name);
    $('.task-item__description').last().text(task_description);

    //Очищаю форму
    task_form_Elem[0].reset();

    event.preventDefault();

  });

  //Клик на кнопке удаления задачи
  $('.js-task-list').on('click', '.js-task-item__delete', function(){
    $(this).closest('.js-task-list__item').remove();
  });

});