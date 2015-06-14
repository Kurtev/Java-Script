
//Task1
$('.Task1 input[type="button"]').click(function(){
    var input1 = $('.Task1 input[id="int1"]').val();
    var input2 = $('.Task1 input[id="int2"]').val();
    if(isNaN(input1)|| isNaN(input2))
    {
        alert("Not a Number");
    }
    else {
        $('.Task1 input[id="output"]').val('');
        if(input1>input2)
        $('.Task1 input[id="output"]').attr("placeholder",input2+" "+input1);
        else
            $('.Task1 input[id="output"]').attr("placeholder",input1+" "+input2);
    }
});

//Task2
$('.Task2 input[type="button"]').click(function(){
    var input1 = $('.Task2 input[id="num1"]').val();
    var input2 = $('.Task2 input[id="num2"]').val();
    var input3 = $('.Task2 input[id="num3"]').val();
    if(isNaN(input1)|| isNaN(input2) || isNaN(input3))
    {
        alert("Not a Number");
    }
    else {
        $('.Task2 input[id="res"]').val('');
        if(input1<0 || input2<0 || input3<0) {
            $('.Task2 input[id="res"]').attr("placeholder", "-");
        }
        else if (input1 == 0 || input2 == 0 || input3 == 0) {
            $('.Task2 input[id="res"]').attr("placeholder", 0);
        }
        else {
            $('.Task2 input[id="res"]').attr("placeholder", "+");
        }
    }
});

//Task3
$('.Task3 input[type="button"]').click(function(){
    var input1 = $('.Task3 input[id="number1"]').val();
    var input2 = $('.Task3 input[id="number2"]').val();
    var input3 = $('.Task3 input[id="number3"]').val();

    if(isNaN(input1)|| isNaN(input2) || isNaN(input3))
    {
        alert("Not a Number");
    }
    else {
        $('.Task3 input[id="result"]').val('');
        if(input1>input2) {
            if(input1>input3)
            $('.Task3 input[id="result"]').attr("placeholder", input1);
            else
                $('.Task3 input[id="result"]').attr("placeholder", input3);
        }
        else
        {
            if(input2>input3)
            $('.Task3 input[id="result"]').attr("placeholder", input2);
            else
                $('.Task3 input[id="result"]').attr("placeholder", input3);
        }
    }
});

//Task4
$('.Task4 input[type="button"]').click(function(){
    var input1 = new Number($('.Task4 input[id="number1T4"]').val());
    var input2 = new Number($('.Task4 input[id="number2T4"]').val());
    var input3 = new Number($('.Task4 input[id="number3T4"]').val());

    if(isNaN(input1)|| isNaN(input2) || isNaN(input3))
    {
        alert("Not a Number");
    }
    else {
        $('.Task4 input[id="resultT4"]').val('');
        if(input1>input2) {
            if(input2>input3)
                $('.Task4 input[id="resultT4"]').attr("placeholder", input1+" "+input2+" "+input3);
            else if(input3>input2) {
                if(input1>input3)
                $('.Task4 input[id="resultT4"]').attr("placeholder", input1 + " " + input3 + " " + input2);
                else
                    $('.Task4 input[id="resultT4"]').attr("placeholder", input3 + " " + input1 + " " + input2);
            }
        }
        else if(input1<input2)
        {
            if(input1>input3)
                $('.Task4 input[id="resultT4"]').attr("placeholder", input2+" "+input1+" "+input3);
            else if(input3>input1) {
                if(input3>input2)
                $('.Task4 input[id="resultT4"]').attr("placeholder", input3 + " " + input2 + " " + input1);
                else
                    $('.Task4 input[id="resultT4"]').attr("placeholder", input2 + " " + input3 + " " + input1);
            }
        }
        else
            $('.Task4 input[id="resultT4"]').attr("placeholder", input1 + " " + input2 + " " + input3);
    }
});

//Task5
$('.Task5 input[type="button"]').click(function(){
    var input = $('.Task5 input[id="numberT5"]').val();

    if(input%1 !== 0 || input>9)
    {
        $('.Task5 input[id="numberT5"]').val('');
        $('.Task5 input[id="numberT5"]').attr("placeholder","Not a Digit");
    }
   else {

        switch (input) {
            case "0":
                $('.Task5 input[id="numberT5"]').val('');
                $('.Task5 input[id="numberT5"]').attr("placeholder", "zero");
                break;

            case "1":
                $('.Task5 input[id="numberT5"]').val('');
                $('.Task5 input[id="numberT5"]').attr("placeholder", "one");
                break;

            case "2":
                $('.Task5 input[id="numberT5"]').val('');
                $('.Task5 input[id="numberT5"]').attr("placeholder", "two");
                break;
            case "3":
                $('.Task5 input[id="numberT5"]').val('');
                $('.Task5 input[id="numberT5"]').attr("placeholder", "three");
                break;
            case "4":
                $('.Task5 input[id="numberT5"]').val('');
                $('.Task5 input[id="numberT5"]').attr("placeholder", "four");
                break;
            case "5":
                $('.Task5 input[id="numberT5"]').val('');
                $('.Task5 input[id="numberT5"]').attr("placeholder", "five");
                break;
            case "6":
                $('.Task5 input[id="numberT5"]').val('');
                $('.Task5 input[id="numberT5"]').attr("placeholder", "six");
                break;
            case "7":
                $('.Task5 input[id="numberT5"]').val('');
                $('.Task5 input[id="numberT5"]').attr("placeholder", "seven");
                break;
            case "8":
                $('.Task5 input[id="numberT5"]').val('');
                $('.Task5 input[id="numberT5"]').attr("placeholder", "eight");
                break;
            case "9":
                $('.Task5 input[id="numberT5"]').val('');
                $('.Task5 input[id="numberT5"]').attr("placeholder", "nine");
                break;

        }
    }
});
