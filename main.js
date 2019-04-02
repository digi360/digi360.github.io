$(document).ready(function ()
{
    $("#search-engine").click(function (e) {
        e.preventDefault();
        showInFrame("https://digi360.github.io/FindItSearchEngine/");
    });
    $("#crime-stats").click(function(e)
    {
        e.preventDefault();
        showInFrame("portfolio/Crime_Stats_Group_Work.html")
    });
    $("#salary1").click(function(e)
    {
        e.preventDefault();
        showInFrame("portfolio/Salary_Assignment1_Correlation.html")
    });
    $("#salary2").click(function(e)
    {
        e.preventDefault();
        showInFrame("portfolio/Salary_Assignment2_Regression.html")
    });

    function showInFrame(link)
    {
        let mainSec = $("main");
        let theFrame = '<iframe src="' + link + '">Your browser does not support iframes. Please upgrade and refresh to see this page. Alternatively, you can press the back button.</iframe>'
        $("#main").html(theFrame);
    }
});