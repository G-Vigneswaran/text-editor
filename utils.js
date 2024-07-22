export function changeFont(fontname,src_url)
{
  const fontFace = new FontFace(fontname, `url(${src_url}) format('woff2')`);
    fontFace.load().then(function(loadedFont) {
        document.fonts.add(loadedFont);
        document.getElementById('outputId').style.fontFamily = fontname;
    }).catch(function(error) {
        console.error('Font loading failed:', error);
    });
}
export function saveToLocalStorage(){
  let content=document.querySelector('.js-output').value;
  localStorage.setItem('message',content);
}
export function loadFromLocalStorage(){
  let content=localStorage.getItem('message');
  document.querySelector('.js-output').value=content;
}

export function deleteFromLocalStorage(){
  localStorage.removeItem('message');
}