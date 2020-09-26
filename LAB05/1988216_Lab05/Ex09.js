function checkAll(checked) {
    var checkboxs = document.getElementsByTagName("input");

    for(i = 0; i < checkboxs.length; i++) {
        checkboxs[i].checked = checked;
    }
}