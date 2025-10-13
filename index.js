let object = `{
    "Name":"Baqarzafar",
    "fname":"liaquatzafarfarooqui",
    "age":25


}`



//  json ot javascript object type conversion 


let jobject = JSON.parse(object)

console.log(jobject)

// javascript object to json conversion 


let  json =  JSON.stringify(jobject)

console.log(json)







