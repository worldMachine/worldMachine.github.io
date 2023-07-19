$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    10,
    "linear"
  );
});

// Cache selectors
var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });
// console.log(menuItems)
// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("active");
  }
});

// --------------- side menu

// Cache selectors
var lastSideId,
  sideNav = $("#sidenav"),
  //  topMenuHeight = topMenu.outerHeight()+15,
  // All list items
  sideMenuItems = sideNav.find("a"),
  // Anchors corresponding to menu items
  sideScrollItems = sideMenuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });
//  console.log(sideMenuItems)
// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  //  var fromTop = $(this).scrollTop();
  //  console.log(fromTop)
  var fromTop = $(this).scrollTop() + topMenuHeight;
  // console.log(fromTop)

  // Get id of current scroll item
  var cur = sideScrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var sideId = cur && cur.length ? cur[0].id : "";
  //  console.log(sideId)

  if (lastSideId !== sideId) {
    lastSideId = sideId;
    // Set/remove active class
    sideMenuItems.removeClass("selected-green");
    sideMenuItems.filter("[href='#" + sideId + "']").addClass("selected-green");
    if (sideId != "Home") {
      $("#mobile-nav").css("background-color", "#000");
      // $("#bg-video").css('opacity','50%');
    } else {
      console.log("sideId is Home");
      $("#mobile-nav").css("background-color", "transparent");
    }
    //   .end().filter("[href='#"+id+"']").addClass("text-white");
  }
});
