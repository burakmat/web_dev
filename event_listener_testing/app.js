const btn = document.querySelector("#btn");
const header = document.querySelector("h1");

function create_random_rgb(rgb) {
    for (let i = 0;i < 3;++i)
        rgb[i] = Math.floor(Math.random() * 256);
}

const rgb = [0, 0, 0];
btn.addEventListener('click', () => {
    create_random_rgb(rgb);
    header.innerText = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    document.querySelector("body").style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
});