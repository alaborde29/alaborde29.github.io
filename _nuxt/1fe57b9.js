(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{444:function(m,a,r){"use strict";r.r(a);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{role:"presentation"}},[n("V-Navbar",{attrs:{"current-section":t.currentSection}}),t._v(" "),n("V-Header",{attrs:{"aria-label":"content header"}}),t._v(" "),n("main",{attrs:{"aria-label":"main content"}},[n("V-Work"),t._v(" "),n("V-About"),t._v(" "),n("V-Contact")],1),t._v(" "),n("V-Footer"),t._v(" "),n("V-Menu",{attrs:{"current-section":t.currentSection}})],1)},s=[],_=r(10),f=r(18),i={name:"IndexPage",data:function(){return{currentSection:0}},mounted:function(){var e=this,n=this.$gsap,d=this.$ScrollTrigger;n.utils.toArray("header, section").forEach(function(g,o){d.create({trigger:g,start:"top 45%",end:"bottom 45%",onEnter:function(){return e.currentSection=o},onEnterBack:function(){return e.currentSection=o}})})}},u=i,l=r(36),v=Object(l.a)(u,c,s,!1,null,null,null),h=a.default=v.exports}}]);
