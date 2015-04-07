/*! 
 * rtMedia JavaScript Library 
 * @package rtMedia 
 */function rtmedia_addon_do_not_show(){var a={action:"rtmedia_addon_popup_not_show_again"};jQuery.post(rtmedia_admin_ajax,a,function(){jQuery("#TB_window").remove(),jQuery("#TB_overlay").remove()})}"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(a,b){var c={init:function(b,c){var d=this;d.elem=c,d.$elem=a(c),d.options=a.extend({},a.fn.rtTab.options,b),d.rtTabs()},rtTabs:function(){var c=this,d=c.options.activeTab;c.$elem.find("li:nth-child("+d+")").addClass("active"),c.rtTabContent(activeTabContent="yes"),c.rtClick();var e="false"===c.$elem.attr("data-hash")?!1:!0;if(e===!0){var f=b.location.hash;f&&c.$elem.find("li").find("a[href="+f+"]").trigger("click"),a(b).on("hashchange",function(){var a=b.location.hash;c.$elem.find("li").find("a[href="+a+"]").trigger("click")})}},rtClick:function(){var c=this,d=c.$elem.find("li"),e=d.find("a");e.on("click",function(e){e.preventDefault(),d.removeClass("active"),c.rtTabContent(),a(this).parent().addClass("active");var f=a(this).attr("href");a(f).removeClass("hide");var g="false"===c.$elem.attr("data-hash")?!1:!0;if(g===!0){var h=a(b).scrollTop();location.hash=a(this).attr("href"),a(b).scrollTop(h)}"function"==typeof c.options.onComplete&&c.options.onComplete.apply(c.elem,arguments)})},rtTabContent:function(b){var c=this,d=c.$elem.find("li"),e=d.find("a");e.each(function(){var c=a(this),d=c.attr("href");"yes"===b?c.parent().hasClass("active")||a(d).addClass("hide"):a(d).addClass("hide")})}};a.fn.rtTab=function(b){return this.each(function(){var d=Object.create(c);d.init(b,this),a.data(this,"rtTab",d)})},a.fn.rtTab.options={activeTab:1,onComplete:null}}(jQuery,window,document),jQuery(document).ready(function(a){a(".rtm-tabs").rtTab(),a('input[name^="rtmedia-options"]').on("change",function(){0===a(".rtm-fly-warning").length&&(a(".rtm-button-container.top").prepend('<div class="rtm-warning rtm-fly-warning hide">Settings have changed, you should save them!</div>'),a(".rtm-fly-warning").slideDown())}),a(".rtm-img-size-setting .form-table tr:nth-child(7) td:last-child").attr("colspan","3"),a(".rtm-field-wrap .switch input[type=checkbox]").each(function(){var b=a(this);b.parents("table").attr("data-depends")||(b.is(":checked")?(b.parents("table").next(".rtm-notice").slideDown(),b.parents("table").siblings("table").each(function(){a(this).attr("data-depends")&&a(this).slideDown()})):(b.parents("table").next(".rtm-notice").slideUp(),b.parents("table").siblings("table").each(function(){a(this).attr("data-depends")&&a(this).slideUp()}))),b.parents("tr").next("tr").attr("data-depends")&&(b.is(":checked")?b.parents("tr").next("tr").slideDown():b.parents("tr").next("tr").slideUp())}),a(".rtm-field-wrap .switch input[type=checkbox]").on("change",function(){var b=a(this);b.parents("table").attr("data-depends")||(b.parents("table").next(".rtm-notice").slideToggle(),b.parents("table").siblings("table").each(function(){a(this).attr("data-depends")&&a(this).slideToggle()})),b.parents("tr").next("tr").attr("data-depends")&&b.parents("tr").next("tr").slideToggle()});{var b=Backbone.View.extend({el:a(".bp-media-admin"),events:{"click .rtm-theme":"render","click .rtm-close":"close","click .rtm-previous":"previousTheme","click .rtm-next":"nextTheme",keyup:"keyEvent"},initialize:function(){_.bindAll(this,"render","close","nextTheme","previousTheme","keyEvent"),this.keyEvent()},render:function(b){a(".rtm-theme").removeClass("rtm-modal-open");var c=a(b.currentTarget).addClass("rtm-modal-open").find(".rtm-theme-content").html();a(".rtm-theme-overlay")[0]?(a(".rtm-theme-overlay").show(),a(this.el).find(".rtm-theme-content-wrap").empty().append(c)):a(this.el).append('<div class="theme-overlay rtm-theme-overlay"><div class="theme-backdrop rtm-close"></div><div class="rtm-theme-content-wrap">'+c+"</div></div>"),a(b.currentTarget).is(":first-child")?a(".rtm-previous").addClass("disabled"):a(b.currentTarget).is(":last-child")?a(".rtm-next").addClass("disabled"):a(".rtm-next, .rtm-previous").removeClass("disabled")},close:function(){a(".rtm-theme").removeClass("rtm-modal-open"),a(".rtm-theme-overlay").hide(),a(".rtm-next, .rtm-previous").removeClass("disabled")},nextTheme:function(b){return a(".rtm-next, .rtm-previous").removeClass("disabled"),a(".rtm-theme:last-child").hasClass("rtm-modal-open")&&a(b.currentTarget).addClass("disabled"),a(".rtm-modal-open").next().trigger("click"),!1},previousTheme:function(b){return a(".rtm-next, .rtm-previous").removeClass("disabled"),a(".rtm-theme:first-child").hasClass("rtm-modal-open")&&a(b.currentTarget).addClass("disabled"),a(".rtm-modal-open").prev().trigger("click"),!1},keyEvent:function(){a("body").on("keyup",function(b){return 39===b.keyCode?(a(".rtm-next, .rtm-previous").removeClass("disabled"),a(".rtm-theme:last-child").hasClass("rtm-modal-open")&&a(b.currentTarget).addClass("disabled"),a(".rtm-modal-open").next().trigger("click"),!1):37===b.keyCode?(a(".rtm-next, .rtm-previous").removeClass("disabled"),a(".rtm-theme:first-child").hasClass("rtm-modal-open")&&a(b.currentTarget).addClass("disabled"),a(".rtm-modal-open").prev().trigger("click"),!1):void(27===b.keyCode&&a(".rtm-close").trigger("click"))})}});new b}}),jQuery(document).ready(function(a){function b(a){return jQuery.post(ajaxurl,a,function(b){if(0!=b){var c=!1,d=Math.ceil((20*parseInt(b)+parseInt(a.values.finished))/parseInt(a.values.total)*100);d>100&&(d=100,c=!0),jQuery("#rtprogressbar>div").css("width",d+"%"),finished=jQuery("#rtprivacyinstaller span.finished").html(),jQuery("#rtprivacyinstaller span.finished").html(parseInt(finished)+a.count),c&&jQuery.post(ajaxurl,{action:"rtmedia_privacy_redirect"},function(){window.location=settings_url})}else jQuery("#map_progress_msgs").html('<div class="map_mapping_failure">Row '+b+" failed.</div>")})}function c(a){return jQuery.getJSON(ajaxurl,a,function(b){if(favorites=!1,b){var c=Math.ceil((5*parseInt(b.page)+parseInt(a.values.finished))/parseInt(a.values.total)*100);comments_total=jQuery("#bpmedia-bpalbumimporter .bp-album-comments span.total").html(),users_total=jQuery("#bpmedia-bpalbumimporter .bp-album-users span.total").html(),media_total=jQuery("#bpmedia-bpalbumimporter .bp-album-media span.total").html(),comments_finished=jQuery("#bpmedia-bpalbumimporter .bp-album-comments span.finished").html(),users_finished=jQuery("#bpmedia-bpalbumimporter .bp-album-users span.finished").html();var f=Math.ceil((parseInt(b.comments)+parseInt(comments_finished))/parseInt(comments_total)*100),g=Math.ceil(parseInt(b.users)/parseInt(users_total)*100);(c>100||100==c)&&(c=100,favorites=!0),jQuery(".bp-album-media #rtprogressbar>div").css("width",c+"%"),jQuery(".bp-album-comments #rtprogressbar>div").css("width",f+"%"),jQuery(".bp-album-users #rtprogressbar>div").css("width",g+"%"),media_finished=jQuery("#bpmedia-bpalbumimporter .bp-album-media span.finished").html(),parseInt(media_finished)<parseInt(media_total)&&jQuery("#bpmedia-bpalbumimporter .bp-album-media span.finished").html(parseInt(media_finished)+a.count),jQuery("#bpmedia-bpalbumimporter .bp-album-comments span.finished").html(parseInt(b.comments)+parseInt(comments_finished)),jQuery("#bpmedia-bpalbumimporter .bp-album-users span.finished").html(parseInt(b.users)),favorites&&(favorite_data={action:"rtmedia_rt_album_import_favorites"},jQuery.post(ajaxurl,favorite_data,function(a){if(0!==a.favorites||"0"!==a.favorites){jQuery(".bp-album-favorites").length||jQuery(".bp-album-comments").after('<br /><div class="bp-album-favorites"><strong>User\'s Favorites: <span class="finished">0</span> / <span class="total">'+a.users+'</span></strong><div id="rtprogressbar"><div style="width:0%"></div></div></div>'),$favorites={},start=0!=a.offset||"0"!=a.offset?1*a.offset+1:1;for(var b=start;b<=a.users;b++)$count=1,b==a.users&&($count=parseInt(a.users%$count),0==$count&&($count=1)),newvals={action:"rtmedia_rt_album_import_step_favorites",offset:1*(b-1),redirect:b==a.users},$favorites[b]=newvals;var c=jQuery.Deferred();c.resolve(),jQuery.each($favorites,function(a,b){c=c.pipe(function(){return d(b)})})}else window.setTimeout(e,2e3)},"json"))}else jQuery("#map_progress_msgs").html('<div class="map_mapping_failure">Row '+b.page+" failed.</div>")})}function d(a){return jQuery.post(ajaxurl,a,function(){redirect=!1,favorites_total=jQuery("#bpmedia-bpalbumimporter .bp-album-favorites span.total").html(),favorites_finished=jQuery("#bpmedia-bpalbumimporter .bp-album-favorites span.finished").html(),jQuery("#bpmedia-bpalbumimporter .bp-album-favorites span.finished").html(parseInt(favorites_finished)+1);var a=Math.ceil(parseInt(favorites_finished+1)/parseInt(favorites_total)*100);(a>100||100==a)&&(a=100,redirect=!0),jQuery(".bp-album-favorites #rtprogressbar>div").css("width",a+"%"),redirect&&window.setTimeout(e,2e3)})}function e(){window.location=document.URL}a(".rtm-save-settings-msg").length>0&&setTimeout(function(){a(".rtm-save-settings-msg").remove()},1e4),jQuery("#spread-the-word").on("click","#bp-media-add-linkback",function(){var a={action:"rtmedia_linkback",linkback:jQuery("#bp-media-add-linkback:checked").length};jQuery.post(rtmedia_admin_ajax,a,function(){})}),jQuery("#bp-media-settings-boxes").on("change","#select-request",function(){if(jQuery(this).val()){jQuery("#bp_media_settings_form .bp-media-metabox-holder").html(),jQuery("#bp_media_settings_form .bp-media-metabox-holder").html('<div class="support_form_loader"></div>');var a={action:"rtmedia_select_request",form:jQuery(this).val()};jQuery.post(ajaxurl,a,function(a){jQuery("#bp_media_settings_form .bp-media-metabox-holder").html(),jQuery("#bp_media_settings_form .bp-media-metabox-holder").html(a).fadeIn("slow")})}}),jQuery("#bp-media-settings-boxes").on("click","#cancel-request",function(){if(jQuery(this).val()){jQuery("#bp_media_settings_form .bp-media-metabox-holder").html(),jQuery("#bp_media_settings_form .bp-media-metabox-holder").html('<div class="support_form_loader"></div>');var a={action:"rtmedia_cancel_request"};jQuery.post(ajaxurl,a,function(a){jQuery("#bp_media_settings_form .bp-media-metabox-holder").html(),jQuery("#bp_media_settings_form .bp-media-metabox-holder").html(a).fadeIn("slow")})}}),jQuery("#bp-media-settings-boxes").on("submit","#bp_media_settings_form, .rtmedia-settings-submit",function(a){var b=!0,c=new RegExp("^[0-9]+$");jQuery("input[name*='defaultSizes']").each(function(){return c.test(jQuery(this).val())?void 0:(alert("Invalid value for "+jQuery(this).attr("name").replace("rtmedia-options[defaultSizes_","").replace("]","").replace(/_/g," ").replace(/(\b)([a-zA-Z] )/g,function(a){return a.toUpperCase()})),b=!1,!1)});var d=jQuery('input[name^="rtmedia-options[general_videothumbs]"]');if(b&&d.length>0&&"undefined"!=typeof d){var e="",f=0;if(d.val()<=0?(e+="Number of video thumbnails to be generated should be greater than 0 in image sizes settings. Setting it to default value 2.",f=2):c.test(d.val())||(e+="Invalid value for Number of video thumbnails in image sizes settings. Setting it to round value "+Math.round(d.val())+".",f=Math.round(d.val())),""!=e)return alert(e),d.val(f),b=!1,!1}var g=jQuery('input[name^="rtmedia-options[general_jpeg_image_quality]"]');if(b&&g.length>0&&"undefined"!=typeof g){var e="",h=0;if(g.val()<=0?(e+="Number of percentage in JPEG image quality should be greater than 0 in image sizes settings. Setting it to default value 90.",h=90):g.val()>100?(e+="Number of percentage in JPEG image quality should be less than 100 in image sizes settings. Setting it to 100.",h=100):c.test(g.val())||(e+="Invalid value for percentage in JPEG image quality in image sizes settings. Setting it to round value "+Math.round(g.val())+".",h=Math.round(g.val())),""!=e)return alert(e),g.val(h),b=!1,!1}var i=jQuery('input[name^="rtmedia-options[general_perPageMedia]"]');if(b&&i.length>0&&"undefined"!=typeof i){var e="",j=0;if(i.val()<1?(e+="Please enter positive integer value only. Setting number of media per page value to default value 10.",j=10):jQuery.isNumeric(i.val())&&Math.floor(i.val())!=i.val()&&(e+="Please enter positive integer value only. Setting number of media per page value to round value "+Math.round(i.val())+".",j=Math.round(i.val())),""!=e)return alert(e),i.val(j),b=!1,!1}b||a.preventDefault()}),jQuery(document).on("click","#bpm-services .encoding-try-now,#rtm-services .encoding-try-now",function(a){if(a.preventDefault(),confirm(rtmedia_admin_strings.are_you_sure)){jQuery(this).after('<img style="margin: 0 0 0 10px" src="'+rtmedia_admin_url+'images/wpspin_light.gif" />');var b={action:"rtmedia_free_encoding_subscribe"};jQuery.getJSON(ajaxurl,b,function(a){if(void 0===a.error&&a.apikey){var b=window.location.href,c=window.location.hash;b=b.replace(c,""),document.location.href=b+"&apikey="+a.apikey+c}else jQuery(".encoding-try-now").next().remove(),jQuery("#settings-error-encoding-error").remove(),jQuery("#bp-media-settings-boxes").before('<div class="error" id="settings-error-encoding-error"><p>'+a.error+"</p></div>")})}}),jQuery(document).on("click","#api-key-submit",function(a){a.preventDefault(),0==jQuery(this).next("img").length&&jQuery(this).after('<img style="margin: 0 0 0 10px" src="'+rtmedia_admin_url+'images/wpspin_light.gif" />');var b={action:"rtmedia_enter_api_key",apikey:jQuery("#new-api-key").val()};jQuery.getJSON(ajaxurl,b,function(a){if(void 0===a.error&&a.apikey){var b=window.location.href,c=window.location.hash;b=b.replace(c,""),-1==b.toString().indexOf("&apikey="+a.apikey)&&(b+="&apikey="+a.apikey),-1==b.toString().indexOf("&update=true")&&(b+="&update=true"),document.location.href=b+c}else jQuery("#settings-error-api-key-error").remove(),jQuery("h2:first").after('<div class="error" id="settings-error-api-key-error"><p>'+a.error+"</p></div>");jQuery("#api-key-submit").next("img").remove()})}),jQuery(document).on("click","#disable-encoding",function(a){if(a.preventDefault(),confirm(rtmedia_admin_strings.disable_encoding)){jQuery(this).after('<img style="margin: 0 0 0 10px" src="'+rtmedia_admin_url+'images/wpspin_light.gif" />');var b={action:"rtmedia_disable_encoding"};jQuery.post(ajaxurl,b,function(a){a?(jQuery("settings-error-encoding-disabled").remove(),jQuery("h2:first").after('<div class="updated" id="settings-encoding-successfully-disabled"><p>'+a+"</p></div>"),jQuery("#bp-media-encoding-usage").remove(),jQuery("#disable-encoding").next().remove(),jQuery("#disable-encoding").remove(),jQuery("#new-api-key").val("")):(jQuery("#settings-error-encoding-disabled").remove(),jQuery("h2:first").after('<div class="error" id="settings-error-encoding-disabled"><p>'+rtmedia_admin_strings.something_went_wrong+"</p></div>"))})}}),jQuery(".bp-media-encoding-table").on("click",".bpm-unsubscribe",function(a){a.preventDefault(),jQuery("#bpm-unsubscribe-dialog").dialog({dialogClass:"wp-dialog",modal:!0,buttons:{Unsubscribe:function(){jQuery(this).dialog("close"),jQuery(".bpm-unsubscribe").after('<img style="margin: 0 0 0 10px" src="'+rtmedia_admin_url+'images/wpspin_light.gif" />');var a={action:"rtmedia_unsubscribe_encoding_service",note:jQuery("#bpm-unsubscribe-note").val(),plan:jQuery(".bpm-unsubscribe").attr("data-plan"),price:jQuery(".bpm-unsubscribe").attr("data-price")};jQuery.getJSON(ajaxurl,a,function(a){void 0===a.error&&a.updated?(jQuery(".bpm-unsubscribe").next().remove(),jQuery(".bpm-unsubscribe").after(a.form),jQuery(".bpm-unsubscribe").remove(),jQuery("#settings-unsubscribed-successfully").remove(),jQuery("#settings-unsubscribe-error").remove(),jQuery("h2:first").after('<div class="updated" id="settings-unsubscribed-successfully"><p>'+a.updated+"</p></div>"),window.location.hash="#settings-unsubscribed-successfully"):(jQuery(".bpm-unsubscribe").next().remove(),jQuery("#settings-unsubscribed-successfully").remove(),jQuery("#settings-unsubscribe-error").remove(),jQuery("h2:first").after('<div class="error" id="settings-unsubscribe-error"><p>'+a.error+"</p></div>"),window.location.hash="#settings-unsubscribe-error")})}}})}),jQuery("#bpmedia-bpalbumimporter").on("change","#bp-album-import-accept",function(){jQuery(".bp-album-import-accept").toggleClass("i-accept"),jQuery(".bp-album-importer-wizard").slideToggle()}),jQuery("#rtprivacyinstall").click(function(a){a.preventDefault(),$progress_parent=jQuery("#rtprivacyinstaller"),$progress_parent.find(".rtprivacytype").each(function(){if($type=jQuery(this).attr("id"),"total"==$type){$values=[],jQuery(this).find("input").each(function(){$values[jQuery(this).attr("name")]=[jQuery(this).val()]}),$data={};for(var a=1;a<=$values.steps[0];a++)$count=20,a==$values.steps[0]&&($count=parseInt($values.laststep[0]),0==$count&&($count=20)),newvals={page:a,action:"rtmedia_privacy_install",count:$count,values:$values},$data[a]=newvals;var c=jQuery.Deferred();c.resolve(),jQuery.each($data,function(a,d){c=c.pipe(function(){return b(d)})})}})}),jQuery("#bpmedia-bpalbumimport-cleanup").click(function(a){a.preventDefault(),jQuery.post(ajaxurl,{action:"rtmedia_rt_album_cleanup"},function(){window.location=settings_rt_album_import_url})}),jQuery("#bpmedia-bpalbumimporter").on("click","#bpmedia-bpalbumimport",function(a){if(a.preventDefault(),!jQuery("#bp-album-import-accept").prop("checked")){jQuery("html, body").animate({scrollTop:jQuery("#bp-album-import-accept").offset().top},500);var b=jQuery(".bp-album-import-accept"),d=500,e="#FFEBE8",f=3;return void function h(){b.css("background-color","#EE0000"),setTimeout(function(){b.css("background-color",e),--f&&setTimeout(h,d)},d)}()}jQuery(this).prop("disabled",!0),wp_admin_url=ajaxurl.replace("admin-ajax.php",""),jQuery(".bpm-ajax-loader").length||jQuery(this).after(' <img class="bpm-ajax-loader" src="'+wp_admin_url+'images/wpspin_light.gif" /> <strong>'+rtmedia_admin_strings.no_refresh+"</strong>"),$progress_parent=jQuery("#bpmedia-bpalbumimport"),$values=[],jQuery(this).parent().find("input").each(function(){$values[jQuery(this).attr("name")]=[jQuery(this).val()]}),0==$values.steps[0]&&($values.steps[0]=1),$data={};for(var f=1;f<=$values.steps[0];f++)$count=5,f==$values.steps[0]&&($count=parseInt($values.laststep[0]),0==$count&&($count=5)),newvals={page:f,action:"rtmedia_rt_album_import",count:$count,values:$values},$data[f]=newvals;var g=jQuery.Deferred();g.resolve(),jQuery.each($data,function(a,b){g=g.pipe(function(){return c(b)})})}),jQuery("#bp-media-settings-boxes").on("click",".interested",function(){jQuery(".interested-container").removeClass("hidden"),jQuery(".choice-free").attr("required","required")}),jQuery("#bp-media-settings-boxes").on("click",".not-interested",function(){jQuery(".interested-container").addClass("hidden"),jQuery(".choice-free").removeAttr("required")}),jQuery("#video-transcoding-main-container").on("click",".video-transcoding-survey",function(a){a.preventDefault();var b={action:"rtmedia_convert_videos_form",email:jQuery(".email").val(),url:jQuery(".url").val(),choice:jQuery('input[name="choice"]:checked').val(),interested:jQuery('input[name="interested"]:checked').val()};return jQuery.post(ajaxurl,b,function(a){jQuery("#video-transcoding-main-container").html("<p><strong>"+a+"</strong></p>")}),!1}),jQuery("#bpmedia-bpalbumimporter").on("click",".deactivate-bp-album",function(a){a.preventDefault(),$bpalbum=jQuery(this);var b={action:"rtmedia_rt_album_deactivate"};jQuery.get(ajaxurl,b,function(a){a?location.reload():$bpalbum.parent().after("<p>"+rtmedia_admin_strings.something_went_wrong+"</p>")})}),jQuery(".updated").on("click",".bpm-hide-encoding-notice",function(){jQuery(this).after('<img style="margin: 0 0 0 10px" src="'+rtmedia_admin_url+'images/wpspin_light.gif" />');var a={action:"rtmedia_hide_encoding_notice"};jQuery.post(ajaxurl,a,function(a){a&&jQuery(".bpm-hide-encoding-notice").closest(".updated").remove()})}),jQuery("#rtmedia-bp-enable-activity").on("click",function(){jQuery(this).is(":checked")?jQuery(".rtmedia-bp-activity-setting").prop("disabled",!1):jQuery(".rtmedia-bp-activity-setting").prop("disabled",!0)});var f="",g="";void 0!==rtmedia_on_label&&(f='data-on-label="'+rtmedia_on_label+'"'),void 0!==rtmedia_off_label&&(g='data-off-label="'+rtmedia_off_label+'"'),jQuery("#rtmedia-submit-request").click(function(){var b=jQuery("#name").val(),c=jQuery("#email").val(),d=jQuery("#website").val(),e=jQuery("#phone").val(),f=jQuery("#subject").val(),g=jQuery("#details").val(),h=jQuery('input[name="request_type"]').val(),i=jQuery('input[name="request_id"]').val(),j=jQuery('input[name="server_address"]').val(),k=jQuery('input[name="ip_address"]').val(),l=jQuery('input[name="server_type"]').val(),m=jQuery('input[name="user_agent"]').val(),n={name:b,email:c,website:d,phone:e,subject:f,details:g,request_id:i,request_type:"premium_support",server_address:j,ip_address:k,server_type:l,user_agent:m};if("bug_report"==h){var o=jQuery("#wp_admin_username").val();if(""==o)return alert("Please enter WP Admin Login."),!1;var p=jQuery("#wp_admin_pwd").val();if(""==p)return alert("Please enter WP Admin password."),!1;var q=jQuery("#ssh_ftp_host").val();if(""==q)return alert("Please enter SSH / FTP host."),!1;var r=jQuery("#ssh_ftp_username").val();if(""==r)return alert("Please enter SSH / FTP login."),!1;var s=jQuery("#ssh_ftp_pwd").val();if(""==s)return alert("Please enter SSH / FTP password."),!1;n={name:b,email:c,website:d,phone:e,subject:f,details:g,request_id:i,request_type:"premium_support",server_address:j,ip_address:k,server_type:l,user_agent:m,wp_admin_username:o,wp_admin_pwd:p,ssh_ftp_host:q,ssh_ftp_username:r,ssh_ftp_pwd:s}}for(formdata in n)if(""==n[formdata]&&"phone"!=formdata)return alert("Please enter "+formdata.replace("_"," ")+" field."),!1;return data={action:"rtmedia_submit_request",form_data:n},jQuery.post(ajaxurl,data,function(b){return b=b.trim(),"false"==b?(alert("Please fill all the fields."),!1):(a("#rtmedia_service_contact_container").empty(),void a("#rtmedia_service_contact_container").append(b))}),!1}),jQuery("#cancel-request").click(function(){return!1}),jQuery(".rtm_enable_masonry_view input[type=checkbox]").is(":checked")?jQuery(".rtm_enable_masonry_view").parents(".metabox-holder").find(".rtmedia-info").show():jQuery(".rtm_enable_masonry_view").parents(".metabox-holder").find(".rtmedia-info").hide(),jQuery(".rtm_enable_masonry_view input[type=checkbox]").on("click",function(){jQuery(this).is(":checked")?jQuery(".rtm_enable_masonry_view").parents(".metabox-holder").find(".rtmedia-info").show():jQuery(".rtm_enable_masonry_view").parents(".metabox-holder").find(".rtmedia-info").hide()}),jQuery("#rtm-masonry-change-thumbnail-info").click(function(){jQuery("html, body").animate({scrollTop:0},"500","swing")})}),jQuery(window).load(function(){jQuery(".rtmedia-addon-thickbox").trigger("click")});