window.alert = function(msg){
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');
    const alertmsg = document.createElement('p');
    alertmsg.innerText = 'Azmat khan Say:';
    alertButton.innerText = 'OK'
    alert.classList.add('alert');

    alert.setAttribute('style',`
       position:fixed;
       width: 290px;
       height: 40px;
       top: 10px;
       left: 50%;
       padding: 20px;
       padding-top: 15px;
       padding-bottom: 20px;
       border-radius: 8px;
       background-color: white;
       color: black;
       box-shadow: 0 10px 5px 0 #00000022;
       display: flex;
       flex-direction: column;
       border: 1.5px solid cornflowerblue;
       transform: translateX(-50%);
       font-size: 12px;
    `);
    alertButton.setAttribute('style',`
       border: 1.1px solid #333;
       background: white;          
       border-radius: 5px ;
       padding: 4px 12px;
       font-size: 10px;
       width: 40px;
       position: fixed;
       left: 85%;
       top: 46px;
       cursor: pointer; 
       background-color: cornflowerblue;
       font-family: 'Poppins'. sans-sarif;

    `)
    alertmsg.setAttribute('style',`
       font-size: 8px;
       margin-top: 5px;
       padding-bottom: 4px;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    `)
    
    alert.innerHTML = `<span style="font-family: 'Poppins', sans-serif; margin-top: -8px;" >${msg}</span>`;
    alert.appendChild(alertButton);
    alert.prepend(alertmsg);
    alertButton.addEventListener('click', (e)=>{
        alert.remove();
    });
    document.body.appendChild(alert)
}