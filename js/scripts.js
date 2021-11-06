$(document).ready(function() {
  $("#submit").click(function() {
    const coffee = parseInt($("input:radio[name=coffee]:checked").val());
    const fictional = parseInt($("input:radio[name=fictional]:checked").val());
    const meaning = parseInt($("input:radio[name=meaning]:checked").val());
    const time = parseInt($("input:radio[name=time]:checked").val());
    const pizza = parseInt($("input:radio[name=pizza]:checked").val());
  });
});