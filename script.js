const allBtns = document.querySelectorAll('.tab-btns button');
const allTabs = document.querySelectorAll('.tab-content div');

allBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        removeAllActiveBtns();
        btn.classList.add('active-btn');
        removeAllActiveTabs();
        showTabContent(index);
    }); 
});

function showTabContent(idx){
    allTabs.forEach((tab) => {
        if(tab.dataset.id == idx){
            tab.classList.add('active-tab');
        }
    });
}
function removeAllActiveBtns(){
    allBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function removeAllActiveTabs(){
    allTabs.forEach((tab) => {
        tab.classList.remove('active-tab');
    });
}