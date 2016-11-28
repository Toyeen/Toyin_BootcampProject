var dataTypeTest function = (arg){
  
    if(typeof arg === null && typeof arg === undefined){
      
      return 'no value';
      
    }else if (typeof arg === booleans){
      
      return 'boolean';
      
    }else if (typeof arg === 'number'){
      
      return'100>=arg<100';
      
    }else if (typeof arg === ['']){
      
      return 'arg.length';
      
    }else if (typeof arg === [""] || typeof arg === []){
      
      return 'arg[2]';
      
    }else{
    
      return 'f(true)';
      
  }  }  