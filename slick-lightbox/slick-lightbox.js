/**
Author: Lidlanca 2014
SetMetaViewport
Update viewport meta tag, to dynamically change scale properties such as 
maximum-scale or minimum-scale or user-scalable
 
Parameters
max_min String "max" | "min"
rate String "1.0"  
userSacleble String "yes" | "no"
 
Example setMetaViewport("max","5.0","yes");
 
**/
function setMetaViewport(max_min,rate,userScaleble){
  if ( !(meta_viewport = $("meta[name='viewport']")) ){ return false; }
  meta_viewport_content = meta_viewport.attr("content");
  if (max_min == "max" || max_min == "min"){
    mm_str = (max_min=="max"? "maximum" : "minimum");
    re = new RegExp( mm_str + "-scale=\\d+.\\d+")
    new_val =  meta_viewport_content.replace(re, mm_str + "-scale=" + rate.toString()); //replace value of min or max
  }
  if (userScaleble && (m = userScaleble.match(/^yes|no$/) ) ){ 
    new_val = new_val.replace(/user-scalable=(no|yes)/,"user-scalable=" + m[0]);
  }
  return $("meta[name='viewport']").attr("content",new_val);
}
 
 
 
//original file 
///app/assets/javascripts/discourse/lib/lightbox.js
Discourse.Lightbox = {
  apply: function($elem) {
    $LAB.script("/javascripts/jquery.magnific-popup-min.js").wait(function() {
      $("a.lightbox", $elem).each(function(i, e) {
        var $e = $(e);
        // do not lightbox spoiled images
        if ($e.parents(".spoiler").length > 0 || $e.parents(".spoiled").length > 0) { return; }
 
        $e.magnificPopup({
          type: "image",
          closeOnContentClick: false,
 
          callbacks: {
            open: function() {
              setMetaViewport("max","4.0","yes"); //allow user to zoom  on open
              var wrap = this.wrap,
                  img = this.currItem.img,
                  maxHeight = img.css("max-height");
 
              wrap.on("click.pinhandler", "img", function() {
                wrap.toggleClass("mfp-force-scrollbars");
                img.css("max-height", wrap.hasClass("mfp-force-scrollbars") ? "none" : maxHeight);
              });
            },
            beforeClose: function() {
              setMetaViewport("max","1.0","no"); //when we close the lightbox we disable zoom and reset to 1.0
              this.wrap.off("click.pinhandler");
              this.wrap.removeClass("mfp-force-scrollbars");
            }
          },
 
          image: {
            titleSrc: function(item) {
              return [
                item.el.attr("title"),
                $("span.informations", item.el).text().replace('x', '&times;'),
                '<a class="image-source-link" href="' + item.src + '" target="_blank">' + I18n.t("lightbox.download") + '</a>'
              ].join(' &middot; ');
            }
          }
 
        });
      });
    });
  }
};