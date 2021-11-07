$(document).ready(function() {
  $("#submit").click(function() {
    $('#radio-input').attr('checked',false);
    const coffee = parseInt($("input:radio[name=coffee]:checked").val());
    const fictional = parseInt($("input:radio[name=fictional]:checked").val());
    const meaning = parseInt($("input:radio[name=meaning]:checked").val());
    const time = parseInt($("input:radio[name=time]:checked").val());
    const pizza = parseInt($("input:radio[name=pizza]:checked").val());
    const total = coffee + fictional + meaning + time + pizza;
    const name = $("form#name").val();
    $("#language").fadeIn();
    if (total<=7) {
      $("#result").text("C#");
    } else if (12>total && total>7) {
      $("#result").text("JavaScript");
    } else {
      $("#result").text("Phyton");
    }
  });
});