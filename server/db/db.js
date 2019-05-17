/**
 * Created by ebundala on 5/15/2019.
 */

const storage={
    users:{

    },
    loans:{
'1558070526521':{
    "firstName": "admin",
    "lastName": "admin",
    "email": "admin@admin.com",
    "password": "admin",
    "address": "admin",
    "status": "pending",
    "isAdmin": true,
    "createdOn": "Fri, 17 May 2019 05:22:06 GMT",
    "id": 1558070461857,
    "user": "admin@admin.com",
    "repaid": false,
    "tenor": 6,
    "amount": 5000,
    "paymentInstallment": 875,
    "balance": 0,
    "interest": 250,
    "loanId": 1558070526521
}
    },
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
    getStorage(){
        return storage;
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

            let createdOn= date.toUTCString();

            let value={...val,createdOn:createdOn};
            value[key]=id;

            //calculate loans interest
            if(collection==="loans"){
                let {amount,tenor}=value;
                let interest=0.05*amount;
                let paymentInstallment=(amount+interest)/tenor;

                value={...value,interest,paymentInstallment}
            }

            //create user indexes
            if(collection==="users"){
                storage["usersIndex"][`${val.email}`]=id;
            }

            storage[`${collection}`][`${id}`]=value;
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


