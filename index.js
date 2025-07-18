document.querySelectorAll('.toggle-sec').forEach(section => {

        const content = section.nextElementSibling;
        const plusicon = section.querySelector('.plusbtn');
        const crossicon = section.querySelector('.crossbtn');

        section.addEventListener("click", () => {
                const isVisible = content.style.display === "block"

                document.querySelectorAll(".toggle-sec").forEach(sec => {
                        const othercontent = sec.nextElementSibling;
                        const otherplus = sec.querySelector('.plusbtn');
                        const othercross = sec.querySelector('.crossbtn');

                        if (othercontent !== content) {
                                othercontent.style.display = "none";
                                otherplus.style.display = "inline";
                                othercross.style.display = "none";
                        }
                });


                content.style.display = isVisible ? 'none' : 'block'

                plusicon.style.display = isVisible ? 'inline' : 'none'
                crossicon.style.display = isVisible ? 'none' : 'inline'
        });
});


const parentbtn=document.querySelector(".Trendingshow")
const rightbtn=document.querySelector(".rightscroll").firstElementChild
rightbtn.addEventListener("click",()=>{
        const p=document.querySelector(".rightscroll").parentElement;
       
        p.scrollTo({left:p.scrollWidth,behavior:'smooth'});

      });
      
 parentbtn.addEventListener("scroll",()=>{
        const pscrollLeft=parentbtn.scrollLeft;
        const pclientWidth=parentbtn.clientWidth;
       if(Math.ceil(pscrollLeft + pclientWidth) >= parentbtn.scrollWidth ){
       rightbtn.style.display='none';
       }
      else{
                rightbtn.style.display='block';
    }   
 })     

 const leftscr=document.querySelector(".leftscroll").firstElementChild

 leftscr.addEventListener("click",()=>{
        const q=document.querySelector(".leftscroll").parentElement;
   
        q.scrollTo({left:0,behavior:'smooth'})
 })

 parentbtn.addEventListener("scroll",(e)=>{
      if(e.target.scrollLeft>100){
       leftscr.style.display='block';
       }
      else{
                leftscr.style.display='none'
    }
   
 });
  