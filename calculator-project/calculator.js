let result = document.getElementById('input_space');

let calculate = (number) => {
    result.innerHTML += number;
}

function answer(){
   try{
    result.innerHTML = eval(result.innerHTML);
   } 

   catch{
    alert('Enter a valid number')
   }

}

function  clearr(){
    result.innerHTML = " ";
}

function del(){
    result.innerHTML = result.innerHTML.slice(0, -1);
}