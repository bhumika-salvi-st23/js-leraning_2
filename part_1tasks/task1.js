function  greeting(callback){
    let count=0
    return function(name){
        count++
        callback(name,count)
    }
}
function greetingcounter(name,count){
    console.log(`hello ${name} you have greeted ${count}`);
}
const greet=greeting(greetingcounter)
greet("bhumika ")