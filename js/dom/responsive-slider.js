const d = document;

export default function responsiveSlider(){
    const $next = d.querySelector('.slider-btns .next'),
    $prev = d.querySelector('.slider-btns .prev'),
    $slides = d.querySelectorAll('.slider-slide');

    let i = 0;

    d.addEventListener('click',e=>{

        if(e.target === $prev){
            e.preventDefault();
            $slides[i].classList.remove('active');
            i--;

            if(i<0){
                i = $slides.length -1;
            }
            $slides[i].classList.add('active');
        }
        
        if(e.target === $next){
            e.preventDefault();
            $slides[i].classList.remove('active');
            i++;
    
            if(i>=$slides.length){
                i = 0;
            }
            $slides[i].classList.add('active');
            
        }


    });
}