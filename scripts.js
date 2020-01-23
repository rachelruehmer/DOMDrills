document.addEventListener("DOMContentLoaded", function () {

    let div = document.createElement('header-container');

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode("This is an h1");

    div.appendChild(h1);
    document.body.appendChild(div);
    h1.appendChild(h1Text);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode("This is an h2");

    div.appendChild(h2);
    h2.appendChild(h2Text);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode("This is an h3");

    div.appendChild(h3);
    h3.appendChild(h3Text);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode("This is an h4");

    div.appendChild(h4);
    h4.appendChild(h4Text);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode("This is an h5");

    div.appendChild(h5);
    h5.appendChild(h5Text);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode("This is an h6");

    div.appendChild(h6);
    h6.appendChild(h6Text);



    let colors = ['#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66',]


    h1.addEventListener("dblclick", function () {

        h1.style.color = colors[Math.floor(Math.random() * colors.length)];

    })
    function clickclack() {

        let unorderedList = document.createElement('ul');
        let list = document.createElement('li');
        let text = document.createTextNode("This is a list item " + licount)

        list.appendChild(text)
        unorderedList.appendChild(list)
        document.body.appendChild(unorderedList)

list.addEventListener('dblclick',function() {
    removeListItem(list)
    
})

        licount++

        let colors = ['#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66',]

    list.addEventListener("dblclick", function () {

        list.style.color = colors[Math.floor(Math.random() * colors.length)];

    })
}
    let button = document.getElementsByClassName('button')

    button[0].addEventListener("click", function () {
        
        clickclack();


    })
licount = 1


})
function removeListItem(list) {
    list.parentNode.removeChild(list)
}