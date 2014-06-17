/*
Ottieni una rappresentazione oggettiva degli attributi di un'oggetto
Get an objective representation of the attributes of an object
*/

function getAttributesRepresentationOf(x){
  var i,o=null,p='attributes';
  if(x&&(p=x[p])&&(i=p.length)){o=Object.create(null);while(i--){x=p[i];o[x.name]=x.value}};
  return o
};


/*
console.log('\n',getAttributesRepresentationOf(document.head));
console.dir(getAttributesRepresentationOf(document.body));
console.log(getAttributesRepresentationOf(null));
console.log(getAttributesRepresentationOf(1));
console.log(getAttributesRepresentationOf(0));
console.log(getAttributesRepresentationOf([]));
console.log(getAttributesRepresentationOf(false));
*/
