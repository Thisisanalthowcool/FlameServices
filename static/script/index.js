


document.querySelector('#access-form').addEventListener('submit', event => {
    event.preventDefault();

    
    const frame = document.querySelector('#access-frame');

    frame.src = '/load.html#' + btoa(event.target[0].value);

    frame.style.display = 'block';
    frame.style.border = "0";
frame.style.width = "100%";
frame.style.height = "100%";
frame.style.position = "absolute";
frame.style.top = "0";
frame.style.left = "0";
frame.style.width = "100%";
frame.style.height = "100%";
frame.style.zIndex = "9999";
});

