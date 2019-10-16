// Backend

// Front end
$(document).ready(function() {
  $("#form-one").submit(function(e) {
    var color = $("input#color").val();
    var animal = $("input#animal").val();
    var game = $("input#game").val();
    var food = $("input#food").val();

    var total = [color, animal, game, food];

    var newTotal = [];
    newTotal.push(total[1], total[0], total[2]);

    $("ul#show").prepend("<li>" + newTotal[0] + "</li>", "<li>" + newTotal[1] + "</li>", "<li>" + newTotal[2] + "</li>");

    e.preventDefault();
  });
});
