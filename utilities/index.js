const checkField=(data)=>{
  const errors=[]
  const mandatoryFields = ["id","title","description","completionStatus"]
 for (const field in data){
  if(mandatoryFields.includes(field)){
     if(field == "completionStatus" && typeof data[field]!=="boolean") errors.push(false)
     if(field!=="completionStatus" && data[field].length==0) errors.push(false)
     else errors.push(true)
  } 
  else errors.push(false)
 }
 return errors
}

module.exports={
  checkField
}