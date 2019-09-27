$(function(){

  $('.add-task-button').on('click', function(){

    //Проверка содержимого поля #task-name__field
    if ($('#task-name__field').val() == '') {
      alert('Заполните имя задачи');
      return false;
    };

    //Проверка содержимого поля #task-description__field
    if ($('#task-description__field').val() == '') {
      alert('Заполните описание задачи');
      return false;
    };

    //Записываю содержимое полей в переменные
    var task_name = $('#task-name__field').val();
    var task_description = $('#task-description__field').val();
  
    //Скрываю пустой лист
    $('.empty-list').addClass('hidden');
    
    //Генерирую элементы HTML
    $('.task-list').append('<li class="task-list__item"></li>');
    $('.task-list__item').last().append('<div class="task-item"></div>');
    $('.task-item').last().append('<div class="task-item__name-container flex-container"></div>');
    $('.task-item__name-container.flex-container').last().append('<div class="flex-container"></div>');
    $('.flex-container').last().append('<div class="task-item__name"></div>');
    $('.flex-container').last().append('<button class="task-item__clear" type="button" aria-label="Удалить дело"></button>');
    $('.task-item__name-container.flex-container').last().append('<button class="task-item__open" type="button" aria-label="Раскрыть дело"></button>');
    $('.task-item').last().append('<div class="task-item__description"></div>');

    //Вставляю содержимое полей в сгенерированные элементы
    $('.task-item__name').last().text(task_name);
    $('.task-item__description').last().text(task_description);

    //Очищаю форму
    $('#task-name__field').val('');
    $('#task-description__field').val('');
    
  });

  $('.task-list').on('click', '.task-item__clear', function(){
    $(this).closest('.task-list__item').remove();
  });

});