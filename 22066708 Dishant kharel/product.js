function change_bg(element_id) {

    var btn_all = document.getElementById('1');
    var btn_off = document.getElementById('2');
    var btn_bsell = document.getElementById('3');
    var btn_reg = document.getElementById('4');

    switch (element_id) {
        case 1:
            btn_all.style.backgroundColor = "red";
            btn_off.style.backgroundColor = "#70cf84";
            btn_bsell.style.backgroundColor = "#70cf84";
            btn_reg.style.backgroundColor = "#70cf84";
            
            break;

        case 2:
            btn_all.style.backgroundColor = "#70cf84";
            btn_off.style.backgroundColor = "red";
            btn_bsell.style.backgroundColor = "#70cf84";
            btn_reg.style.backgroundColor = "#70cf84";

            break;

        case 3:
            btn_all.style.backgroundColor = "#70cf84";
            btn_off.style.backgroundColor = "#70cf84";
            btn_bsell.style.backgroundColor = "red";
            btn_reg.style.backgroundColor = "#70cf84";


            break;

        case 4:
            btn_all.style.backgroundColor = "#70cf84";
            btn_off.style.backgroundColor = "#70cf84";
            btn_bsell.style.backgroundColor = "#70cf84";
            btn_reg.style.backgroundColor = "red";

            break;

    }
}



function complete_set() {
    var p11 = document.getElementById('off');
    var p12 = document.getElementById('best');
    var p13 = document.getElementById('best_1');
    var p14 = document.getElementById('reg');
    var p15 = document.getElementById('reg_1');
    var p16 = document.getElementById('reg_2');

    p11.style.display = "flex";
    p12.style.display = "flex";
    p13.style.display = "flex";
    p14.style.display = "flex";
    p15.style.display = "flex";
    p16.style.display = "flex";

    change_bg(1);
}

function offer() {
    var p1 = document.getElementById('off');
    var p2 = document.getElementById('best');
    var p3 = document.getElementById('best_1');
    var p4 = document.getElementById('reg');
    var p5 = document.getElementById('reg_1');
    var p6 = document.getElementById('reg_2');

    p1.style.display = "flex";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
    p6.style.display = "none";
    change_bg(2);

}

function bsell() {
    var p21 = document.getElementById('off');
    var p22 = document.getElementById('best');
    var p23 = document.getElementById('best_1');
    var p24 = document.getElementById('reg');
    var p25 = document.getElementById('reg_1');
    var p26 = document.getElementById('reg_2');

    p21.style.display = "none";
    p22.style.display = "flex";
    p23.style.display = "flex";
    p24.style.display = "none";
    p25.style.display = "none";
    p26.style.display = "none";
    change_bg(3);

}

function regular() {
    var p31 = document.getElementById('off');
    var p32 = document.getElementById('best');
    var p33 = document.getElementById('best_1');
    var p34 = document.getElementById('reg');
    var p35 = document.getElementById('reg_1');
    var p36 = document.getElementById('reg_2');

    p31.style.display = "none";
    p32.style.display = "none";
    p33.style.display = "none";
    p34.style.display = "flex";
    p35.style.display = "flex";
    p36.style.display = "flex";
    change_bg(4);

}
function popup(){
    alert("Thanks for buying")
}
