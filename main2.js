//(function(){}())

//card specifities
Suits = ["&spades;","&hearts;","&clubs;","&diams;"];
Numbers = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
SuitsCss = ["Spade","Hearts","Clubs","Diamonds"];

//Card Class
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

	this._nameel = document.createElement("span");
	this._suitel = document.createElement("span");
	this._el = document.createElement("li");
	this._nameel.innerHTML = this.number;
	this._nameel.className = this.number;
	this._suitel.innerHTML = this.suit;
	this._suitel.className = this.suitcss;
	this._el.appendChild(this._nameel);
	this._el.appendChild(this._suitel);
	return this;
}

//Referee Class
function Referee(){}
Referee.startgame = function(){
	
}
Referee.shufflecard = function(cards){
	return new Array();
}
Referee.offercard = function(number){
	return new Array(number);
}
Referee.cleancard = function(){
	console.log("cards have been cleaned");
}
Referee.comparecard = function(cards,rule){
	switch(rule){
		case "":
		break;
		case "":
		break;
	}
	return //cards[];
}

//Player Class
function Player(name){
	this.name = name;
}
Player.prototype = function(){
	takeincard = function(){};
	showoutcard = function(){};
	sortcards = function(){};
	return {
		takeincard:takeincard,
		showoutcard:showoutcard,
		sortcards:sortcards
	}
}()

//Rule Class
function Rule(name){
	this._name = name;
	console.log(this._name);
}
Rule.prototype.compare = function(arr){
	return Math.max.apply(this,_arr);
}


function CommonRule(name){
	Rule.call(this,name);
}
CommonRule.prototype = Object.create(Rule.prototype);
CommonRule.prototype.constructor = CommonRule;
CommonRule.prototype.compare = function(arr){
	return Rule.prototype.compare.call(this,arr);
}

var r = new Rule("base");
var R = new CommonRule("common");


//OUT LOGIC
/*var _container = document.getElementById("container"),
 	_newcardbtn = document.getElementById("cardmaster"),
 	_bin = document.getElementById("bin");*/



