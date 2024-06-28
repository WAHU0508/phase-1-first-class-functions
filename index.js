//test1: Function that takes a callback function as an argument and calls the callback function
function receivesAFunction(callBack) {
    return callBack();

}
receivesAFunction(() => console.log("This is a callback function!"));

//test2: Function that takes no arguments and returns a named function
function returnsANamedFunction() {
    const fn = function() {
        return "This returns a named function"
    }
    return fn;
}
console.log(returnsANamedFunction()())

//test3: Function that takes no argument and returns an anonymous function
function returnsAnAnonymousFunction() {
    return () => "This is an anonymous function"
}
console.log(returnsAnAnonymousFunction()());
