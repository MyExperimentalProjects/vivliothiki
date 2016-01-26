
# Promises

* A promise can only succeed or fail once. It cannot succeed or fail twice, neither can it switch from success to failure or vice versa.
* If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.

## Promise Actions

* __fulfilled__    
The action relating to the promise succeeded 

* __rejected__  
The action relating to the promise failed

* __pending__   
Hasn't fulfilled or rejected yet 

* __settled__     
Has fulfilled or rejected

## Concepts

* Wrapping
* Thening
* Catching
* Chaining


### Reference :
* http://www.html5rocks.com/en/tutorials/es6/promises/
* https://www.udacity.com/course/viewer#!/c-ud898/l-6054218539/e-6092209489/m-6079158552
* https://davidwalsh.name/fetch
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
