"use strict";


var Confession = function(){
   LocalContractStorage.defineMapProperty(this, "dataMap");
   LocalContractStorage.defineProperty(this, "size");
}


var ConfessionItem = function(_id,from,to,content,pubTime){
    this._id = _id;
    this.from = from;
    this.to = to;
    this.content = content;
    this.pubTime = pubTime;
}

ConfessionItem.prototype.toString = function(){
    return JSON.stringify(this);
};


Confession.prototype = {
    init: function () {
        this.size = 0;
    },
    set: function (from,to,content,pubTime) {
        var value = new ConfessionItem(this.size,from,to,content,pubTime);
        var index = this.size;
        this.dataMap.set(index, value);
        this.size +=1;
    },
    get: function (index) {
        return this.dataMap.get(index);
    },
    len:function(){
      return this.size;
    },
    forEach: function(limit, offset){
        limit = parseInt(limit);
        offset = parseInt(offset);
        if(offset>this.size){
           throw new Error("offset is not valid");
        }
        var number = offset+limit;
        if(number > this.size){
          number = this.size;
        }
        var result  = [];
        for(var i=offset;i<number;i++){
            var val = this.dataMap.get(i);
            val && result.push(val);
        }
        return result;
    },
    getAll:function(){
        return this.forEach(this.size,0);
    },
    getSize:function(){
        return this.size;
    },
    del:function(index){
        return this.dataMap.del(index);
    }
};



module.exports = Confession;
