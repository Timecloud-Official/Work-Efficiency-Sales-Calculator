function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab_content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    // console.log(tabName);
    document.getElementById(tabName).style.display = "block";
    
    evt.currentTarget.className += " active";

    hideResultsIfEmpty(tabName);
    // if (tabName == 'GrossAP_content') {
    //     hideResultsEmployee();
    // } else if (tabName =='per_employee_content') {
    //     showResultsEmployee();
    // }
}