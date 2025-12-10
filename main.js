// small enhancements: open external links in new tab
document.addEventListener('click', function(e){
const a = e.target.closest('a');
if(!a) return;
try{
const url = new URL(a.href, location.href);
if(url.origin !== location.origin){
a.setAttribute('target','_blank');
a.setAttribute('rel','noopener noreferrer');
}
}catch(e){}
});