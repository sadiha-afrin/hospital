function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '-250px') {
        sidebar.style.right = '0px';
    } else {
        sidebar.style.right = '-250px';
    }
}



let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.inner-services')
    document.querySelector('.main-services').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.inner-services')
    document.querySelector('.main-services).prepend(items[items.length - 1]) // here the length of items = 4
})
document.getElementById('home').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '0';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '-300px';
});