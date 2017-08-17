interface LabelledValue{
    label: string;
}

function printLabel(labelObj: LabelledValue){
    console.info(labelObj.label);
}

let myObj = {size: 10, label: "Size 10 object"};
printLabel(myObj);