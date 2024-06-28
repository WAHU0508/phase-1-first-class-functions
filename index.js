function receivesAFunction(callBack) {
    return callBack();

}
receivesAFunction(() => console.log("This is a callback function!"));

function returnsANamedFunction() {
    const fn = function() {
        return "This returns a named function"
    }
    return fn;
}
console.log(returnsANamedFunction()())


function returnsAnAnonymousFunction() {
    return () => "This is an anonymous function"
}
console.log(returnsAnAnonymousFunction()());