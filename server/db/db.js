/**
 * Created by ebundala on 5/15/2019.
 */
const _storage={};

export default class Db{
    constructor(name){
        this.name=name;

    }
    _key(val){}
    insert(val){
     _storage[this.name][_key(val)]=val
    }
    remove(val){
        delete _storage[this.name][this._key(val)]
    }
    update(val){
        return this.insert(val)
    }
    query(val){
        return _storage[this.name][this._key(val)]
    }
}