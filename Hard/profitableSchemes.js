/*
n = cantidad de chorros
minProfit = ganancia minima
group = lista de cuantos chorros se necesitan para cada robo
profit = lista de la ganancia de cada robo
*/

const dfs = function (
    node,
    n,
    partialProfit,
    minProfit,
    group,
    profit,
    adjacentNodes,
    visitedNodes,
    solutions
) {
    visitedNodes[node] = true;
    if (!Object.keys(adjacentNodes).includes(node.toString())) {
        return;
    }
    for(let i = 0; i<adjacentNodes[node].length; i++){
        if (!visitedNodes[adjacentNodes[node][i]]) {
            visitedNodes[adjacentNodes[node][i]] = true;
            let updatedN = n-group[adjacentNodes[node][i]];
            let updatedPartialProfit = partialProfit+profit[adjacentNodes[node][i]];
            if(updatedN >= 0 && updatedPartialProfit >= minProfit){
                solutions+=1;
            }
            dfs(adjacentNodes[node][i],updatedN,updatedPartialProfit,minProfit,group,profit, adjacentNodes, visitedNodes,solutions);
        }
    }
};

var profitableSchemes = function (n, minProfit, group, profit) {
    let adjacentNodes = {};
    let solutions = 0;
    let visitedNodes = [];

    if (profit.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < profit.length; i++) {
            adjacentNodes[i] = new Array();
            for (let j = i + 1; j < profit.length; j++) {
                adjacentNodes[i].push(j);
            }
        }
        for (let h = 0; h < profit.length; h++) {
            if (profit[h] >= minProfit && group[h] <= n) {
                solutions += 1;
            }
            dfs(
                h,
                n-group[h],
                profit[h],
                minProfit,
                group,
                profit,
                adjacentNodes,
                visitedNodes,
                solutions
            );
        }
        console.log(solutions)
    }

    //la carga funciona perfecto
};

profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8]);
