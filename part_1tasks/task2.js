function fetchuserdata(name){
    return new Promise(resolve =>
    setTimeout(()=>resolve({name:name,age:19}),1000)
    )
}
 
async function displayuser() {
    const user =await fetchuserdata("hello bhumika")  
    console.log(`Name:${user.name},  Age:${user.age}`)  
}
displayuser()