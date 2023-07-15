


function call(){
    alert("THANKS FOR APPROACHING US :)")
}


class data{
    constructor(value){
        this._name=value
    }

get name1(){
    return this._name.toUpperCase()
}
set name1(value){
this._name=value
}




}
let obj=new data();
obj.name1="magesh"
console.log(obj.name1)
console.log(obj._name)