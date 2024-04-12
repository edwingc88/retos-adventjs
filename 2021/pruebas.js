/*function dupplicateCount(text){
    let arr = text.split('');
    let anterior="";
    let value=1;
    cont=0;
    for(i=0;i<arr.length;i++)
    {

        if(arr[i]==anterior){
            anterior=arr[i];
            value++;
        }
        

        if(arr[i]!=anterior){
            if(value==2){
                cont++;
                value=1;
            }
             value=1
        }
     

      anterior=arr[i];
      console.log(arr[i])
    }
    console.log(cont)

}

const text= "ggsggsstf"

dupplicateCount(text)

*/

/* 
function gonsi(text){
    return Object.values(text.split("").reduce((map, char)=>{

        const lowerChar = char.toLowerCase();

        if(!map[lowerChar]){
            map[lowerChar]=0
        }

        map[lowerChar]++

        return map

    },{})).filter(count=>count>1).length
}

const text= "ggsggssf" 

console.log(gonsi(text))

for(i=0;i<text.length;i++){
    console.log(text[i])
} 
*/

/* 
let tarea= {proridad:"A"}
console.log(tarea["B"]=[])
console.log(tarea)
let obj= {}

obj[tarea.proridad]=[];

console.log(obj["A"])
console.log(obj)


 */