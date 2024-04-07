/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/

const exist = (board, word) => {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, index) {

        if (index === word.length) return true;
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[index]) return false;
        
        let temp = board[r][c];
        board[r][c] = '#'; 

        const found = dfs(r, c + 1, index + 1) ||
                       dfs(r, c - 1, index + 1) ||
                       dfs(r + 1, c, index + 1) ||
                       dfs(r - 1, c, index + 1);

        board[r][c] = temp;
        
        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

// Example
const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = "SEW";
console.log(exist(board, word));
