let count = 0
const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) { 
            count -= 1
        } else if (styles.contains('reset')) { 
            count = 0
        } else if (styles.contains('increase')) { 
            count += 1
        }
        if (count < 0) {
            value.style.color = "red";
        } else if (count > 0) {
            value.style.color = "green";
        } else if (count === 0) {
            value.style.color = "#000";
        }
        value.textContent = count
    })
})