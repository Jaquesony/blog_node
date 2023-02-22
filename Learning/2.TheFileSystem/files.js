const fs = require('fs')

// Reading files
// fs.readFile('../docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//    console.log(data.toString());
    
// });

// writing files
// fs.writeFile('../docs/blog1.txt','Hello, Karim',()=>{
//     console.log('Aleardy updated!');
// })

// directories
// if(!fs.existsSync('../assets')){
// fs.mkdir('../assets',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('File aleady created!');
// })
// }else{
//     fs.rmdir('../assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('File deleted!');
//     })
// }

// deleting files
if(fs.existsSync('../docs/deleted.txt')){
fs.unlink('../docs/deleted.txt', (err)=>{
    if(err){
        console.log(err);
    }
    console.log('File deleted!');
})
}