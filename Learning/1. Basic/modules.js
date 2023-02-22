const {peoples, ages} = require('./people')
// console.log(peoples,ages);

for (i in peoples){
    console.log(peoples[i]+": "+ ages[i]);
}