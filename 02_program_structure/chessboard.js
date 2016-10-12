#!/usr/bin/env node

var size = process.argv[2]
var hash = false
var board = ''

for (var line = 0; line < size; line++) {
    for (var row = 0; row < size; row++) {
        board += hash ? '#' : ' ' 
        hash = !hash
    }
    board += '\n'
    hash = !hash
}

console.log(board)
