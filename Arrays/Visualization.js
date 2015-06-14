//Task1
$('.Task1 input[type="button"]').click(function(){
    var array = new Array(20);
    var str='';

    for(var i =0; i<array.length;i+=1) {
        array[i] = i * 5;
    }
    for(var j =0; j<array.length;j+=1) {
        str=str+array[j]+',';
    }

        $('.Task1 input[id="resultT1"]').attr("placeholder", str);
});

//Task2
$('.Task2 input[type="button"]').click(function(){
    var input1 = $('.Task2 input[id="str1"]').val();
    var input2 = $('.Task2 input[id="str2"]').val();
    var minArray;

    for(var i=0; i<Math.min(input1.length,input2.length);i+=1)
    {
        if(input1[i].toUpperCase()<input2[i].toUpperCase())
        {
            $('.Task2 input[id="resultT2"]').attr("placeholder", input1 + " comes before " + input2);
            break;
        }
       else
        {
            $('.Task1 input[id="resultT2"]').attr("placeholder", input2 + " comes before " +input1);
        }
    }
});

//Task3
$('.Task3 input[type="button"]').click(function(){
    var input1 = $('.Task3 input[id="arrayT3"]').val(),
    array =  input1.split(' '),
    temp,
    counter=0,
    maxCounted=0,
    number;

    for(var i=1;i<array.length;i+=1){

    if(array[i]===array[i-1]){
        temp=array[i];
        counter++
    }
    else{
        if(counter>maxCounted)
        {
            maxCounted=counter;
            number = temp;

        }
        counter=0;
    }
    }
    var result=[];
    for (var j = 0;j<=maxCounted;j+=1)
    {
        result[j]=number;
    }
    $('.Task3 input[id="resultT3"]').attr("placeholder",result);

});

//Task4
$('.Task4 input[type="button"]').click(function(){
    var input1 = $('.Task4 input[id="arrayT4"]').val(),
    array =  input1.split(' '),
        counter=0,
        maxCounted=0,
        newArray=[],
        tempArray = [];

    for(var i=1;i<array.length;i+=1){

        if(array[i]*1 - 1 === array[i-1]*1){
            tempArray[counter]=array[i-1];
            counter++;
            tempArray[counter]=array[i];
        }
        if(array[i]*1-1 !== array[i-1]*1 || i==array.length-1)
            if(counter>maxCounted)
            {
                maxCounted=counter;
                newArray = tempArray.slice();
                counter=0;
            }

        }
            $('.Task4 input[id="resultT4"]').attr("placeholder",newArray);

});

//Task5
$('.Task5 input[type="button"]').click(function(){
    var input = $('.Task5 input[id="arrayT5"]').val(),
    array =  input.split(' '),
    newArray=[],
    temp;
    for(var i=0;i<array.length;i+=1){
        temp=array[i]*1;
        for(var j=i;j<array.length;j+=1)
        if(temp*1>array[j]*1){
            temp=array[j];
            array[j]=array[i];
            array[i]=temp;
        }
        newArray[i]=temp;
    }
    $('.Task5 input[id="resultT5"]').val('');
    $('.Task5 input[id="resultT5"]').attr("placeholder", newArray );
});

//Task6
$('.Task6 input[type="button"]').click(function(){
    var input = $('.Task6 input[id="arrayT6"]').val(),
        array =  input.split(' '),
        newArray=[],
        counter=0,
        maxCounted=0,
        freqNum,
        temp;
    for(var i=0;i<array.length;i+=1){
        temp=array[i];
        for(var j=0;j<array.length;j+=1) {
            if (temp * 1 === array[j] * 1) {
                counter++;
                if (counter > maxCounted) {
                    maxCounted = counter;
                    freqNum = temp;
                }
            }
        }
            counter=0;
    }
    $('.Task6 input[id="resultT6"]').val('');
    $('.Task6 input[id="resultT6"]').attr("placeholder", freqNum + " ("+maxCounted+" times)" );
});

//Task7
$('.Task7 input[type="button"]').click(function(){
    var input = $('.Task7 input[id="arrayT7"]').val(),
        array =  input.split(' '),
        input2 = $('.Task7 input[id="numberT7"]').val();

    $('.Task7 input[id="resultT7"]').val('');
    $('.Task7 input[id="resultT7"]').attr("placeholder", BinarySearch(array,input2*1,0,array.length));
});

function BinarySearch(array, number, start, end) {
    if (array[start]*1 > number*1 || number*1 > array[end]*1) {
        return (-1);
    }
    var x = ((end + start) / 2) | 0;
    if (array[x]*1 === number*1) {
        return x;
    } else {
        if (array[x]*1 > number*1) {
            return BinarySearch(array, number, start, (x - 1));
        } else {
            return BinarySearch(array, number, (x + 1), end);
        }
    }
}
