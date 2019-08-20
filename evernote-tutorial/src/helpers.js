// This function is used to wait one second after the 
// user has typed in the evernote web application so that we 
// are not continually storing information 
export default function debounce(a,b,c){
    var d,e;
    return function(){
      function h(){
        d=null;
        c||(e=a.apply(f,g));
      }
      var f=this,g=arguments;
      return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
  }
  
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };
  