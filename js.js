let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let mas = [];
let count = 0;
let timer;

canvas.onclick = (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    x = Math.floor(x/10); //300/10=30
    y = Math.floor(y/10);
    mas[y] [x] = 1;
    drawField();
}

goLife = () => {
    let n = 30, m = 30;
    for (let i = 0; i < m; i++) {
        mas[i] = [];
        for (let j = 0; j < n; j++) {
            mas[i] [j] = 0;
        }
    }
}
goLife();

drawField = () => {
    ctx.clearRect (0, 0, 300, 300);
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (mas [i] [j] == 1) {
                ctx.fillRect (j*10, i*10, 10, 10);
            }
        }
    }
}

startLife = () => {
    let mas2 = [];
    for (let i = 0; i < 30; i++) {
        mas2[i] = [];
        for (let j = 0; j < 30; j++) {
            let neigh = 0;
            if (mas[fpm(i)-1][j]==1) neigh++;
            if (mas[i][fpp(j)+1]==1) neigh++;
            if (mas[fpp(i)+1][j]==1) neigh++;
            if (mas[i][fpm(j)-1]==1) neigh++;
            if (mas[fpm(i)-1][fpp(j)+1]==1) neigh++;
            if (mas[fpp(i)+1][fpp(j)+1]==1) neigh++;
            if (mas[fpp(i)+1][fpm(j)-1]==1) neigh++;
            if (mas[fpm(i)-1][fpm(j)-1]==1) neigh++;
            (neigh ==2 || neigh==3) ? mas2[i] [j]=1 : mas2[i] [j]==0;
         }
    }
    mas = mas2;
    drawField();
    count++;
    document.getElementById('count').innerHTML = count;
    timer = setTimeout(startLife, 300);
}

fpm = (i) => {
    if(i==0) return 3;
    else return i;
}

fpp = (i) => {
    if(i==29) return -1;
    else return i;
}

document.getElementById('start').onclick = startLife;