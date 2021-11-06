$(document).ready(function() {
  $("#submit").click(function() {
    const coffee = parseInt($("input:radio[name=coffee]:checked").val());
    const fictional = parseInt($("input:radio[name=fictional]:checked").val());
    const meaning = parseInt($("input:radio[name=meaning]:checked").val());
    const time = parseInt($("input:radio[name=time]:checked").val());
    const pizza = parseInt($("input:radio[name=pizza]:checked").val());
    const total = coffee + fictional + meaning + time + pizza;
    $("#language").show();

    if (total<=5) {
      $("#result").text("C#");
    }
      else if (10>total>5) {
      $("#result").text("JavaScript")
    } else {
      $("#result").text("Phyton")
    }
  });
});