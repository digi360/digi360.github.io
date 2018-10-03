$(document).ready(function ()
{
    $("#search-engine").click(function (e) {
        e.preventDefault();
        let mainSec = $("main");
        let theFrame = '<iframe src="https://github.com/digi360/FindItSearchEngine/blob/master/findit.html">Your browser does not support iframes. Please upgrade and refresh to see this page. Alternatively, you can press the back button.</iframe>'
        $("#main").html(theFrame);
    });
    $("#crime-stats").click(function(e)
    {
        e.preventDefault();
        let mainSec = $("main");
        let theFrame = '<iframe src="portfolio/Crime_Stats_Group_Work.html">Your browser does not support iframes. Please upgrade and refresh to see this page. Alternatively, you can press the back button.</iframe>'
        $("#main").html(theFrame);
    });
    $("#salary1").click(function(e)
    {
        e.preventDefault();
        let mainSec = $("main");
        let theFrame = '<iframe src="portfolio/Salary_Assignment1_Correlation.html">Your browser does not support iframes. Please upgrade and refresh to see this page. Alternatively, you can press the back button.</iframe>'
        $("#main").html(theFrame);
    });
    $("#salary2").click(function(e)
    {
        e.preventDefault();
        let mainSec = $("main");
        let theFrame = '<iframe src="portfolio/Salary_Assignment2_Regression.html">Your browser does not support iframes. Please upgrade and refresh to see this page. Alternatively, you can press the back button.</iframe>'
        $("#main").html(theFrame);
    });
});