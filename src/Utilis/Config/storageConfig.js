const getItem =(key)=>{
  if(!key){
    return
  }
  const value = localStorage.getItem(key)
  if(!value){
    alert("no such values")
    
  }
  else return value
}

const setItem=(key,value)=>{
  if(!key || value){
    alert("Please provide key and it's value")
  }
  else{
    localStorage.setItem(key,value);
  }
}

const clear=()=>{
  localStorage.clear()
}

const removeItem=(key)=>{
  if(!key){
    alert ("No such key exists")
  }else{
    localStorage.removeItem(key)
  }
}