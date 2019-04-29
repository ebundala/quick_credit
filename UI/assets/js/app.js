/* 
*@description app entry point
*@param e DOMContentLoaded event 
*/
function main(e) {
    console.log("hello world");
}
/*
*@description utility function to query the dom
*@param selector a css selector to query
*@return a dom node or null
*/
function $(selector) {
    return document.querySelector(selector)
}

document.addEventListener("DOMContentLoaded", main)