$(function(){

  $('.add-task-button').on('click', function(){
    var task_name = $('#task-name__field').val();
    var task_description = $('#task-description__field').val();
  
    $('.empty-list').addClass('hidden');

    $('.task-list').append('<li class="task-list__item"></li>');
    $('.task-list__item').last().append('<div class="task-item"></div>');
    $('.task-item').last().append('<div class="task-item__name-container flex-container"></div>');
    $('.task-item__name-container.flex-container').last().append('<div class="flex-container"></div>');
    $('.flex-container').last().append('<div class="task-item__name"></div>');
    $('.task-item__name').last().text(task_name);
    $('.flex-container').last().append('<button class="task-item__clear" type="button" aria-label="Удалить дело"></button>');
    $('.task-item__name-container.flex-container').last().append('<button class="task-item__open" type="button" aria-label="Раскрыть дело"></button>');
    $('.task-item').last().append('<div class="task-item__description"></div>');
    $('.task-item__description').last().text(task_description);
    
  });

});