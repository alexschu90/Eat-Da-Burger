$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
        var newDevourState = {
            devour: newDevour
            };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
        function() {
            location.reload();
            }
        );
    });
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            name: $("#bn").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        );
    });
});