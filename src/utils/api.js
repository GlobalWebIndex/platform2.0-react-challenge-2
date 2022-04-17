export const api = async (url, method) => {
  try {
    const response  = await  fetch(url, { method}) ;
    const data  = await response.json();
    return data;
  }catch(error){
    console.log(error);
  }
 
  };  

