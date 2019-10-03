$(function(){

  var task_form_Elem = $('.task-form');
  var add_task_button_Elem = $('.add-task-button');
  var task_name_Elem = $('#task-name__field');
  var task_description_Elem = $('#task-description__field');
  var empty_list_Elem = $('.empty-list');
  var task_list_Elem = $('.task-list');

  add_task_button_Elem.on('click', function(){

    //Записываю содержимое полей в переменные
    let task_name = task_name_Elem.val();
    let task_description = task_description_Elem.val();
  
    //Скрываю пустой лист
    empty_list_Elem.addClass('hidden');
    
    //Генерирую элементы HTML
    task_list_Elem.append('<li class="task-list__item"></li>');
    $('.task-list__item').last()
      .append('<article class="task-item"></article>');
    $('.task-item').last()
      .append('<header class="task-item__header flex-container"></header>')
      .append('<p class="task-item__description"></p>');
    $('.task-item__header').last()
      .append('<div class="flex-container"></div>')
      .append('<button class="task-item__open" type="button" aria-label="Раскрыть дело"></button>');
    $('.flex-container').last()
      .append('<h3 class="task-item__name"></h3>')
      .append('<button class="task-item__delete" type="button" aria-label="Удалить дело"></button>');

    //Вставляю содержимое полей в сгенерированные элементы
    $('.task-item__name').last().text(task_name);
    $('.task-item__description').last().text(task_description);

    //Очищаю форму
    task_form_Elem[0].reset();

  });

  //Клик на кнопке удаления задачи
  $('.task-list').on('click', '.task-item__delete', function(){
    $(this).closest('.task-list__item').remove();
  });

});