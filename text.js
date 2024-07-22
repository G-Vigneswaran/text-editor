import { fontDetails } from "./punt-frontend-assignment (1).js";
import { changeFont, saveToLocalStorage, loadFromLocalStorage, deleteFromLocalStorage} from "./utils.js";

loadFromLocalStorage();
let familyHtml='';
let boldHtml='';
let value;
let fontweight;
for (let fontname in fontDetails) {
  if (fontDetails.hasOwnProperty(fontname)) {
      value = fontDetails[fontname];
      familyHtml+=`
      <option value="${fontname}">${fontname}</option>
      `;
      //console.log(fontname);
      
  }
  document.querySelector('.js-font-family').innerHTML=familyHtml;
}

document.querySelector('.js-font-family').addEventListener('click',()=>{
  let src_url;
  let fontname=document.querySelector('.js-font-family').value;
  boldHtml='';
  for(fontweight in fontDetails[fontname]){
    if (fontDetails[fontname].hasOwnProperty(fontweight)) {
      if(!(String(fontweight).includes("italic"))){
        boldHtml+=`
        <option value="${fontweight}">${fontweight}</option>
        `;
      }
  }}
  
  document.querySelector('.js-font-weight').innerHTML=boldHtml;
  let bold= document.querySelector('.js-font-weight').value;
  if(document.querySelector('.js-checkbox').checked===false){
    src_url=fontDetails[fontname][bold];
  }
  else{
    src_url=fontDetails[fontname][String(bold)+"italic"];
  }
  if(!src_url){
    src_url=fontDetails[fontname][bold];
    document.querySelector('.js-checkbox').checked=false;
  }
  changeFont(fontname,src_url);

});

document.querySelector('.js-font-weight').addEventListener('click',()=>{
  let fontname=document.querySelector('.js-font-family').value;
  let bold= document.querySelector('.js-font-weight').value;
  let src_url=fontDetails[fontname][bold];
  changeFont(fontname,src_url);

});

document.querySelector('.js-checkbox').addEventListener('click',()=>{
  let src_url;
  let fontname=document.querySelector('.js-font-family').value;
  let bold= document.querySelector('.js-font-weight').value;
  if(document.querySelector('.js-checkbox').checked===false){
    src_url=fontDetails[fontname][bold];
  }
  else{
    src_url=fontDetails[fontname][String(bold)+"italic"];
  }
  console.log(src_url);
  console.log(document.querySelector('.js-checkbox').checked);
  if(src_url){
    changeFont(fontname,src_url);
  }
  else{
    alert("Italic format is unavailable for the current font!!");
    document.querySelector('.js-checkbox').checked=false;
  }
});
document.querySelector('.js-save').addEventListener('click',()=>{
  saveToLocalStorage();
  window.alert("saved!!");

});

document.querySelector('.js-reset').addEventListener('click',()=>{
  deleteFromLocalStorage();
  document.querySelector('.js-output').value='';
});
document.querySelector('.js-output').addEventListener('keyup',()=>{
  saveToLocalStorage();
});
