 let time = document.querySelector('.time');
let countdown = 10;
let pop = document.querySelector(".pop");
let canvas = document.querySelector('#my-canvas')

setTimeout(()=>{
    time.innerText = countdown--;
    setTimeout(()=>{
        time.innerText = countdown--;
        setTimeout(()=>{
            time.innerText = countdown--;
            setTimeout(()=>{
                time.innerText = countdown--;
                setTimeout(()=>{
                    time.innerText = countdown--;
                    setTimeout(()=>{
                        time.innerText = countdown--;
                        setTimeout(()=>{
                            time.innerText = countdown--;
                            setTimeout(()=>{
                                time.innerText = countdown--;
                                setTimeout(()=>{
                                    time.innerText = countdown--;
                                    setTimeout(()=>{
                                        time.innerText =countdown--;
                                        setTimeout(()=>{
                                            pop.classList.add('active') 
                                            canvas.classList.add('active') 
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
