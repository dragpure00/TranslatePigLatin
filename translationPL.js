function translatePL(str){

const regex=(/^[^aeiou]+/g);
const find=str.match(regex);

     if(find==null)
     {
      str=str.concat('way');
     }
    else
     {
       str=str.replace(regex,'').concat(find).concat('ay');
     }
return str;
  }
console.log(translatePL("consonant");
