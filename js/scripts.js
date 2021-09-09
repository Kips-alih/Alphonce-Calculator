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
      $("#divisionOutput").text(result);
    });

    $("form#subtract").submit(function(event) {
      event.preventDefault();

      var number1=parseInt($("#subtract1").val());
      var number2=parseInt($("#subtract2").val());
      var result=subtract(number1,number2);
      $("#subtractOutput").text(result);

    });

    $("form#multiply").submit(function(event) {
      event.preventDefault();

      var number1=parseInt($("#multiple1").val());
      var number2=parseInt($("#multiple2").val());
      var result=multiply(number1,number2);
      $("#multiplicationOutput").text(result);
    });

    $("form#divide").submit(function(event) {
      event.preventDefault();

      var number1=parseInt($("#divide1").val());
      var number2=parseInt($("#divide2").val());
      var result=divide(number1,number2);
      $("#divisionOutput").text(result);
    });

  });