function addToHistory(color){
    const colorHistory = document.getElementById('colorHistory');
    const colorActive = document.getElementById('colorActive');
    const colorName = document.getElementById('colorName');

    const colorItem = document.createElement('div');
    colorItem.style.backgroundColor = color;
    colorItem.classList.add('colorItem');
    colorItem.addEventListener('mouseover', () => {
        colorActive.style.backgroundColor = color;
})
    colorHistory.appendChild(colorItem);
}

function getRandomNumber(){
    return Math.floor(Math.random()*256);
}
function handleClick(){
    const colorActive = document.getElementById("colorActive");
    const colorName = document.getElementById("colorName");

    const r = getRandomNumber();
    const g = getRandomNumber();
    const b = getRandomNumber();
    
    const color = ( `rgb(${r}, ${g}, ${b})`);
    colorActive.style.backgroundColor = color;
    colorName.textContent = color;
    addToHistory(color);  
}

const btn = document.getElementById('colorBtn');
btn.addEventListener('click', handleClick);
