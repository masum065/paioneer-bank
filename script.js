

        // login button event handler
        let loginBtn = document.getElementById('loginBtn');

        loginBtn.addEventListener('click', function(event){
            event.preventDefault();
            const loginArea = document.getElementById('login-area');
            loginArea.style.display = 'none';

            const transactionArea = document.getElementById('transactionArea');
            transactionArea.style.display = 'block';
        })


        // withdraw button event handler

        let withdrawBtn = document.getElementById('addWithdraw');

        withdrawBtn.addEventListener('click', function(){

            const amount = document.getElementById('withdrawAmount').value;
            const amountNumber = parseFloat(amount);

            updateSpanText('withdrawAmount','currentWithdraw')
            updateSpanText('currentBalance',-1* amountNumber)


            document.getElementById('withdrawAmount').value = ''
            
        })
                // deposit button event handler

                let depositBtn = document.getElementById('addDeposit');

                depositBtn.addEventListener('click', function(){
                    updateSpanText('depositAmount','currentDeposit')
                    updateSpanText('depositAmount','currentBalance')

                    

                document.getElementById('depositAmount').value = ''

                })
            
                // update Spain Text Function
                function updateSpanText(id,current){
                    const amount = document.getElementById(id).value;
                    const number = parseFloat(amount);
                    const currentAdd = document.getElementById(current).innerText;
                    const currentNumber = parseFloat(currentAdd);
                    const total = number + currentNumber;
                    document.getElementById(current).innerText = total;
                }