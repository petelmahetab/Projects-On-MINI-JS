// select

const body = document.querySelector('body');

const Boxe = document.querySelectorAll('.boxes');

// loop for itrating each element

Boxe.forEach(function (nut) {
    nut.addEventListener('click', function (e) {

        switch (e.target.id) {
            case 'Gray':
                body.style.backgroundColor = "Gray";
                break;
            case 'White':
                body.style.backgroundColor = "White";
                break;
            case 'Blue':
                body.style.backgroundColor = "Blue";
                break;
            case 'Yellow':
                body.style.backgroundColor = "Yellow";
                break;
        }
    });

});