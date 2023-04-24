var maxDepth = function (root) {
    if (root == []) {
      return 0;
    }
    let scale = 1;
    let depth = 1;
    while (scale < root.length) {
      scale = scale * 2;
      depth += 1;
    }
  
    return depth - 1;
  };