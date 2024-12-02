// Loops
// pre check, post check
// initialization, condition, increment

// let loopCount = prompt('Loop Count');
// pre check
// let count = 1;

// while (count > 2) {
//     console.log('The number is ' + count);
//     count++;
// }

// for (let i = 0; i <= 10; i++) {
//     console.log('the number is ' + i);
// }

// post check
// do {
//     console.log('the number is ' + count);
//     count++
// } while (count > 2);

let dropdownItems = document.querySelectorAll('ul li.dropdown');


for (let index = 0; index < dropdownItems.length; index++) {
    const dropdown = dropdownItems[index];
    dropdown.addEventListener('click', function () {
        for (let j = 0; j < dropdownItems.length; j++) {
            const element = dropdownItems[j];
            element.firstElementChild.style.display = 'none';
        }
        dropdown.firstElementChild.style.display = 'block';
    });
};



// buttons.addEventListener('click', function () {
//     console.log(btn)
// });