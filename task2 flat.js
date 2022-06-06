let flat = ([1, 2, [3, 4, [5, 6,[7,8,[9,10]]]]]);
function convertArr(flat)
{
let arr=[];
for (let i=0; i<flat.length; i++)
if (!Array.isArray(flat[i]))
   arr.push(flat[i]);
else
   arr=arr.concat(convertArr(flat[i]));
return arr;
}
console.log(convertArr(flat));