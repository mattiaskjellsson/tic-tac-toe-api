function asyncFunction() {
  const p = new Promise(45);
  return p
}

function doSomething() {
  for(var i=0; i< 10000; i++) {
    asyncFunction()
    .then(r => console.log(r))
    .catch(e => console.error(e))
    .finally(console.log('Done'))
  }
}

function doSomethingElse() {
  try {
    for (var i = 0; i < 10000; i++) {
      const c = await asyncFunction()
      console.log(c)
    }
  } catch (e) {
    console.log (e)
  } finally {
    console.log ('Done')
  }
}

function doSometingAgain() {
  for (var i = 0; i < 10000; i++) {
    try {
      const c = await asyncFunction()
      console.log(c)
    } catch (e) {
      console.log (e)
    } finally {
      console.log ('Done')
    }
  }
}
console.log('a')
var t0 = performance.now()
doSomething()
var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
console.log('b')
var t2 = performance.now()
doSomethingElse()
var t3 = performance.now()
console.log("Call to doSomething took " + (t3 - t2) + " milliseconds.")
console.log('c')
var t4 = performance.now()
doSomethingAgain()
var t5 = performance.now()
console.log("Call to doSomething took " + (t5 - t4) + " milliseconds.")

