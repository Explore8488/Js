function next(){
    if (document.getElementById("myImg").alt == 1)
    {
        document.getElementById("myImg").src = "images/img2.jpg";
        document.getElementById("myImg").alt = 2
    }
    else if (document.getElementById("myImg").alt == 2)
    {
        document.getElementById("myImg").src = "images/img3.jpg";
        document.getElementById("myImg").alt = 3
    }
    else if (document.getElementById("myImg").alt == 3)
    {
        document.getElementById("myImg").src = "images/img4.jpg";
        document.getElementById("myImg").alt = 4
    }
    else if (document.getElementById("myImg").alt == 4)
    {
        document.getElementById("myImg").src = "images/img5.jpg";
        document.getElementById("myImg").alt = 5
    }
    else if (document.getElementById("myImg").alt == 5)
    {
        document.getElementById("myImg").src = "images/img6.jpg";
        document.getElementById("myImg").alt = 6
    }
    else if (document.getElementById("myImg").alt == 6)
    {
        document.getElementById("myImg").src = "images/img1.jpg";
        document.getElementById("myImg").alt = 1
    }
    }
    

function prev(){
    if (document.getElementById("myImg").alt == 6)
    {
        document.getElementById("myImg").src = "images/img5.jpg";
        document.getElementById("myImg").alt = 5
    }
    else if (document.getElementById("myImg").alt == 5)
    {
        document.getElementById("myImg").src = "images/img4.jpg";
        document.getElementById("myImg").alt = 4
    }
    else if (document.getElementById("myImg").alt == 4)
    {
        document.getElementById("myImg").src = "images/img3.jpg";
        document.getElementById("myImg").alt = 3
    }
    else if (document.getElementById("myImg").alt == 3)
    {
        document.getElementById("myImg").src = "images/img2.jpg";
        document.getElementById("myImg").alt = 2
    }
    else if (document.getElementById("myImg").alt == 2)
    {
        document.getElementById("myImg").src = "images/img1.jpg";
        document.getElementById("myImg").alt = 1
    }
    else if (document.getElementById("myImg").alt == 1)
    {
        document.getElementById("myImg").src = "images/img6.jpg";
        document.getElementById("myImg").alt = 6
    }
    }


function bigImg()
{
    // document.getElementById("myImg").classList.remove('over')
    const boxes = document.querySelectorAll('.over');

    boxes.forEach(box => {
    box.style.visibility = 'visible';
    });
}

function bigImg2()
{
    // document.getElementById("myImg").classList.remove('over')
    const boxes = document.querySelectorAll('.over');

    boxes.forEach(box => {
    box.style.visibility = 'hidden';
    });
}