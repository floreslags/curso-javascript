const d = document,
w=window;

export default function topScrollButton(btn){

    const $scrollBtn = d.querySelector(btn);

    
    w.addEventListener("scroll",e=>{
        let topScroll = w.pageYOffset || d.scrollTop;

        if(topScroll > 333){
            $scrollBtn.classList.remove('hidden');
        }else{
            $scrollBtn.classList.add('hidden');
        }
    });

    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",
                top:0
            })
        }
    });
}