function newImage(src, left, bottom) {
    let img = document.createElement('img');
    img.src = src;
    img.style.position = 'fixed';
    img.style.left = left;
    img.style.bottom = bottom;
    document.body.append(img);
}

function newItem(src, left, bottom) {
    let item = document.createElement('img');
    item.src = src;
    item.style.position = 'fixed';
    item.style.left = left;
    item.style.bottom = bottom;
    document.body.append(item);
    item.addEventListener('dblclick', function() {
        item.remove();
    });
}

function appendImage(src, x, y) {
    let imgTile = document.createElement('img');
    imgTile.src = src;
    imgTile.style.position = 'absolute';
    imgTile.style.left = x + 'px';
    imgTile.style.top = y + 'px';
    document.body.appendChild(imgTile);
}

const skyLimit = window.innerHeight / 2;
for(let y = 0; y < skyLimit; y += 100) {
    for(let x = 0; x < window.innerWidth; x += 100) {
        appendImage('assets/sky.png', x, y);
    }
}
for(let y = skyLimit; y < window.innerHeight; y += 100) {
    for(let x = 0; x < window.innerWidth; x += 100) {
        appendImage('assets/grass.png', x, y);
    }
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');
newItem('assets/sword.png', '500px', '405px');
