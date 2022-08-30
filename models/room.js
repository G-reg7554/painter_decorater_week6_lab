
const Room = function (area) {
    this.area = area;
    this.painted = false;
}

Room.prototype.roomCanBePainted = function (){
    return this.painted = true;
}


module.exports = Room

