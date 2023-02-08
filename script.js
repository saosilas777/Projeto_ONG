let count = 1;

document.getElementById("radio" + count).checked = true;

setInterval(function () {
    changeImg();
}, 3000)

function changeImg() {


    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
    count++;


} 
var left = document.getElementById('left');
left.addEventListener('click', backwardsImg);

   
    function backwardsImg() {
        //debugger
        if(count>1){
            count -= 1;
            document.getElementById("radio" + count).checked = true;
        }
        else{
            count=5;
        }
       
    }
    
    var left = document.getElementById('right');
    left.addEventListener('click', forwardsImg);
    function forwardsImg() {
        //debugger
        if(count<4){
            count+=1;
            document.getElementById("radio" + count).checked = true;
        }
        else{
            count=0;
        }
    }



function openNav() {
    document.getElementById("menu-nav").style.display = 'block';
    document.getElementById("btn-close").style.display = 'block';
    document.getElementById("btn-open").style.display = 'none';
    document.getElementById("menu-nav").style.marginLeft = '0%';
}
function closeNav() {
    document.getElementById("menu-nav").style.display = 'none';
    document.getElementById("btn-open").style.display = 'block';
    document.getElementById("btn-close").style.display = 'none';
    document.getElementById("menu-nav").style.marginLeft = '100%';
}

function openSubMenu() {

    let sub = document.getElementById("openSubMenu").style.display;
    if (sub == 'none') {

        document.getElementById("openSubMenu").style.display = 'block';

    }
    
    


}