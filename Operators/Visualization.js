
//Task1
$('.Task1 input[type="button"]').click(function(){
    var input = $('.Task1 input[type="text"]').val();
    if(isNaN(input)|| input%1!==0)
    {
        alert("Not an Integer");
    }
    else {
        $('.Task1 input[type="text"]').val('');
        $('.Task1 input[type="text"]').attr("placeholder",input % 2 !== 0);
    }
});

//Task2
$('.Task2 input[type="button"]').click(function(){
    var input = $('.Task2 input[type="text"]').val();
    if(isNaN(input)|| input%1!==0)
    {
        alert("Not an Integer");
    }
    else {
        $('.Task2 input[type="text"]').val('');
        $('.Task2 input[type="text"]').attr("placeholder", input % 5 === 0 && input % 7 === 0);
    }
});

//Task3
$('.Task3 input[type="button"]').click(function(){
    var width = $('.Task3 input[id="width"]').val();
    var height =$('.Task3 input[id="height"]').val();

    if(isNaN(width)|| isNaN(height))
    {
        alert("Number");
    }
    else {
        $('.Task3 input[id="area"]').val('');
        $('.Task3 input[id="area"]').val(width*height);
    }
});

//Task4
$('.Task4 input[type="button"]').click(function(){
    var input = $('.Task4 input[type="text"]').val();
    if(isNaN(input)|| input%1!==0)
    {
        alert("Not an Integer");
    }
    else {
        $('.Task4 input[type="text"]').val('');
        $('.Task4 input[type="text"]').attr("placeholder",input[input.length-3]==7);
    }
});

//Task5
$('.Task5 input[type="button"]').click(function(){
    var input = $('.Task5 input[type="text"]').val()
        ,bit;
    if(isNaN(input)|| input%1!==0)
    {
        alert("Not an Integer");
    }
    else {
        bit=input>>3;
        $('.Task5 input[type="text"]').val('');
        $('.Task5 input[type="text"]').attr("placeholder",bit.toString(2)[bit.toString(2).length-1]);
    }
});

//Task6
$('.Task6 input[type="button"]').click(function(){
    var inputX = $('.Task6 input[id="X"]').val();
    var inputY = $('.Task6 input[id="Y"]').val();
    if(isNaN(inputX)|| isNaN(inputY))
    {
        alert("Not a Number");
    }
    else {

        $('.Task6 input[id="result"]').val('');
        $('.Task6 input[id="result"]').attr("placeholder",(inputX*inputX)+(inputY*inputY)<25);
    }
});


//Task7
$('.Task7 input[type="button"]').click(function(){
    var input = $('.Task7 input[type="text"]').val();
    var isPrime = true;
    if(isNaN(input)|| input%1!==0)
    {
        alert("Not an Integer");
    }
    else {
       for(var divisor = 2; divisor <= Math.sqrt(input); divisor++) {
           if (!(input % divisor)) {
               isPrime = false;
               break;
           }
       }
           $('.Task7 input[type="text"]').val('');
           $('.Task7 input[type="text"]').attr("placeholder", isPrime);
    }
});

//Task8
$('.Task8 input[type="button"]').click(function(){
    var sideA = new Number($('.Task8 input[id="sideA"]').val());
    var sideB = new Number($('.Task8 input[id="sideB"]').val());
    var Height = new Number($('.Task8 input[id="Theight"]').val());


    if(isNaN(sideA)||isNaN(sideB)||isNaN(Height))
    {
        alert("Not an Integer");
    }

    else {
           var  Area =(sideA+sideB)/2*Height;
           $('.Task8 input[id="Tarea"]').val('');
           $('.Task8 input[id="Tarea"]').attr("placeholder", Area);
    }
});