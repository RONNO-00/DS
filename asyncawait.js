function getData(){
return new Promise ((resolve , reject) => {

    resolve(42);
});
}
async function callForData(){
const promise = getData();
//.then(result => console.log(result));
const result = await getData();
console.log("Await.result", result); 
console.log("Done"); 
}
callForData();
console.log("ByeBYe");
