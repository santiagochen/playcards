(function(){

Suits = ["&spades;","&hearts;","&clubs;","&diams;"];
Numbers = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
SuitsCss = ["Spade","Hearts","Clubs","Diamonds"];

function Card(suit,number){
	var _self = this;
	function getRanNum(gap){
		return parseInt(Math.random()*gap);
	}
	this.number = number?number:Numbers[getRanNum(13)];
	var index= getRanNum(4);
	this.suit = suit?suit:Suits[index];
	this.suitcss = SuitsCss[index];
	this.deleted = false;
	var data = { Suit: this.suit, Number: this.number }; 
	this._el = $('#myTemplate').tmpl(data).addClass(this.suitcss).mousedown(function(e){
		window._dragtar = _self;
		window.afterit = $(this)[0].nextSibling;
		window.begoffx = e.offsetX;
		window.begoffy = e.offsetY;
		window.beginbcolor=_self.deleted==true?window.beginbcolor:$(this).css("borderColor");
		window.isdrag = true;
		$(this).css({
			'borderColor':"#0F921B"
		})
	});
	return this._el;
}

//logic handler
window.checkpos = function(tar,refx,refy){
	if(tar.position().left>=refx&&tar.position().top>=refy){return true;}
	else{return false;}
}
var initnum=10;
for(var m=0;m<initnum;m++){
	var card = new Card();
	card.appendTo($("#container"));
}


$("#cardmaster").click(function(e){
	var card = new Card();
	card.appendTo($("#container"));
})

$(window).on("mousemove",onDragCard);
$(window).on("mouseup",onMouseUp);
function onMouseDown(e){
	window._dragtar = $(this);
	window.beginbcolor= $(this).css("borderColor");
	window.isdrag = true;
	$(this).css({
		'borderColor':"#0F921B"
	})
}
function onDragCard(e){
	e.preventDefault();
	if(window.isdrag == true){
		$(window._dragtar._el).css({
			position:"absolute",
			top:(e.pageY-window.begoffy),
			left:(e.pageX-window.begoffx)
		});

		if(window.checkpos(window._dragtar._el,$("#bin").position().left,$("#bin").position().top)==true){
			$("#bin").css("borderColor","#F15501");
		}
		else{$("#bin").css("borderColor","#ccc");}

	}
}

function onMouseUp(e){
	window.isdrag = false;
	$("#bin").css("borderColor","#ccc");
	if(window.checkpos(window._dragtar._el,$("#bin").position().left,$("#bin").position().top)==true){
		window._dragtar._el.appendTo($("#bin")).css({
			"position":"static",
			'borderColor':"#999"
		});
		window._dragtar.deleted = true;
	}
	else{
		if(window._dragtar.deleted == true){
			window._dragtar._el.appendTo($("#container")).css({
				"position":"static",
				'borderColor':window.beginbcolor
			});
		}
		else{
			window._dragtar._el.css({
				"position":"static",
				'borderColor':window.beginbcolor
			})
		}
		
	}

}

}())