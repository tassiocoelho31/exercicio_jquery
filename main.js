$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();

        var taskName = $('#task-name').val().trim();

        if (taskName) {
            var taskItem = $('<li></li>').text(taskName);
            var removeButton = $('<button class="remove-btn">Remover</button>');

            removeButton.click(function() {
                $(this).parent().remove();
            });

            taskItem.append(removeButton);
            $('#task-list').append(taskItem);
            $('#task-name').val('');
        }
    });

    $('#task-list').on('click', 'li', function(event) {
        if (!$(event.target).is('.remove-btn')) {
            $(this).toggleClass('completed');
        }
    });

    $('#clear-list').click(function() {
        $('#task-list').empty();
    });
});