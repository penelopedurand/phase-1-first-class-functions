function recievesAFunction(callback){
    return callback();
}

function returnANamedFunction() {
    console.log ("spy")
    console.log(recievesAFunction.name);
    return recievesAFunction
}
