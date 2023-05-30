const convertBtn = document.querySelector(`button`);
const coinImgLeft = document.querySelector(`.coin-left`);
const coinImgRight = document.querySelector(`.coin-right`);
const selectOne = document.querySelector(`.in-currency`);
const selectTwo = document.querySelector(`.out-currency`);
const leftInput = document.querySelector(`.left-input`);
const rightInput = document.querySelector(`.right-input`);
const message = document.querySelector(`p`);
// greate currency
// let azn2usd = 0;
    // azn2tl,
    // azn2euro,
    // azn2rub;
    




  




selectOne.addEventListener(`change`, (event) => {
    if (event.target.value === `rub`){
        coinImgLeft.src=`./img/icon-ruble.png`
    } else if (event.target.value === `tl`){
        coinImgLeft.src=`./img/icon-turkish-lira.png`
    } else if (event.target.value === `euro`){
        coinImgLeft.src=`./img/icon-euro.png`
    } else if (event.target.value === `usd`){
        coinImgLeft.src=`./img/icon-usd.png`
    } else if (event.target.value === `azn`){
        coinImgLeft.src=`./img/icon-manat.png`
    }

});

selectTwo.addEventListener(`change`, (event) => {
    if (event.target.value === `rub`){
        coinImgRight.src=`./img/icon-ruble.png`
    } else if (event.target.value === `tl`){
        coinImgRight.src=`./img/icon-turkish-lira.png`
    } else if (event.target.value === `euro`){
        coinImgRight.src=`./img/icon-euro.png`
    } else if (event.target.value === `usd`){
        coinImgRight.src=`./img/icon-usd.png`
    } else if (event.target.value === `azn`){
        coinImgRight.src=`./img/icon-manat.png`
    }

});


fetch(`https://data.fixer.io/api/latest?access_key=GOQt3WMPg6hb7VLXpL8zJxQDvtzFo1vP`, )

convertBtn.addEventListener(`click`, (event) =>{
    if (leftInput.value > 0 && rightInput.value == 0){
     
        // // rub convertation 
        // if (selectOne.value === `rub` && selectTwo.value === `tl`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `rub` && selectTwo.value === `euro`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `rub` && selectTwo.value === `usd`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `rub` && selectTwo.value === `azn`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `rub` && selectTwo.value === `rub`){
        //     console.log(`Please write only one input`);
        // };
        // // tl convertation
        // if (selectOne.value === `tl` && selectTwo.value === `rub`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `tl` && selectTwo.value === `euro`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `tl` && selectTwo.value === `usd`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `tl` && selectTwo.value === `azn`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `tl` && selectTwo.value === `tl`){
        //     console.log(`Please write only one input`);
        // };
        // // euro convertation
        // if (selectOne.value === `euro` && selectTwo.value === `rub`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `euro` && selectTwo.value === `tl`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `euro` && selectTwo.value === `usd`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `euro` && selectTwo.value === `azn`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `euro` && selectTwo.value === `euro`){
        //     console.log(`Please write only one input`);
        // };
        // // usd convertation 
        // if (selectOne.value === `usd` && selectTwo.value === `rub`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `usd` && selectTwo.value === `tl`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `usd` && selectTwo.value === `euro`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `usd` && selectTwo.value === `azn`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `usd` && selectTwo.value === `usd`){
        //     console.log(`Please write only one input`);
        // };
        // // azn convertation
        // if (selectOne.value === `azn` && selectTwo.value === `rub`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `azn` && selectTwo.value === `tl`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `azn` && selectTwo.value === `euro`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `azn` && selectTwo.value === `usd`){
        //     rightInput.value = leftInput.value * azn2usd;
        // } else if (selectOne.value === `azn` && selectTwo.value === `azn`){
        //     console.log(`Please write only one input`);
        // };
    } else if(rightInput.value > 0 && leftInput.value == 0){
        // // rub convertation 
        // if (selectOne.value === `rub` && selectTwo.value === `tl`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `rub` && selectTwo.value === `euro`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `rub` && selectTwo.value === `usd`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `rub` && selectTwo.value === `azn`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `rub` && selectTwo.value === `rub`){
        //     console.log(`Please write only one input`);
        // };
        // // tl convertation
        // if (selectOne.value === `tl` && selectTwo.value === `rub`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `tl` && selectTwo.value === `euro`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `tl` && selectTwo.value === `usd`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `tl` && selectTwo.value === `azn`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `tl` && selectTwo.value === `tl`){
        //     console.log(`Please write only one input`);
        // };
        // // euro convertation
        // if (selectOne.value === `euro` && selectTwo.value === `rub`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `euro` && selectTwo.value === `tl`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `euro` && selectTwo.value === `usd`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `euro` && selectTwo.value === `azn`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `euro` && selectTwo.value === `euro`){
        //     console.log(`Please write only one input`);
        // };
        // // usd convertation 
        // if (selectOne.value === `usd` && selectTwo.value === `rub`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `usd` && selectTwo.value === `tl`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `usd` && selectTwo.value === `euro`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `usd` && selectTwo.value === `azn`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `usd` && selectTwo.value === `usd`){
        //     console.log(`Please write only one input`);
        // };
        // // azn convertation
        // if (selectOne.value === `azn` && selectTwo.value === `rub`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `azn` && selectTwo.value === `tl`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `azn` && selectTwo.value === `euro`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `azn` && selectTwo.value === `usd`){
        //     console.log(leftInput.value);
        // } else if (selectOne.value === `azn` && selectTwo.value === `azn`){
        //     console.log(`Please write only one input`);
        // };
    } else if(leftInput.value > 0 && rightInput.value > 0){
        console.log(`Please write only one input`);
    }

})
