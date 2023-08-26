const inputs = document.querySelectorAll(".input");
const inputsArray = Array.from(inputs);
// индекст активного сейчас инпута
let actualIndex = inputsArray.findIndex(
    (item) => item.checked === true
);
actualIndex = actualIndex + 1;

// ищем номер инпута, по которому мы кликнули
const calcNextCheckedInputIndex = (event) => {
    const id = event.target.id;
    const indexInString = id.replace("tab-","")
    const NextCheckedInputIndex = Number(indexInString);
    return NextCheckedInputIndex;
}


const changeTabs = (event) => {
    
    //  внутри event.target лежит nextCheckedInput, 
    //  а в actualCheckedInput лежит actualCheckedInput 
    const newIndex = calcNextCheckedInputIndex(event);

    document.querySelector(`.content-${actualIndex}`).classList.toggle("fade-in");
    document.querySelector(`.content-${actualIndex}`).classList.toggle("fade-out");

    setTimeout(
        function () {
            document.querySelector(`.content-${newIndex}`).classList.remove("fade-out");
            document.querySelector(`.content-${newIndex}`).classList.toggle("fade-in");

            actualIndex = newIndex;
        },
        2000
    )  
}

inputs.forEach(
    (item) => {item.addEventListener("click", changeTabs);}
)
