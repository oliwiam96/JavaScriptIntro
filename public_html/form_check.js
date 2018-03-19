var isEmpty = function (field) {
    return field.length === 0; //zwraca true dla pustego ciagu znakow
};

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) == -1) {
            return false;
        }
    }
    return true;
}
;

var checkString = function (stringToCheck, msgToShow) {
    var isFieldEmpty = isEmpty(stringToCheck) || isWhiteSpace(stringToCheck);
    if (isFieldEmpty) {
        alert(msgToShow);
    }
    return !isFieldEmpty;
};

function checkEmail(str) {
    if (isWhiteSpace(str)) {
        alert("Podaj właściwy e-mail");
        return false;
    } else {
        var at = str.indexOf("@");
        if (at < 1) {
            alert("Nieprawidłowy e-mail");
            return false;
        } else {
            var l = -1;
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                if (c == ".") {
                    l = i;
                }
            }
            if ((l < (at + 2)) || (l == str.length - 1)) {
                alert("Nieprawidłowy e-mail");
                return false;
            }
        }
        return true;
    }
}

function checkEmailAndFocus(obj) {
    var str = obj.value;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpace(str)) {
        document.getElementById(errorFieldName).innerHTML = "Podaj właściwy e-mail";
        obj.focus();
        return false;
    } else {
        var at = str.indexOf("@");
        if (at < 1) {
            document.getElementById(errorFieldName).innerHTML = "Nieprawidłowy e-mail";
            obj.focus();
            return false;
        } else {
            var l = -1;
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                if (c == ".") {
                    l = i;
                }
            }
            if ((l < (at + 2)) || (l == str.length - 1)) {
                document.getElementById(errorFieldName).innerHTML = "Nieprawidłowy e-mail";
                obj.focus();
                return false;
            }
        }
        return true;
    }
}

function checkStringAndFocus(obj, msg) {
    var str = obj.value;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpace(str) || isEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    } else {
        return true;
    }
}

var validate = function (form) {
    var isValid = checkStringAndFocus(form.elements["f_imie"], "Podaj imię!")
            && checkStringAndFocus(form.elements["f_nazwisko"], "Podaj nazwisko!")
            && checkStringAndFocus(form.elements["f_kod"], "Podaj kod!")
            && checkStringAndFocus(form.elements["f_ulica"], "Podaj ulicę!")
            && checkStringAndFocus(form.elements["f_miasto"], "Podaj miasto!")
            && checkEmailAndFocus(form.elements["f_email"]);
    return isValid;
};