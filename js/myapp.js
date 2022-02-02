const trader = document.getElementById("trader");
const web = document.getElementById("web");
const fitness = document.getElementById("fitness");

function mOver (trader, web, fitness) {
    trader.innerHTML = "<i class='fas fa-chart-line'></i>";
    web.innerHTML = "<i class='far fa-file-code'></i>";
    fitness.innerHTML = "<i class='fas fa-dumbbell'></i>";
}

function mOut (trader, web, fitness) {
    trader.innerHTML = "Trader";
    web.innerHTML = "Web Developer";
    fitness.innerHTML = "Fitness Enthusiast";
}
