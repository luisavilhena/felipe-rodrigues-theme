
"use strict";!function(t){var i,n;i=function(){function i(i,n){var o;this.options=n,this.$element=t(i),this.didInit=!1,o=this,this.$element.on("click.slickLightbox",this.options.itemSelector,function(i){var n,e;if(i.preventDefault(),n=t(this),n.blur(),"function"!=typeof o.options.shouldOpen||o.options.shouldOpen(o,n,i))return e=o.filterOutSlickClones(o.$element.find(o.options.itemSelector)),o.init(e.index(n))})}return i.prototype.init=function(t){return this.didInit=!0,this.detectIE(),this.createModal(),this.bindEvents(),this.initSlick(t),this.open()},i.prototype.createModalItems=function(){var i,n,o,e,s,l;return e=this.options.lazyPlaceholder||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",o=function(t,i,n){return'<div class="slick-lightbox-slick-item">\n  <div class="slick-lightbox-slick-item-inner">\n    <img class="slick-lightbox-slick-img" '+(!0===n?' data-lazy="'+t+'" src="'+e+'" ':' src="'+t+'" ')+" />\n    "+i+"\n  </div>\n</div>"},this.options.images?l=t.map(this.options.images,function(t){return o(t,this.options.lazy)}):(i=this.filterOutSlickClones(this.$element.find(this.options.itemSelector)),s=i.length,n=function(t){return function(i,n){var e,l,r;return l={index:n,length:s},e=t.getElementCaption(i,l),r=t.getElementSrc(i),o(r,e,t.options.lazy)}}(this),l=t.map(i,n)),l},i.prototype.createModal=function(){var i,n;return n=this.createModalItems(),i='<div class="slick-lightbox slick-lightbox-hide-init'+(this.isIE?" slick-lightbox-ie":"")+'" style="background: '+this.options.background+';">\n  <div class="slick-lightbox-inner">\n    <div class="slick-lightbox-slick slick-caption-'+this.options.captionPosition+'">'+n.join("")+"</div>\n  <div>\n<div>",this.$modalElement=t(i),this.$parts={},this.$parts.closeButton=t(this.options.layouts.closeButton),this.$modalElement.find(".slick-lightbox-inner").append(this.$parts.closeButton),t("body").append(this.$modalElement)},i.prototype.initSlick=function(i){var n;return n={initialSlide:i},this.options.lazy&&(n.lazyLoad="ondemand"),null!=this.options.slick?"function"==typeof this.options.slick?this.slick=this.options.slick(this.$modalElement):this.slick=this.$modalElement.find(".slick-lightbox-slick").slick(t.extend({},this.options.slick,n)):this.slick=this.$modalElement.find(".slick-lightbox-slick").slick(n),this.$modalElement.trigger("init.slickLightbox")},i.prototype.open=function(){return this.options.useHistoryApi&&this.writeHistory(),this.$element.trigger("show.slickLightbox"),setTimeout(function(t){return function(){return t.$element.trigger("shown.slickLightbox")}}(this),this.getTransitionDuration()),this.$modalElement.removeClass("slick-lightbox-hide-init")},i.prototype.close=function(){return this.$element.trigger("hide.slickLightbox"),setTimeout(function(t){return function(){return t.$element.trigger("hidden.slickLightbox")}}(this),this.getTransitionDuration()),this.$modalElement.addClass("slick-lightbox-hide"),this.destroy()},i.prototype.bindEvents=function(){var i;if(i=function(t){return function(){var i;return i=t.$modalElement.find(".slick-lightbox-inner").height(),t.$modalElement.find(".slick-lightbox-slick-item").height(i),t.$modalElement.find(".slick-lightbox-slick-img, .slick-lightbox-slick-item-inner").css("max-height",Math.round(t.options.imageMaxHeight*i))}}(this),t(window).on("orientationchange.slickLightbox resize.slickLightbox",i),this.options.useHistoryApi&&t(window).on("popstate.slickLightbox",function(t){return function(){return t.close()}}(this)),this.$modalElement.on("init.slickLightbox",i),this.$modalElement.on("destroy.slickLightbox",function(t){return function(){return t.destroy()}}(this)),this.$element.on("destroy.slickLightbox",function(t){return function(){return t.destroy(!0)}}(this)),this.$parts.closeButton.on("click.slickLightbox touchstart.slickLightbox",function(t){return function(i){return i.preventDefault(),t.close()}}(this)),(this.options.closeOnEscape||this.options.navigateByKeyboard)&&t(document).on("keydown.slickLightbox",function(t){return function(i){var n;if(n=i.keyCode?i.keyCode:i.which,t.options.navigateByKeyboard&&(37===n?t.slideSlick("left"):39===n&&t.slideSlick("right")),t.options.closeOnEscape&&27===n)return t.close()}}(this)),this.options.closeOnBackdropClick)return this.$modalElement.on("click.slickLightbox touchstart.slickLightbox",".slick-lightbox-slick-img",function(t){return t.stopPropagation()}),this.$modalElement.on("click.slickLightbox",".slick-lightbox-slick-item",function(t){return function(i){return i.preventDefault(),t.close()}}(this))},i.prototype.slideSlick=function(t){return"left"===t?this.slick.slick("slickPrev"):this.slick.slick("slickNext")},i.prototype.detectIE=function(){if(this.isIE=!1,/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&new Number(RegExp.$1)<9)return this.isIE=!0},i.prototype.getElementCaption=function(i,n){return this.options.caption?'<span class="slick-lightbox-slick-caption">'+function(){switch(typeof this.options.caption){case"function":return this.options.caption(i,n);case"string":return t(i).data(this.options.caption)}}.call(this)+"</span>":""},i.prototype.getElementSrc=function(i){switch(typeof this.options.src){case"function":return this.options.src(i);case"string":return t(i).attr(this.options.src);default:return i.href}},i.prototype.unbindEvents=function(){return t(window).off(".slickLightbox"),t(document).off(".slickLightbox"),this.$modalElement.off(".slickLightbox")},i.prototype.destroy=function(t){if(null==t&&(t=!1),this.didInit&&(this.unbindEvents(),setTimeout(function(t){return function(){return t.$modalElement.remove()}}(this),this.options.destroyTimeout)),t)return this.$element.off(".slickLightbox"),this.$element.off(".slickLightbox",this.options.itemSelector)},i.prototype.destroyPrevious=function(){return t("body").children(".slick-lightbox").trigger("destroy.slickLightbox")},i.prototype.getTransitionDuration=function(){var t;return this.transitionDuration?this.transitionDuration:(t=this.$modalElement.css("transition-duration"),this.transitionDuration=void 0===t?500:t.indexOf("ms")>-1?parseFloat(t):1e3*parseFloat(t))},i.prototype.writeHistory=function(){return"undefined"!=typeof history&&null!==history&&"function"==typeof history.pushState?history.pushState(null,null,""):void 0},i.prototype.filterOutSlickClones=function(i){return this.$element.hasClass("slick-slider")?i=i.filter(function(){var i;return i=t(this),!i.hasClass("slick-cloned")&&0===i.parents(".slick-cloned").length}):i},i}(),n={background:"rgba(0,0,0,.8)",closeOnEscape:!0,closeOnBackdropClick:!0,destroyTimeout:500,itemSelector:"a",navigateByKeyboard:!0,src:!1,caption:!1,captionPosition:"dynamic",images:!1,slick:{},useHistoryApi:!1,layouts:{closeButton:'<button type="button" class="slick-lightbox-close"></button>'},shouldOpen:null,imageMaxHeight:.9,lazy:!1},t.fn.slickLightbox=function(o){return o=t.extend({},n,o),t(this).each(function(){return this.slickLightbox=new i(this,o)}),this},t.fn.unslickLightbox=function(){return t(this).trigger("destroy.slickLightbox").each(function(){return this.slickLightbox=null})}}(jQuery);
//# sourceMappingURL=slick-lightbox.min.js.map
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
