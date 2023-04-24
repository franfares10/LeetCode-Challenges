var deepestLeavesSum = function(root) {
    let sum = [];

    const dfs = (node, lvl) =>{
      if(lvl === sum.length){
          sum[lvl] = node.val;
      }else{
        sum[lvl] +=node.val;
      }
      if(node.left){
        dfs(node.left,lvl+1);
      }
      if(node.right){
        dfs(node.right,lvl+1);
      }
    }

    dfs(root,0);
    return sum[sum.length-1];
};