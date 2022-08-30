const Room = require('./room.js');

const PaintCan = function (litres) {
    this.litres = litres;
}

PaintCan.prototype.paintCanBeEmpty = function (){
    return this.litres = 0;
}

module.exports = PaintCan