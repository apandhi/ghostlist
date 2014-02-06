var ghostlist = {
	var els = [],

	var $ifr = $("#ghostlist").contents().find("body"),

	var $container = jQuery(".wrapper"),

	var addItem = function(el){
		var top = parseInt(el.style.top.replace("px", ""));
		var bottom = parseInt(el.offsetHeight) + top;
		this.els.push({id: el.id, top: top, bottom: bottom, shown: true});
	}

	var bindScroll = function(){
		$(window).scroll(function(){
			var scrollTop = jQuery(window).scrollTop();
			var bottom = scrollTop + jQuery(window).height();
			checkView(scrollTop, bottom);
		});
	},

	var checkView = function(top, bottom){
		for(var i = 0; i < this.els.length; i++){
			var el = this.els[i];
			if(el.top > top - 250 && el.bottom < bottom + 250){
				//Needs to be shown
				if(!el.shown){
					console.log($ifr.contents().find("#" + el.id));
					console.log(el.id);
					this.$ifr.find("#" + el.id).appendTo(this.$container);
					el.shown = true;
				}
			}else{
				//Hide it
				$("#" + el.id).appendTo(this.$ifr);
				el.shown = false;
			}
		}
	}

}