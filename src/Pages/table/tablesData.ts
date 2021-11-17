
export interface DataShape{
    
    id: string,
    name:string,
    status:string,
    resources:string,
    price:string,
    provider:{
         image:string,
            name:string
    },
    complicity:string,
    start_data:string,
    deadLine:string,
    offers:string,
    author:string,
    isEditMode:boolean,


}

export  const data:Array<DataShape>=[
    {
        "id":"1",
        "name":"information  system",
        "status":"In Review",
        "resources":"0",
        "price":"550",
        "provider":{
            "image":"https://miro.medium.com/max/1400/0*0ZgS_Z1-5VBdbN3u.png",
            "name":"name"},
        "complicity":"11",
        "start_data":"1.1.2020",
        "deadLine":"31.2.2020",
        "offers":"2",
        "author":"Mohammed  hmaza",
            "isEditMode":true,




    },
    {
        "id":"2",
        "name":"systn  system",
        "status":"Design",
        "resources":"4",
        "price":"555",
        "provider":{
            "image":"image",
            "name":"name"},
        "complicity":"12",
        "start_data":"1.3.2020",
        "deadLine":"31.4.2020",
        "offers":"4",
        "author":"Mohammed Alreai",
        "isEditMode":true,



    }

]