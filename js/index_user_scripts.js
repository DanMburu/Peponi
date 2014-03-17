(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $("#news").click(function(evt)
        {
         activate_subpage("#News"); 
        });
        $(".uib_w_3").click(function(evt)
        {
         activate_subpage("#calenda"); 
        });
        $("#s_news").click(function(evt)
        {
         activate_subpage("#News"); 
        });
        $("#s_calendar").click(function(evt)
        {
         activate_subpage("#calenda"); 
        });
        $("#s_home").click(function(evt)
        {
         activate_subpage("#mainsub"); 
        });
        $("#s_news").click(function(evt)
        {
         activate_subpage("#News"); 
        });
}
 $(document).ready(register_event_handlers);
})();
