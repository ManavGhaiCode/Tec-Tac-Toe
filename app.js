const blocks = document.querySelectorAll('.block');
const h1 = document.querySelector('.winner');

let CPS = 'x';
let UBlocks = [
    null, null, null, null, null, null, null, null, null
];

blocks.forEach((block, index) => {
    block.addEventListener('click', () => {
        UBlocks[index] = CPS;

        if (
            UBlocks[0] === 'x' && UBlocks[4] === 'x' && UBlocks[8] === 'x' ||
            UBlocks[2] === 'x' && UBlocks[4] === 'x' && UBlocks[6] === 'x' ||
            UBlocks[0] === 'x' && UBlocks[1] === 'x' && UBlocks[2] === 'x' ||
            UBlocks[3] === 'x' && UBlocks[4] === 'x' && UBlocks[5] === 'x' ||
            UBlocks[6] === 'x' && UBlocks[7] === 'x' && UBlocks[8] === 'x' ||
            UBlocks[0] === 'x' && UBlocks[3] === 'x' && UBlocks[6] === 'x' ||
            UBlocks[1] === 'x' && UBlocks[4] === 'x' && UBlocks[7] === 'x' ||
            UBlocks[2] === 'x' && UBlocks[5] === 'x' && UBlocks[8] === 'x'
        ) {
            h1.innerText = 'P1 wins';
            console.log(block);

            blocks.forEach(b => {
                b.style.pointerEvents = 'none';
            })
        } else if (
            UBlocks[0] === 'o' && UBlocks[4] === 'o' && UBlocks[8] === 'o' ||
            UBlocks[2] === 'o' && UBlocks[4] === 'o' && UBlocks[6] === 'o' ||
            UBlocks[0] === 'o' && UBlocks[1] === 'o' && UBlocks[2] === 'o' ||
            UBlocks[3] === 'o' && UBlocks[4] === 'o' && UBlocks[5] === 'o' ||
            UBlocks[6] === 'o' && UBlocks[7] === 'o' && UBlocks[8] === 'o' ||
            UBlocks[0] === 'o' && UBlocks[3] === 'o' && UBlocks[6] === 'o' ||
            UBlocks[1] === 'o' && UBlocks[4] === 'o' && UBlocks[7] === 'o' ||
            UBlocks[2] === 'o' && UBlocks[5] === 'o' && UBlocks[8] === 'o'
        ) {
            h1.innerText = 'P2 wins';

            blocks.forEach(b => {
                b.style.pointerEvents = 'none';
            })
        }

        block.innerHTML = `<img src="./assets/${CPS}.svg" alt="player 1 shape." />`;

        if (CPS === 'x') {
            CPS = 'o'
        } else if (CPS === 'o') {
            CPS = 'x'
        }

        console.log(UBlocks);
    })
})