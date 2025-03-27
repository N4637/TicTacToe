let btns = document.querySelectorAll("button");
let turn=document.getElementById("turn");
let body=document.querySelector("body");
body.style.backgroundColor="black";
const win = (a) => {
    if (a[0].innerText == a[1].innerText && a[0].innerText == a[2].innerText) {
        if (a[0].innerText == "X") return 1;
        else return 0;
    }
    else if (a[3].innerText == a[4].innerText && a[3].innerText == a[5].innerText) {
        if (a[3].innerText == "X") return 1;
        else return 0;
    }
    else if (a[6].innerText == a[7].innerText && a[6].innerText == a[8].innerText) {
        if (a[6].innerText == "X") return 1;
        else return 0;
    }
    else if (a[0].innerText == a[3].innerText && a[0].innerText == a[6].innerText) {
        if (a[0].innerText == "X") return 1;
        else return 0;
    }
    else if (a[1].innerText == a[4].innerText && a[1].innerText == a[7].innerText) {
        if (a[1].innerText == "X") return 1;
        else return 0;
    }
    else if (a[2].innerText == a[5].innerText && a[2].innerText == a[8].innerText) {
        if (a[2].innerText == "X") return 1;
        else return 0;
    }
    else if (a[0].innerText == a[4].innerText && a[0].innerText == a[8].innerText) {
        if (a[0].innerText == "X") return 1;
        else return 0;
    }
    else if (a[2].innerText == a[4].innerText && a[2].innerText == a[6].innerText) {
        if (a[2].innerText == "X") return 1;
        else return 0;
    }
    return 2;
}
const tchange=(bari)=>{
    if(bari.innerText=="Computer's Turn"){
        bari.innerText="Your Turn";return;
    }
    else{ bari.innerText="Computer's Turn";return;}
}
const computer = (a) => {
    let arr = [];
    let i = 0;
    for (let x of a) {
        if (x.innerText != "X"&&x.innerText!="O") {
            arr.push(i);
        }
        i++;
    }
    let l = arr.length;
    let random = Math.floor(Math.random() * l);
    a[arr[random]].innerText = "O";
    a[arr[random]].style.backgroundColor="red";
    a[arr[random]].style.color="white";
}
let i = 0;
setTimeout(() => {
    computer(btns);
}, 1111);
i++;
setTimeout(() => {
    tchange(turn);
}, 1111);
for (let x of btns) {
    x.addEventListener("click", () => {
        x.innerText = "X";
        x.style.backgroundColor = "blue";
        x.style.color = "white";
        i++;
        setTimeout(() => {
            tchange(turn);
        }, 1100);
        if (win(btns) == 0) {
            alert("you lost");
            return;
        }
        else if (win(btns) == 1) {
            alert("you won");
            return;
        }
        else if (win(btns) == 2 && i == 9) {
            alert("game drawn");
            return;
        }
        if(i!=9){
            setTimeout(() => {
                computer(btns);
            }, 1111);
            i++;
            setTimeout(() => {
                tchange(turn);
            }, 0);
            
        }
        if (win(btns) == 0) {
            alert("you lost");
            return;
        }
        else if (win(btns) == 1) {
            alert("you won");
            return;
        }
        else if (win(btns) == 2 && i == 9) {
            alert("game drawn");
            return;
        }
    });
}

