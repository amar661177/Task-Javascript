import * as fs from 'fs';

var numbers = [5,8,0,1,9,11,15,16];

console.log("Original numbers list: ", numbers)

// Short ASC 
let sortASC = numbers.sort( (a , b) => a - b );
console.log("Numbers list After sorting: ", sortASC);

// ShortDESC 
let sortDESC = numbers.sort( (a , b) => b - a );
console.log("Numbers list After Desc sorting: ", sortDESC);


//file system
fs.readFile("./data.txt", 'utf8' , (err, data) => {
 
  if (err) console.error(err);
  
  // convert string to List & convert it to integer & make it ASC
  let dataList = data.split(",").
  map( list => +list).
  sort((a,b)=> a - b);

  fs.writeFile('./output.txt', dataList.toString(), function (err) {
    if (err) console.error(err);
    console.log('File "Output" Create Successfully ');
  });
  
});



// ! OLD CODE 
// for(let i = 0 ; i < numbers.length ; i++)
// {
//     for(let j = 0 ; j < numbers.length - 1 ; j++)
//     {
//         if(numbers[i] > numbers[j + 1])
//         {
//             let temp = numbers[j];
//             numbers[j] = numbers[j + 1]
//             numbers[j + 1] = temp;
//         }
//     }
// }

// console.log("Numbers list After sorting: ", numbers)

// for(let i = 0 ; i < numbers.length ; i++)
// {
//     for(let j = 0 ; j < numbers.length - 1 ; j++)
//     {
//         if(numbers[i] < numbers[j + 1])
//         {
//             let temp = numbers[j];
//             numbers[j] = numbers[j + 1]
//             numbers[j + 1] = temp;
//         }
//     }
// }

// console.log("Numbers list After Desc sorting: ", numbers)


