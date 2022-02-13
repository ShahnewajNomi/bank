function getInputValue(){
    const depositInput=document.getElementById('deposit-amount');
    // deposit input ke khuje peyechi
    const depositAmountText=depositInput.value;
    // input er ghore ke ache seta uki mere dekhe aslam
    const depositAmount=parseFloat(depositAmountText);
    //    clear input field
    depositInput.value='';
    return depositAmount;
}
// console.log('banking js added')
document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log('deposit button  clicked')
    // const depositInput=document.getElementById('deposit-amount');
    // // deposit input ke khuje peyechi
    // const depositAmountText=depositInput.value;
    // // input er ghore ke ache seta uki mere dekhe aslam
    // const depositAmount=parseFloat(depositAmountText);
    // zehetu uki diye dekhi se ekta string r amar pochondo number amke pitaya string beta ke number banaite hobe
    // console.log(depositAmount)
    // so eivabe amra deposit button e za dibo ta deposit section er ghore dekhte parbo
    const depositAmount=getInputValue();
    // get current deposit
    const depostTotal=document.getElementById('deposit-total');
    // ekhon khela hobe sum er,span er vitore thaka 000 ke khuje pelam
    const depostTotalText=depostTotal.innerText;
    /*ekhane deposit total er vitore ze text gulu ache tader ber kore anar jnno eta kora holo*/
    // console.log(depostTotalText);
    const previousDepositTotal=parseFloat(depostTotalText);
    // string ke pitaya number banailam
    depostTotal.innerText=previousDepositTotal+depositAmount;
    // update balance
    // sudhu ki etuk korlei shanti pabo?Naaaaaa,ekhon abar balance er sthe eta ke angta lagaite hobe
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText);
    balanceTotal.innerText=previousBalanceTotal+depositAmount;
    
    

});
document.getElementById('withdraw-button').addEventListener('click',function(){
    // console.log('withdraw button clicked')
    const withdrawInput=document.getElementById('withdraw-amount');
    const withdrawAmountText=withdrawInput.value;
    const withdrawAmount=parseFloat(withdrawAmountText);
    // console.log(withdrawAmountText);
    // er e sthe amader input newar kaj sesh
    // update withdraw total
    const withdrawTotal=document.getElementById('withdraw-total');
    const withdrawTotalText=withdrawTotal.innerText;
    const previouswithdrawTotal=parseFloat(withdrawTotalText)
    withdrawTotal.innerText=previouswithdrawTotal+withdrawAmount;
    // etuk korei kintu shanti nai eta ke abar balance er sthe angta lagaite hbe

    // update balance after withdraw
    const balanceTotal=document.getElementById('balance-total');
    // balance update korte gele amake prothome total koy tk ache seta khuje pete hobe
    const balanceTotalText=balanceTotal.innerText;
    // tarpor sei total jinish ta dekhar jonno inner text use korbo karon eta input e nei,span or something e ache
    const previousBalanceTotal=parseFloat(balanceTotalText);
    // zetu eta string tai eta ke number e convert kore nilam
    balanceTotal.innerText=previousBalanceTotal-withdrawAmount;
    // sob seshe sei convert howa number er sthe withdraw amount minus kore dilei khel khotom
    // clear withdraw input field
    withdrawInput.value='';
});

