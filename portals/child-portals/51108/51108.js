let noLRGPortal = new NoLRGPortal();

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function(){  
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');
    },1);
});

noLRGPortal.updateAttribute('href', 'https://static.hotelsforhope.com/portals/child-portals/51108/images/favicon.png', '#favicon')
noLRGPortal.updateHTML('header', '<nav class="hidden-xs navbar navbar-default top-menu"><div class=container-fluid><ul class="nav navbar-nav left-nav"><li><a href=https://www.formula1.com/ target=_blank class=uppercase>Formula1.com</a></ul><ul class="nav navbar-nav navbar-right"><li><a href=https://www.formula1.com/en/buy/tickets.html target=_blank>F1 Tickets</a><li><a href=https://www.formula1.com/en/buy/paddock-club.html target=_blank>F1 Hospitality</a><li><a href=https://www.formula1.com/en/buy/f1-experiences.html target=_blank>F1 Experiences</a><li style=padding:0><div class=languageContainer id=language style=padding:0;display:inline-block!important;position:relative;right:0;top:9px><div id=:0.targetLanguage style=display:inline data-children-count=1><select class=goog-te-combo id=language onchange=arnChangeTheme(this.value) style=text-transform:uppercase!important;font-weight:600;color:#15151e!important;height:initial><option class=translateMe selected>Select Language<option value=standard>English (United States)<option valeu=german>Deutsch (German)<option value=indonesia>Bahasa Indonesia (Indonesian)<option value=mandarin>普通话 (Mandarin)<option value=portuguese>Português (Portuguese)<option value=spanish>Español (Spanish)<option value=thai>ภาษาไทย (Thai)</select></div></div></ul></div></nav><nav class="navbar navbar-default main-nav"id=yui_3_18_1_1_1558979333452_164><div id=yui_3_18_1_1_1558979333452_163><div class=navbar-header><div class="collapsed navbar-toggle pull-left"data-target=#bs-example-navbar-collapse-1 data-toggle=collapse><span class="toggle-bar top-bar"></span> <span class="toggle-bar middle-bar"></span> <span class="toggle-bar bottom-bar"></span></div><a href=https://bookrooms.formula1.com/ class="hidden-xs navbar-brand"><img alt="F1 and Hotels for Hope Logo"src=/appSkins/46425/v6/themes/standard/images/F1_Rooms_H4H_LockUp_White.png></a><a href=https://bookrooms.formula1.com/ class="hidden-lg hidden-md hidden-sm navbar-brand pull-right"><img alt="F1 and Hotels for Hope Logo"src=https://static.hotelsforhope.com/portals/child-portals/51108/images/F1_Rooms_H4H_LockUp_White.png></a></div><div class="collapse navbar-collapse"id=bs-example-navbar-collapse-1 style=display:none;height:0><ul class="nav navbar-nav dynamic-nav pull-right"><li><a href=https://bookrooms.formula1.com/>Races <svg class="chevron hidden-lg hidden-md hidden-sm"fill=none height=12 id=i-chevron-right stroke=#fff stroke-linecap=round stroke-linejoin=round stroke-width=1.5 viewBox="0 0 12 12"width=12 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><path d="M4.5 10 L9 6 4.5 .75"></path></svg></a><li><a href=https://events.hotelsforhope.com/v6/support>Contact Us <svg class="chevron hidden-lg hidden-md hidden-sm"fill=none height=12 id=i-chevron-right stroke=#fff stroke-linecap=round stroke-linejoin=round stroke-width=1.5 viewBox="0 0 12 12"width=12 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><path d="M4.5 10 L9 6 4.5 .75"></path></svg></a></ul><div class="hidden-lg hidden-md hidden-sm top-menu-mobile"id=yui_3_18_1_1_1558979333452_162><ul class="nav navbar-nav"id=yui_3_18_1_1_1558979333452_161><li><a href=https://www.formula1.com/ target=_blank>FORMULA1.COM <svg class=chevron fill=none height=12 id=i-chevron-right stroke=#15151e stroke-linecap=round stroke-linejoin=round stroke-width=1.5 viewBox="0 0 12 12"width=12 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><path d="M4.5 10 L9 6 4.5 .75"></path></svg></a><li><a href=https://www.formula1.com/en/buy/tickets.html target=_blank>F1 TICKETS <svg class=chevron fill=none height=12 id=i-chevron-right stroke=#15151e stroke-linecap=round stroke-linejoin=round stroke-width=1.5 viewBox="0 0 12 12"width=12 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><path d="M4.5 10 L9 6 4.5 .75"></path></svg></a><li id=yui_3_18_1_1_1558979333452_160><a href=https://www.formula1.com/en/buy/paddock-club.html target=_blank id=yui_3_18_1_1_1558979333452_159>F1 HOSPITALITY <svg class=chevron fill=none height=12 id=i-chevron-right stroke=#15151e stroke-linecap=round stroke-linejoin=round stroke-width=1.5 viewBox="0 0 12 12"width=12 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><path d="M4.5 10 L9 6 4.5 .75"></path></svg></a><li><a href=https://www.formula1.com/en/buy/f1-experiences.html target=_blank>F1 EXPERIENCES <svg class=chevron fill=none height=12 id=i-chevron-right stroke=#15151e stroke-linecap=round stroke-linejoin=round stroke-width=1.5 viewBox="0 0 12 12"width=12 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><path d="M4.5 10 L9 6 4.5 .75"></path></svg></a><li id=yui_3_18_1_1_1558979333452_176><a id=yui_3_18_1_1_1558979333452_175><div class=languageContainer id=language style=padding:0;display:inline-block!important;position:relative;right:0;top:0><div id=:0.targetLanguage style=display:inline data-children-count=1><select class=goog-te-combo id=language onchange=arnChangeTheme(this.value) style=text-transform:uppercase!important;font-weight:600;color:#15151e!important;height:initial><option class=translateMe selected>Select Language<option value=standard>English (United States)<option value=german>Deutsch (German)<option value=indonesia>Bahasa Indonesia (Indonesian)<option value=mandarin>普通话 (Mandarin)<option value=portuguese>Português (Portuguese)<option value=spanish>Español (Spanish)<option value=thai>ภาษาไทย (Thai)</select></div></div></a></ul></div></div></div></nav>');