var isIE = /*@cc_on!@*/false || !!document.documentMode;
if(isIE === true) {
    alert("Internet Explorer doesn't support css grid. Please consider using an other browser for full view. Thank you!")
}

// Cache selectors
var lastId,
    menu = $("#menu"),
    menuHeight = menu.outerHeight()+15,
    // All list items
    menuItems = menu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { 
        return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-menuHeight/2;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+menuHeight*2;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

/*function onScroll(event){
  var sections = document.querySelectorAll('#menu a');
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
  for( var i = 0; i < sections.length; i++ ){
    var currLink = sections[i]; 
    var val = currLink.getAttribute('href');
    var refElement = document.querySelector(val);
      if( refElement.offsetTop <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight > scrollPos)){
        document.querySelector('#menu ul li a').classList.remove('active');
        currLink.classList.add('active');
      }else{
         currLink.classList.remove('active');
       }
  }
};

window.document.addEventListener('scroll', onScroll );*/