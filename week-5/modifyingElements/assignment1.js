function readText(form){
    TestVar=form.inputbox.value+form.inputbox2.value+form.inputbox3.value;
    alert("You typed: " + TestVar);
}

function automaticResponse(form){
    form.inputbox.value="Thank you for your input";
}