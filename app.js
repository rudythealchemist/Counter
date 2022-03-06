// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// querySelectorAll is array like,for each method is optimal for this use case.
btns.forEach(function (btn) {// for each btn add event listener
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList; //targets current claslist using even object(e)
        // conditions for buttons to function
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        // change colors based on number values.
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        } if (count > 0) {
            value.style.color = 'blue';
        }
        value.textContent = count;
    });
});

