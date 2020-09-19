var isIE = /*@cc_on!@*/false || !!document.documentMode;
if(isIE === true) {
    alert("Internet Explorer is not supported. Please consider using an other browser for full view. Thank you!")
}

if($(window).width() > 900) {
var lastId,
    menu = $("#menu"),
    menuHeight = menu.outerHeight()+15,
    menuItems = menu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { 
        return item; }
    });

menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-menuHeight/14;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+menuHeight*2;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
}
