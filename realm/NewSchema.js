import Realm from 'realm'

export const PERSON_SCHEMA="Person"
export const CAR_SCHEMA="Car"
export const CarSchema={
    name:CAR_SCHEMA,

    properties:{
        
        make:'string',
        model:'string',
        miles:{type:'int',default:0}
    }
}
export const PersonSchema={
    name:PERSON_SCHEMA,
    primaryKey:'id',
    properties:{
        id:'int',
        name:'string',
        age:'int',
        car:{type:'Car'}
    }
}
export const databaseOptions={
    schema:[CarSchema,PersonSchema]
}
export const createDefaultDatabase=()=>{
    
    Realm.open(databaseOptions).then(realm=>{
        let data = realm.objects(PERSON_SCHEMA);
        if(data.length==0){
            alert('Anoha')
            // Create database when have no data.
            realm.write(()=>{
                
                realm.create(PERSON_SCHEMA,{
                    id:1,
                    name:'Jone Legend',
                    age:64,
                    car:{make:'Honda',model:'APK'}
                })
                realm.create(PERSON_SCHEMA,{
                    id:2,
                    age:24,
                    name:'Jane Smith',
                    car:{make:'Honda',model:'AK16'}
                })
                realm.create(PERSON_SCHEMA,{
                    id:3,
                    name:'Arthur Wiliam',
                    age:38,
                    car:{make:'Honda',model:'MODE'}
                })
                realm.create(PERSON_SCHEMA,{
                    id:4,
                    name:'Helen Slim',
                    age:45,
                    car:{make:'Honda',model:'HELL'}
                })
                realm.create(PERSON_SCHEMA,{
                    id:5,
                    name:'Kyun Kakata',
                    age:20,
                    car:{make:'Honda',model:'Auto'}
                })
            })
        }
        //check
        let newData= realm.objects(PERSON_SCHEMA);
        console.log('Kyun Log:'+newData.length);
    })
}
export const addNewPerson=(id,name,age,make,model)=>{
    
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            realm.create(PERSON_SCHEMA,{
                id:id,
                name:name,
                age:age,
                cars:{make:make,model:model}
            })
        })
    })
}