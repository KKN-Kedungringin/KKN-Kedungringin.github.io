function onLinkClick(id) {
    var my_element = document.getElementById("alter" + id);

    if (my_element) {
        my_element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
