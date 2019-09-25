$(function(){

  $('.add-task-button').on('click', function(){
    var task_name = $('#task-name__field').val();
    var task_description = $('#task-description__field').val();
  
    $('.empty-list').addClass('hidden');

    $('.task-list').append('<li class="task-list__item"></li>');
    $('.task-list__item').last().append('<div class="task-item"></div>');
    $('.task-item').last().append('<div class="task-item__name-flex-container"></div>');
    $('.task-item__name-flex-container').last().append('<div class="task-item__name-container"></div>');
    $('.task-item__name-container').last().append('<div class="task-item__name"></div>');
    $('.task-item__name').last().text(task_name);
    $('.task-item__name-container').last().append('<button class="task-item__clear">');
    $('.task-item__clear').last().append('<img class="task-item__clear-img" src="img/clear-button.png" alt="close">');
    $('.task-item__name-container').last().append('<button class="task-item__open"></button>');
    $('.task-item__open').last().append('<img class="task-item__open-img" src="img/arrow.png" alt="open"></img>');
    $('.task-item').last().append('<div class="task-item__description">');
    $('.task-item__description').last().text(task_description);
    
  });




});