(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{331:function(t,e,l){},352:function(t,e,l){"use strict";var s=l(331);l.n(s).a},371:function(t,e,l){"use strict";l.r(e);var s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("form",{staticClass:"add-new-container",class:{"is-blocked":t.blocked||t.loading},on:{submit:function(e){return e.preventDefault(),t.addNewSkill(e)}}},[l("div",{staticClass:"add-new__inputs"},[l("div",{staticClass:"add-new__col"},[l("app-input",{attrs:{placeholder:"Новый навык"},model:{value:t.skill.title,callback:function(e){t.$set(t.skill,"title",e)},expression:"skill.title"}})],1),l("div",{staticClass:"add-new__col add-new__col_small"},[l("app-input",{attrs:{type:"number",min:"0",max:"100",maxlength:"3"},model:{value:t.skill.percent,callback:function(e){t.$set(t.skill,"percent",e)},expression:"skill.percent"}})],1)]),l("button",{staticClass:"add-new__button",attrs:{type:"submit","data-text":"+"}})])};s._withStripped=!0;var i=l(38),a={props:{blocked:{type:Boolean,default:!1},categoryId:Number},data:()=>({loading:!1,skill:{title:"",percent:0}}),components:{appInput:()=>l.e(0).then(l.bind(null,369))},methods:{...Object(i.b)("skills",["addSkill"]),...Object(i.b)("tooltips",["showTooltip"]),async addNewSkill(){this.loading=!0;try{await this.addSkill({category:this.categoryId,title:this.skill.title,percent:this.skill.percent});this.skill.percent=0,this.skill.title="",this.showTooltip({type:"success",text:"Скилл добавлен"})}catch(t){this.showTooltip({type:"error",text:t.message})}finally{this.loading=!1}}}},n=(l(352),l(93)),o=Object(n.a)(a,s,[],!1,null,"d43345ec",null);o.options.__file="src/admin/components/skills-add-item.vue";e.default=o.exports}}]);