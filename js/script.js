
const loginBtn = document.getElementById('btn-login');

loginBtn.addEventListener( 'click', (event) => {
    
    const loginArea = document.getElementById('login-area');
    const transectionArea = document.getElementById('transection-area');
    
    loginArea.style.display = 'none';
    transectionArea.style.display = 'block';

} )