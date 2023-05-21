/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
*/

var isValidSudoku = function(board) {
    
    for(let i = 0; i<board.length; i++){
        let rowSet = new Set();
        let colSet = new Set();
        let boxSet = new Set();
        for(let j = 0; j<board[i].length; j++){
            let row = board[i][j];
            let col = board[j][i];
            let box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)];

            if(row != '.'){
                if(rowSet.has(row)){
                    return false;
                }
                rowSet.add(row);
            }
            if(col != '.'){
                if(colSet.has(col)){
                    return false;
                }
                colSet.add(col);
            }
            if(box != '.'){
                if(boxSet.has(box)){
                    return false;
                }
                boxSet.add(box);
            }
        }
    }
    return true;
};