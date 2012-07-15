function DoSearch(id) {

    var para = document.getElementById(id).value;
    if (typeof jsHandler != 'undefined') {
        jsHandler.success.connect(ShowResult);
        jsHandler.request(para);
    }
    else {
        ShowResult("ERROR: No JS Handler.");
    }
}

function onEventStub(para) {
    // alert(para);
    ShowResult(para);
    return "OK";
}

function ShowResult(para) {
    document.getElementById("ExeResult").innerHTML = para;
}
