// login button handler 

const loginBtn = document.getElementById('btn-login');

loginBtn.addEventListener( 'click', (event) => {
    
    const loginArea = document.getElementById('login-area');
    const transectionArea = document.getElementById('transection-area');
    
    loginArea.style.display = 'none';
    transectionArea.style.display = 'block';

} );

// Deposit amount 

    const depositBtn = document.getElementById('deposit-submit');

    depositBtn.addEventListener( 'click', () =>{
        
        // update the deposit box 
        updateAmount( 'deposit-input' , 'current-deposit' );

        // update the balance box 
        updateAmount( 'deposit-input' , 'current-balance' );
       
        document.getElementById('deposit-input').value = '';


    } );

// withdraw amount  

    const withdrawBtn = document.getElementById('withdraw-submit');

    withdrawBtn.addEventListener( 'click', () =>{

        updateAmount( 'withdraw-input', 'current-withdraw' );
        withdrawUpdate('withdraw-input', 'current-balance')
        document.getElementById('withdraw-input').value = ""; 

    } );


    function updateAmount( inputId, outputId ){
        // get the input 
        const inputValue = parseFloat(document.getElementById(inputId).value);

        // get the output box 
        const getOutputValue = parseFloat(document.getElementById(outputId).innerText);
        const totalUpdate = inputValue + getOutputValue; 

        document.getElementById(outputId).innerText = totalUpdate; 

    }

    function withdrawUpdate( inputId, outputBalanceId ){
        const inputValue = parseFloat(document.getElementById(inputId).value);

        const outputBalanceValue = parseFloat(document.getElementById(outputBalanceId).innerText);
        const updateBalanceValue = outputBalanceValue - inputValue;

        document.getElementById( outputBalanceId ).innerText = updateBalanceValue;


    }

