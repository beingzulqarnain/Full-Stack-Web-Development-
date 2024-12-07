

const ticToe = document.querySelector('.tictoe');
// let currentPlayer = "X";

ticToe.addEventListener('click',(e) => {
        // console.log(e.target);
        if(e.target.innerText === ''){
            e.target.innerText = currentPlayer;
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
        
        
        // if(currentPlayer === 'X'){
        //     currentPlayer = 'O';
        // }else {
        //     currentPlayer ='X';
        // }
           
})