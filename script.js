var name, formfactor;
var form = _("buyIt");

function _(x) {
    return document.getElementById(x);
}

function processPhase1() {
    name = _("name").value;
    // console.log(name);
    if (name.length > 2) {
        _("hello").style.display = 'none';
        _("formfactor").style.display = 'block';

    } else {
        alert("Please enter your name");
    }

}

function formfactorIndex() {

    var radios = buyIt.formfactor;
    for (var index = 0; index < radios.length; index++) {
        if (radios[index].checked) {
            return index;
        }
    }
    return "";
}

function processPhase2() {
    var radIndex = formfactorIndex();
    _("formfactor").style.display = 'none';
    formfactor = buyIt.formfactor[radIndex].value;
    console.log(formfactor);
    if (radIndex == 0) {
        _("pc").style.display = 'block';
    } else {
        _("laptop").style.display = 'block';
    }

}
function processPhase3() {
}
	var select =buyIt.laptop;
	for (var index = 0; index < select.options.length; index++) {
console.log(select.options[index].text);
	}
		

