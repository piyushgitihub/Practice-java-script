function inc(){
    c = ( c >= 10) ? 0 : c + 1;
    ci = ( c >= 10) ? 0 : ci + 1;
    update();
}

function dec(){
    c = c > 0 ? c - 1 : 0;
    cd = (cd >= 10) ? 0 : cd + 1;
    update();
}

function update(){
    incCount.textContent = ci;
    decCount.textContent = cd;
    count.textContent = c;
}