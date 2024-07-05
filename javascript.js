const container = document.querySelector('.container');

const defaultSize = 16;

function createGrid(size) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for (let i = 1; i <= size; i++){
    const gridRows = document.createElement('div');
    gridRows.classList.add('grid-row');

        for (let j = 1; j <= size; j++){
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            
            const widthheight = 960/size
            gridItem.style.width = `${widthheight}px`;
            gridItem.style.height = `${widthheight}px`;

            const color =  randomRGB();
            gridItem.addEventListener(
                "mouseenter", () => {
                    gridItem.style.backgroundColor = color;
                    const currentOpacity = gridItem.style.opacity;
                    gridItem.style.opacity = Number(currentOpacity) +.1;
                }
            );

            gridRows.appendChild(gridItem);
        wrapper.appendChild(gridRows);
        }
        container.appendChild(wrapper);
    }
};
createGrid(defaultSize);

const reset = document.querySelector('.reset');
reset.addEventListener('click',() => {
    let userSize = Number(prompt('Enter a size: '));
    while (userSize > 100) {
        userSize =  Number(prompt('Enter a size: '));
    }
    const wrapper = document.querySelector('.wrapper');
    wrapper.remove();
    createGrid(userSize);
});

function randomRGB() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
  }
  
  