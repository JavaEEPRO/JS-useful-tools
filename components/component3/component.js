


var component3 = {
    options : {
        droppedIn : false
    },

    _ : function(id){
    return document.getElementById(id);
    },

    drag_start : function(event) {
    _('app_status').innerHTML = "Dragging the "+event.target.getAttribute('id');
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.getAttribute('id') );
    },

    drag_enter : function(event) {
    _('app_status').innerHTML = "You are dragging over the "+event.target.getAttribute('id');
    },

    drag_leave : function(event) {
    _('app_status').innerHTML = "You left the "+event.target.getAttribute('id');
    },

    drag_drop : function(event) {
    event.preventDefault(); /* Prevent undesirable default behavior while dropping */
    var elem_id = event.dataTransfer.getData("text");
    event.target.appendChild( _(elem_id) );
    _('app_status').innerHTML = "Dropped "+elem_id+" into the "+event.target.getAttribute('id');
    _(elem_id).removeAttribute("draggable");
    _(elem_id).style.cursor = "default";
    droppedIn = true;
    },

    drag_end : function(event) {
    if(component3.options.droppedIn === false){
        _('app_status').innerHTML = "You let the "+event.target.getAttribute('id')+" go.";
    }
    component3.options.droppedIn = false;
    },

    readDropZone : function(){
    for(var i=0; i < _("drop_zone").children.length; i++){
        alert(_("drop_zone").children[i].id+" is in the drop zone");
    }
    /* Run Ajax request to pass any data to your server */
}
};


$(document).ready(function() {
    component3.init();
    component3.drag_start();
    component3.drag_enter();
    component3.drag_leave();
    component3.drag_drop();
    component3.drag_end();
    component3.readDropZone();
});
