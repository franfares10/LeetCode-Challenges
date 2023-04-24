var dfs = function (node, adjacentNodes, visitedNodes) {
    visitedNodes[node] = true;
    if (!Object.keys(adjacentNodes).includes(node.toString())) {
      return;
    }
    for (let i = 0; i < adjacentNodes[node].length; i++) {
      if (!visitedNodes[adjacentNodes[node][i]]) {
        visitedNodes[adjacentNodes[node][i]] = true;
        dfs(adjacentNodes[node][i], adjacentNodes, visitedNodes);
      }
    }
  };
  
  var networkConnectedNodes = function (n, connections) {
    let adjacentNodes = {};
  
    if (connections.length < n - 1) {
      return -1;
    } else {
      for (let i = 0; i < connections.length; i++) {
        if (!Object.keys(adjacentNodes).includes(connections[i][0].toString())) {
          adjacentNodes[connections[i][0]] = new Array();
          adjacentNodes[connections[i][0]].push(connections[i][1]);
        } else {
          adjacentNodes[connections[i][0]].push(connections[i][1]);
        }
        if (!Object.keys(adjacentNodes).includes(connections[i][1].toString())) {
          adjacentNodes[connections[i][1]] = new Array();
          adjacentNodes[connections[i][1]].push(connections[i][0]);
        } else {
          adjacentNodes[connections[i][1]].push(connections[i][0]);
        }
      }
      let numberOfConnectedNodes = 0;
      let visitedNodes = [];
      for (let i = 0; i < n; i++) {
        if (!visitedNodes[i]) {
          numberOfConnectedNodes += 1;
          dfs(i, adjacentNodes, visitedNodes);
        }
      }
  
      return numberOfConnectedNodes - 1;
    }
  };
  