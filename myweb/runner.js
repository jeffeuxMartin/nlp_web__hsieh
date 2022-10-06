function hello_here() {
    let elements = document.getElementsByTagName("h1");
    let element = elements[0];
    // alert("Hi");
    if (element.style['color'] === 'pink') {
        element.style['color'] = 'yellow';
    }
    else {
        element.style['color'] = 'pink';
    }

}
