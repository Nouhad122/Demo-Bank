let menuList = document.getElementById('menu-list');
let searchInput = document.querySelector('.search-input');
let homeContainers = document.querySelectorAll('.home-container');

function redirectToHomepage(){
    window.location.href = "homePage.html";
    return false;
}

function openMenuList(){
    menuList.classList.add('opened-list');
}
function closeMenuList(){
    menuList.classList.remove('opened-list');
}
function toggleDropDown(){
    homeContainers.forEach(cont =>{
        let userContainer = cont.querySelector('.user-section');
        let dropDownBtn = cont.querySelector('.fa-caret-down');
        userContainer.addEventListener('click', ()=>{
            cont.classList.toggle('bigger-home-container');
            dropDownBtn.classList.toggle('rotation');
        });
    });
}
toggleDropDown();
