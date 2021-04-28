import { useEffect, useState } from 'react';
import { useUpdate } from './useUpdate';


type newRecordItem = {
    tagIds:number[]
    note:string
    category:'+' | '-'
    amount:number,
    createdAt:string
}

// type RecordItem = newRecordItem & {
//     createdAt:string // ISO 8601
// }

const useRecords = ()=>{
    const [records,setRecords] = useState<newRecordItem[]>([])

    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]') )
    },[])

    const addRecord = (newRecord:newRecordItem) =>{
        if(newRecord.amount <=0 ){ return {status:0,msg:'请输入金额'} }
        if(newRecord.tagIds.length === 0){
            return {status:0,msg:'请选择标签'}
        }
        const record = {...newRecord}
        setRecords([...records,record])
        
        return {status:1,msg:'保存成功'}
    }

    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])

    return{records,addRecord}
}

export {useRecords}