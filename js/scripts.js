var add=function(number1,number2){
  return number1+number2;
  };
  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  var multiply = function(number1, number2) {
    return number1 * number2;
  };
  var divide = function(number1, number2) {
    return number1 / number2;
  };

  $(document).ready(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();

      var number1=parseInt($("#add1").val());
      var number2=parseInt($("#add2").val());
      var result=add(number1,number2);
      $("#output").text(result);

    });

    $("form#divide").submit(function(event) {
      event.preventDefault();

      var number1=parseInt($("#divide1").val());
      var number2=parseInt($("#divide2").val());
      var result1=divide(number1,number2);
      $("#output1").text(result1);
    });

    $("form#multiply").submit(function(event) {
      event.preventDefault();

      var number1=parseInt($("#multiple1").val());
      var number2=parseInt($("#multiple2").val());
      var result1=multiply(number1,number2);
      $("#output2").text(result1);
    });
  });