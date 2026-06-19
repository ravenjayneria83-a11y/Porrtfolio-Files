const text = [
"Student",
"Dreamer",
"Achiever",
"Future Developer"
];

let count = 0;

setInterval(() => {
document.getElementById("typing").innerHTML =
text[count];

count++;

if(count >= text.length){
count = 0;
}
}, 1500);