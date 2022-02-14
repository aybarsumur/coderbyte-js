//CoderByte

//First Reverse
let word = "Hello World and Coders"
function FirstReverse(str) {
    console.log(str)
    return str.split("").reverse().join("");
}

console.log(FirstReverse(word))


//Letter Changes
function letterChanges(str){
    var result="";
    
    for (var i = 0; i < str.length; i++){
        var letters = str[i];
     if (letters == "z" ){
        letters = "a";
    } else if(str.charCodeAt(i) >= "a".charCodeAt(0) && str.charCodeAt(i) <="z".charCodeAt(0)) {
        letters = String.fromCharCode(str.charCodeAt(i)+1);
        
    }if (letters == "a" || letters =="e" || letters =="i"||letters =="o" ||letters =="u"){
        letters = letters.toUpperCase();
    }
    result+=letters;
}
    console.log(result)
 return result;
 
}
letterChanges("fun times!");

//Letter Capatalize
let string = "hello world";
function capFirst(str) {
    return str.split(" ").map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(" ")
}
// let capString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase;
// let capWord = (str) => str.split(' ').map(capString).join(' ');
console.log(capFirst(string))

//Number3 alerted three times
for (var i = 0; i < 3; i++) {
    setTimeout(function() { alert(i); }, 1000 + i);
}

//5
(function() {
    var a = b = 5;
})();
console.log(b);
