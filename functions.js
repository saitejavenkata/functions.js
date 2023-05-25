// addition using function 
 function add(i,j){
     var k=i+j;
     return k;
 }
 var answer = add(4,8);
  console.log(answer);

// subraction using function
 function sub(p,q){
     var r =p-q;
     return r;
 }
 var result=sub(9,5);
 console.log(result);

// multiplication using function
function multi(x,y){
    var z=x*y;
    return z;
}
var output =multi(3,2);
console.log(output);

// finding rectangle area using function
function rect(l,b){
   var area= l*b;
   return area;
}
 var conclusion =rect(7,9);
 console.log(conclusion);


//  Function:-squaring a number and adding one to it.
function f1(x){
    var r =x*x+1
    return r;
}

var output =f1(3);
  console.log(output);

  var output2 =f1(5);
  console.log(output2);

// checking odd numbers using function
function isodd(x){
    if(x%2==1){
    return true;
    }
 else{ 
    return false;
}
}

var output =isodd(3);
console.log(output);

//  counting even numbers using function
function countEvenNumber(arr){
    var count=0;
    for(index=0;index<arr.length;index++){
        if (arr[index]%2==0){
            count++;
        }
    }   
   return count;
}
var inputarr=[2,7,9,10];
 var count =countEvenNumber(inputarr);
 console.log(count);


  var inputarr2=[5,6,9,10,12,13,14];
  var count2=countEvenNumber(inputarr2);
  console.log(count2);

var inputarr3=[3,9,43,88,24];
  var count3=countEvenNumber(inputarr3);
  console.log(count3);