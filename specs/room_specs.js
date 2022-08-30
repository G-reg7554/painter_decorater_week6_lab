const assert = require('assert');
const Room = require('../models/room.js');
const PaintCan = require('../models/paint.js');

describe('Room', function (){
    let room;

    this.beforeEach(function(){
        room = new Room(8)

    });

    it('should have an area',function(){
        const actual = room.area;
        assert.strictEqual(actual, 8)

    });

    it('should start not painted',function(){
        const actual = room.painted;
        assert.strictEqual(actual, false)
    });
    it('should be able to be painted',function(){
        const actual = room.roomCanBePainted();
        assert.strictEqual(actual, true)
    });

})
//Room tests above
    describe('PaintCan', function(){
            let paint = new PaintCan(5)

            it('should have a volume of paint',function(){
                const actual = paint.litres;
                assert.strictEqual(actual, 5)
            });

            it('paint can should be empty',function(){
                const actual = paint.paintCanBeEmpty();
                assert.strictEqual(actual, 0)
            });


        
    
});

        