// todo: JS-25 --- SPLITTING AND SLICING STRINGS
// * 0 based JavaScript

var str = "hello, world";
< undefined
str
< "hello, world"
var str2 = str.slice(2,9);
str 2
< "llo, wo"
var str3 = str.slice(2); //? cuts off at the end when position is not specified 
str3
< "llo, world"
var tags = "meat, ham, salami, beef, pork, chicken"
tags
< "meat, ham, salami, beef, pork, chicken"
var tagsArray = tags.split(",") //? everytime there is a comma, create a pocket
tagsArray
< ["meat"," ham"," salami"," beef"," pork"," chicken"]

