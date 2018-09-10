import Realm from 'realm'
export const PERSON_SCHEMA = "Person";
export const TestSchema = {
    name: PERSON_SCHEMA,
    primaryKey:'id',
    properties:{
        id:'int',
        name:{ type:'string',indexed:true},
        married:{type:'bool',default:false},
    }
}
export const testingDatabase=()=>{
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            realm.create(PERSON_SCHEMA,{
                id:1,
                name:'Kyun',
            })
            realm.create(PERSON_SCHEMA,{
                id:2,
                name:"Kakata",
            })
            realm.create(PERSON_SCHEMA,{
                id:3,
                name:'Kyun Kakata',
            })
            realm.create(PERSON_SCHEMA,{
                id:4,
                name:'Thu Hang',
            })
        })
    })
}
export const databaseOptions={
    schema:[TestSchema]
}
export const insertNewDatabase=(id,name,married)=>{
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            realm.create(PERSON_SCHEMA,{
                id:id,
                name:name,
                married:married
            })
            
        })
    })
    
}
export const deleteDatabase=(id)=>{
    Realm.open(databaseOptions).then(realm=>{
        let data = realm.objectForPrimaryKey(PERSON_SCHEMA,id);
        realm.delete(data);
        realm.close();
    })
}
export const marriedAllDatabase=()=>{
    Realm.open(databaseOptions).then(realm=>{
        let data = realm.objects(PERSON_SCHEMA).filtered('married == false');
        realm.write(()=>{
            for(i=0;i<=data.length;i++){
                realm.create(PERSON_SCHEMA,{id:data[i].id,name:'Fiora'},true);
                console.log(data[i].name)
            }
        })
      
    })
    alert('HJe')
    
}
export const clearAllDatabase=()=>{
    Realm.open(databaseOptions).then(realm=>{
        let data =realm.objects(PERSON_SCHEMA)
        realm.delete(data);
    })
}
export const querryDatabaseByName=()=>{

}
