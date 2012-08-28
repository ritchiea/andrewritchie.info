$(function () { // do this and protect scope rather than doc ready


        var dev_expanded = false;
        var wri_expanded = false;
        var des_expanded = false;
        var con_expanded = false;
        var visible = false;
        var $content = $('.content:first');
        // console.log("Visible is set: "+visible);

        function set_all_tabs_false() {
                  dev_expanded = false;
                  wri_expanded = false;
                  des_expanded = false;
                  con_expanded = false;
                }


          $('#developer').on('click', function(e) {

            if ((visible===false) && (dev_expanded===false)) {
             $content
               .append("<img id='buzz' src='images/cbuzz.png'>\
                <p>A full stack developer who most recently\
                worked for <a href='http://charitybuzz.com' target='_blank'>\
                CharityBuzz</a>\
                focusing on mobile development, AJAX UI enhancements,\
                and internal tools for account managers.<br/><br/>\
                I like Ruby, Rails, jQuery & Javascript.<br/><br/>\
                I recently started working with Node, Coffeescript \
                & Backbone. Lately I'm interested in  \
                product focused apps with robust clients.<br/><br/>\
                <a href='http://github.com/ritchiea' target='_blank'>\
                ritchiea</a> on github")
               .css('width', 500)
               .animate({height: "show", width: "show"}, 
                  1000, 
                  "easeOutBounce", 
                  function() {
                visible = true;
                set_all_tabs_false();
                dev_expanded=true;
                // console.log("Visible is set: "+visible);
              // Animation complete.
              });
           }

            if ((visible===true) && (dev_expanded===false)) {
             $content
              .empty()
              .css('display', 'none')
              .removeClass('design')
              .css('width', 500)
              .html("<img id='buzz' src='images/cbuzz.png'>\
                <p>A full stack developer who most recently\
                worked for <a href='http://charitybuzz.com' target='_blank'>\
                CharityBuzz</a>\
                focusing on mobile development, AJAX UI enhancements,\
                and internal tools for account managers.<br/><br/>\
                I like Ruby, Rails, jQuery & Javascript.<br/><br/>\
                I recently started working with Node, Coffeescript \
                & Backbone. Lately I'm interested in  \
                product focused apps with robust clients.<br/><br/>\
                <a href='http://github.com/ritchiea' target='_blank'>\
                ritchiea</a> on github")
             .animate({height: "show", width: "show"}, 1000, "easeOutBounce");
            set_all_tabs_false();
            dev_expanded=true;
            }
          });  // end of developer event handler

          $('#designer').on('click', function(e) {

            if ((visible===false) && (des_expanded===false)) {
              $content
               .addClass('design')
               .append("<img class='obama' src='images/where.png'> \
                <img class='obama' src='images/vopro.png'> \
                <img id='borgs' src='images/cy_small.png'>\
                <p class=''>A designer who values simplicity, color, \
                and strong visual analogy. Andrew most recently \
                collaborated with a team of designers to conceptualize, \
                wireframe and bring to life \
                <a href='http://buildingmarkets.org' target='_blank'> \
                Building Markets'</a> rebranding. <br/><br/>\
                Other notable projects include work for Obama for America, \
                and illustrating a treasure map for \
                <a href='http://irismediaworks.com' target='_blank'> \
                IrisMediaWorks</a> childrens \
                film <em>Berel and the Busdriver</em>.</p>")
               .animate({height: "show", width: "show"}, 
                  1000, 
                  "easeOutBounce");
                visible = true;
                // console.log("Visible is set: "+visible);
                set_all_tabs_false();
                des_expanded=true;
              // Animation complete.
           }

            if ((visible===true) && (des_expanded===false)) {
              $content
              .empty()
              .css('display', 'none')
              .addClass('design')
              .html("<img class='obama' src='images/where.png'> \
                <img class='obama' src='images/vopro.png'> \
                <img id='borgs' src='images/cy_small.png'>\
                <p class=''>A designer who values simplicity, color, \
                and strong visual analogy. Andrew most recently \
                collaborated with a team of designers to conceptualize, \
                wireframe and bring to life \
                <a href='http://buildingmarkets.org' target='_blank'> \
                Building Markets'</a> rebranding. <br/><br/>\
                Other notable projects include work for Obama for America, \
                and illustrating a treasure map for \
                <a href='http://irismediaworks.com' target='_blank'> \
                IrisMediaWorks</a> childrens \
                film <em>Berel and the Busdriver</em>.</p>")
             .animate({height: "show", width: "show"}, 1000, "easeOutBounce");
              set_all_tabs_false();
              des_expanded=true;
            }

          });  // end of designer event handler

          $('#writer').on('click', function(e) {

            if ((visible===false) && (wri_expanded===false)) {
              $content
               .append("<p>A fiction writer who occasionally \
              dabbles in journalism, usually music \
              journalism. I have written for \
              <a href='http://freewilliamsburg.com'>FreeWilliamsburg</a>\
              , <a href='http://bushwickbk.com' target='_blank'>BushwickBK</a>\
              , <a href='http://wearecyborgs.net' target='_blank'>We Are Cyborgs</a>,\
              and like to gather my friends to read work at\
              <a href='http://theplateis.us' target='_blank'>the Plate</a>.<br/><br/>\
              I share my thoughts on twitter as \
              <a href='http://twitter.com/whackandrew' target='_blank'>@whackandrew</a>.</p>")
               .css('width', 425)
               .animate({height: "show", width: "show"}, 
                  1000, 
                  "easeOutBounce");
                visible = true;
                // console.log("Visible is set: "+visible);
                set_all_tabs_false();
                wri_expanded=true;
              // Animation complete.
           }

            if ((visible===true) && (wri_expanded===false)) {
              $content
              .empty()
              .css('display', 'none')
              .removeClass('design')
              .css('width', 425)
              .html("<p>A fiction writer who occasionally \
              dabbles in journalism, usually music \
              journalism. I have written for \
              <a href='http://freewilliamsburg.com'>FreeWilliamsburg</a>\
              , <a href='http://bushwickbk.com' target='_blank'>BushwickBK</a>\
              , <a href='http://wearecyborgs.net' target='_blank'>We Are Cyborgs</a>,\
              and like to gather my friends to read work at\
              <a href='http://theplateis.us' target='_blank'>the Plate</a>.<br/><br/>\
              I share my thoughts on twitter as \
              <a href='http://twitter.com/whackandrew' target='_blank'>@whackandrew</a>.</p>")
             .animate({height: "show", width: "show"}, 1000, "easeOutBounce");
              set_all_tabs_false();
              wri_expanded=true;
            }
          });  // end of writer event handler

          $('#contact').on('click', function(e) {

            if ((visible===false) && (con_expanded===false)) {
             $content
               .append("<p>Available for hire. Reach me at:\
                <br/><br/> hello [at] andrewritchie.info</p>")
               .css('width', 400)
               .animate({height: "show", width: "show"}, 
                  1000, 
                  "easeOutBounce", 
                  function() {
                visible = true;
                set_all_tabs_false();
                con_expanded=true;
                // console.log("Visible is set: "+visible);
              // Animation complete.
              });
           }

            if ((visible===true) && (con_expanded===false)) {
             $content
              .empty()
              .css('display', 'none')
              .removeClass('design')
              .css('width', 400)
              .html("<p>Available for hire. Reach me at:\
                <br/><br/> hello [at] andrewritchie.info</p>")
             .animate({height: "show", width: "show"}, 1000, "easeOutBounce");
            set_all_tabs_false();
            con_expanded=true;
            }
          });  // end of contact event handler

      }); // end of jquery
