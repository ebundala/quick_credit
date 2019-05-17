/**
 * Created by ebundala on 5/15/2019.
 */

const storage={
    users:{

    },
    loans:{},
    repayments:{},
    usersIndex:{}
};
//the default admin user;
const defaultAdmin= {
    "firstName": "admin",
    "lastName": "admin",
    "email": "admin@admin.com",
    "password": "admin",
    "address": "admin",
    "status": "verified",
    "isAdmin": true,
}

export default class Db{
    constructor(){
        this.USERS="users";
        this.LOANS="loans";
        this.REPAYMENTS="repayments";
        this.USERS_INDEX="usersIndex";

        if(!this.userExist("admin@admin.com")){
        this.insert(this.USERS,defaultAdmin);

        }
    }
    timestamp(){
        let date = new Date();
        return Math.ceil(date.getTime());
     }
    userExist(email){
        let user= this.getByIndex(this.USERS,this.USERS_INDEX,email);
         return !!user;
     }
    insert(collection,val,key="id"){
        if(collection&&val)
        {   let id=this.timestamp();
            let date=new Date();
            //date.setMilliseconds(id);
            let createdOn= date.toUTCString();
            //val[key]=id;
            //val.createdOn=createdOn;
            let value={...val,createdOn:createdOn};
            value[key]=id;
            storage[`${collection}`][`${id}`]=value;

            //create user indexes
            if(collection==="users"){
                storage["usersIndex"][`${val.email}`]=id;
            }
        return id;
        }
        return -1;
    }
    remove(collection,id){
        if(collection&&id)        {
            delete storage[`${collection}`][`${id}`];
            return id
        }
        return -1;
    }
    update(collection,val,key="id"){
        if(collection&&val)        {
            if(storage[`${collection}`][`${val[`${key}`]}`])
             storage[`${collection}`][`${val[`${key}`]}`]=val;
            return storage[`${collection}`][`${val[`${key}`]}`];
        }
        return null;
    }
    fetch(collection,id){
        if(collection&&id)
        {
            return storage[`${collection}`][`${id}`];

        }
        return null
    }
    getAllByFieldValue(col,field,value,f2=null,v2=null,f3=null,v3=null){
        let vals=storage[`${col}`];
        if(vals) {
                return Object.values(vals).filter((item) => {
              let ch3=true;
               if(f3&&v3){
                   ch3= item[`${f3}`] === v3;
               }
              let ch2=true;
              if(f2&&v2){
                ch2= item[`${f2}`] === v2;
              }
             return (item[`${field}`] === value)&&ch2&&ch3
          })

        }
        return null;
    }
    all(collection){
        let values=storage[`${collection}`];
      return  Object.values(values);
    }
    getByIndex(collection,indexName,value){
        let id=this.fetch(indexName,value);
        return this.fetch(collection,id);
    }
}


