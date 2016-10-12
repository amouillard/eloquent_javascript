#!/usr/bin/env node

function isEven(n) {
    if(n < 0) n *= -1
    if(n === 1) {console.log('false'); return false;}
    if(n === 0) {console.log('true'); return true;}

    isEven(n-2)
}

isEven(process.argv[2])
