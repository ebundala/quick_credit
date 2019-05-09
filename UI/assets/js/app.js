
function redirectTo(path,state) {
    window.history.replaceState(state, path.replace("/",""), "#"+path);
    page(path,state);
}
function navigateTo(path,state) {
     //window.location.hash="#"+path
    window.history.pushState(state, path.replace("/",""), "#"+path);
    page(path,state);
}


/**
 * @desc navigate to new page
 * @param {String} path - a path to navigate to
 * @param {object} state - an object passed to history state
 */
function  page(path,state) {

    var pages=$(".page",true);

    if(pages&&pages.length){

        var index=isPageExist(pages,path);

        if(-1<index){
            //hide all pages except at index;
            showPageAtIndex(pages,index);
            //TODO call route handler here


        }else{

            //handle page not found here
            showPageAtIndex(pages,0)
        }
    }

}
/**
 * @desc shows a single page at a specified index and hide all others
 * @param {Array} pages - Nodelist of pages
 * @param {Number} index - index for the page to be shown
 */
function  showPageAtIndex(pages,index) {
    pages.forEach(function (item,i) {
        if(i!=index&&isNodeVisible(item)){
            showNode(item,false);
        }

    })
    showNode(pages[index],true)

}
/**
 * @desc a utility function to check if a page is found or not
 * @param {Array} pages - array of pages in what to check
 * @param {String} path - a path to the page we want to check
 * @returns {Number} returns an index of page if found or -1 otherwise
 */
function  isPageExist(pages,path) {
    var pageFoundIndex=-1;

    pages.forEach(function (item,i) {
        //check if the page exist
        if(item.dataset.path===path){
            pageFoundIndex=i;
        }
    });
return pageFoundIndex;
}

/**
 * @desc a utility function to check if a node is visible on page
 * @param {String} node - an Html element to test against
 * @returns {boolean}
 */
function isNodeVisible(node){
    if(node){
       return node.className.match("hidden")== null
    }
    return false;
}

/**
 * @desc show a given node or hide
 * @param {HTMLElement} node - a node to show or hide depending on the hide parameter
 * @param {boolean}  show - a boolean to force an item to be hidden
 */
function showNode(node,show) {
    var classes = node.className;
    if(show){
        classes= classes.replace(/hidden/g,"");
    }
    else{
        if(!classes.match("hidden"))
        classes= classes+" hidden ";
    }
    node.className=classes;

}

/**
 * @desc utility function to show or hide a node
 * @param {HTMLElement} node - an html node to toggle
 * @returns {null}
 */
function toggleNode(node){
    if(node) {
        var state = !isNodeVisible(node);
        showNode(node,state)
    }

}

/**
 * @desc a utility function to toggle sidebar
 */
function  toggleSideBar() {
    var node = $(".side_bar");
    toggleNode(node);
}

/**
@desc app entry point
@param {event} e - DOMContentLoaded event
*/
function main(e) {
    console.log("hello world");
    setTimeout(function () {

        redirectTo("/home",{init:true});
    },0)

}


/**
@description utility function to query the dom
@param {String} selector - a css selector to query
 @param {boolean } all - a flag to wether query one node or all nodes
@returns {HTMLElement } return - a dom element
*/


function $(selector,all) {
    return all?document.querySelectorAll(selector):document.querySelector(selector)
}
/**
 * @desc listens for dom loading complete
 */



window.onpopstate =function(event){
    event.preventDefault();
    setTimeout(function () {

        console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));

var link=document.location.toString().split("#")[1];
console.log(link);
    page(link,event.state);
    },0)
};

document.addEventListener("DOMContentLoaded", main)