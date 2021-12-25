const   numAdd1=document.querySelector('#numAdd1'),
        numAdd2=document.querySelector('#numAdd2'),
        btnAdd=document.querySelector('#btnAdd'),
        resAdd=document.querySelector('#resAdd'),
        numSub1=document.querySelector('#numSub1'),
        numSub2=document.querySelector('#numSub2'),
        btnSub=document.querySelector('#btnSub'),
        resSub=document.querySelector('#resSub'),
        numMulti1=document.querySelector('#numMulti1'),
        numMulti2=document.querySelector('#numMulti2'),
        btnMulti=document.querySelector('#btnMulti'),
        resMulti=document.querySelector('#resMulti'),
        numInfi1=document.querySelector('#numInfi1'),
        numInfi2=document.querySelector('#numInfi2'),
        btnInfi=document.querySelector('#btnInfi'),
        resInfi=document.querySelector('#resInfi'),
        btnReset=document.querySelector('#btnReset');

        btnAdd.onclick=function(){
            resAdd.innerHTML=(Number(numAdd1.value)+Number(numAdd2.value)).toFixed(2);
        }

        btnSub.onclick=function(){
            resSub.innerHTML=(Number(numSub1.value)-Number(numSub2.value)).toFixed(2);
        }

        btnMulti.onclick=function(){
            resMulti.innerHTML=(Number(numMulti1.value)*Number(numMulti2.value).toFixed(2));
        }

        btnInfi.onclick=function(){
            resInfi.innerHTML=(Number(numInfi1.value)/Number(numInfi2.value)).toFixed(2);
        }

        btnReset.onclick=function(){
            resAdd.innerHTML='';
            resSub.innerHTML='';
            resMulti.innerHTML='';
            resInfi.innerHTML='';
            numAdd1.value='';
            numAdd2.value='';
            numSub1.value='';
            numSub2.value='';
            numMulti1.value='';
            numMulti2.value='';
            numInfi1.value='';
            numInfi2.value='';
        }

        //------Task 2 Palindrome -------

        const   textInput=document.querySelector('#inputText'),
                check=document.querySelector('#check'),
                answer=document.querySelector('#answer'),
                resetPalindrome=document.querySelector('#palindromeReset');

        function checkPalindrome(string){
                string=string.toLowerCase().replaceAll(' ','');
                    return string==string.split('').reverse().join('')?true:false;
        } 

        check.onclick=function(){
            if(textInput.value===''){
                answer.innerHTML='You have not entered text! Enter text, please';
                answer.style.color='blue';
            }else if(checkPalindrome(textInput.value)){
                answer.innerHTML='Palindrome!';
                answer.style.color='green';
            }else{
                answer.innerHTML='Not a Palindrome';
                answer.style.color='red';
            }
        }

        resetPalindrome.onclick=function(){
            textInput.value='';
            answer.innerHTML='';
        }

        //--------Task 3 Count ----------

        const   click=document.querySelector('#click'),
                countClick=document.querySelector('#countClick'),
                countReset=document.querySelector('#countReset');

        let count=0;

        click.onclick=function(){
            count++;
            countClick.innerHTML=`click is: ${count}`;
            countClick.style.color='cadetblue';
            countClick.style='padding: 10px; font-size:20px; color:rgb(96, 161, 163);'
        }

        countReset.onclick=function(){
            countClick.innerHTML='';
            count=0;
        }
