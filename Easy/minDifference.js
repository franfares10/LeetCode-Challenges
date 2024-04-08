/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var getMinimumDifference = function(root) {
    debugger;
    let min = Infinity;
    let prev = -1;
    let inOrder = (node) => {
        if (node === null) {
            return;
        }
        inOrder(node.left);
        if (prev !== -1) {
            min = Math.min(min, node.val - prev);
        }
        prev = node.val;
        inOrder(node.right);
    }
    inOrder(root);
    return min;
}

//create the test case

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

console.log(getMinimumDifference(root));