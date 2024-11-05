const num=[2,5,4,8,2,5,2,1,9,3];
const data=num.filter((n)=>(n%2!=0));
console.log(data);

const data1=num.filter((n)=>(n%2!=0)).map((a)=>(a*5));
console.log(data1);
const data2=num.filter((n)=>(n%2!=0)).map((a)=>(a*5)).reduce((b,s)=>(b+s));
console.log(data2); 