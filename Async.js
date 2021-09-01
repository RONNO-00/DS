// const a = 5 ;
// var i = 0 ;
// while ( i<=a){
// console.log(i);
// i++;
// }
const longrun = ms => {
    console.log("LongRun Starting");
    let start = new Date;
    if(new Date-start < ms){
    console.log("Ending Long Run");
    }

};//!Does Nothing

const frozen = () =>{
console.log("Frozen staring");
longrun(10000);
console.log("Ending Frozen");
}

console.log ("Program Start");
// setTimeout(longrun,7000,10000);
frozen();
console.log("Exiting Program");