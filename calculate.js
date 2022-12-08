const btnClicked=document.querySelector('.calculatorKeys');
const display=document.querySelector('.calculatorScreen');
btnClicked.addEventListener('click',e=>{
    const key=e.target;
    const action=key.dataset.action;
    const keyContent=key.textContent;
    const displayNum=display.textContent;
    if(e.target.matches('button')){
        if(!action){       
            if(displayNum==='0'){
                display.textContent=keyContent;
            } else{
                display.textContent=displayNum+keyContent;
            }   
            // console.log("numberClicked"); 
        }
        else{
            if(action==='add'||action==='subtract'||action==='multiply'||action==='divide'){
                console.log('operator clicked');
            }
            else if(action==='clear'){
                display.textContent='0';
                // console.log('clear clicked');
            }
            else if(action==='decimal'){
                display.textContent=displayNum+'.';
                // console.log('decimal clicked');
            }  
            else if(action==='calculate'){
                console.log('equals clicked');
            }           
        }    
    }
});


