const USER_NAME='user'

function setstorage(value){
   if(!value||typeof value==='function'){
    console.log('数据保存失败','value si :'+value);
   } else{
       localStorage.setItem(USER_NAME,JSON.stringify(value))
   }
}
function getstorage(){

}
function remstorage(){

}

export {
    setstorage,
    getstorage,
    remstorage
}