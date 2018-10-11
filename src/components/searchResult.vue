<template>
    <div class="grid-y">
        <transition appear name="slideIn">
        	<div class="searchResults result card shadow_2 margin_3 border_secondary-3" v-bind:class="{ selectable: selectable }">
            <div class="select-container back_acc" @click="select_toggle">
                <div class="padding_3">
                    <i v-if="!selected" class="far fa-circle color_white"></i>
                    <i v-if="selected" class="fas fa-check-circle color_white"> </i>
                </div>
            </div>
            <div class="detail-container ">
                <div class="grid-x">
                    <div class="cell auto ">
                        <div class="member-name font_1 font_slab line-height_2 member-name padding_3 padding-left_4 padding-right_3">{{fullName}}</div>
                        <div class="">
                            <ul class="details no-bullet padding-left_3 padding-right_3 margin-bottom_0 grid-x">
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <div v-if="member"><i class="margin-left_3 margin-right_3 color_secondary-2 fal fa-user-md"></i> Fellow</div>
                                    <div v-if="!member"><i class="fal fa-user-slash"></i> NPI</div>
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 color_secondary-2 fal fa-hashtag"></i>
                                    {{personifyNumber}}
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 color_secondary-2 fal fa-at"></i>
                                    {{email}}
                                    <a href="#" class="link float-right padding_2"><i class="fal fa-pencil"></i></a>
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 color_secondary-2 fal fa-map-pin"></i>
                                   {{location}}
                                </li>
                                <li v-if="badgeNumber.length != 0" class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 color_secondary-2 fal fa-badge-check"></i>
                                    {{badgeNumber}}
                                    <a href="" class="link float-right padding_2"><i class="fal fa-exchange-alt"></i></a>
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 color_secondary-2 fal fa-user-circle"></i>
                                   {{userName}}
                                    <a href="#" class="link float-right padding_2"><i class="fal fa-pencil"></i></a>
                                </li>
                                <li class="border-bottom-width_1 border_secondary-5 border_solid padding_2 cell small-12 large-6">
                                    <i class="margin-left_3 margin-right_3 color_secondary-2 fal fa-key"></i>
                                    {{password}}
                                    <a href="#" class="link float-right padding_2"></a>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="padding_4 cell small-12 large-6 flex">
                            <i class="margin-left_3 color_secondary-2 fal fa-users-crown flex-shrink"></i>
                            <a class="link margin-left_3 margin-right_3 flex-auto"  @click="showChildren_toggle">
                            	<i v-if="showChildren" class="fas fa-chevron-circle-down padding-right_3"></i> <i v-if="!showChildren" class="fas fa-chevron-circle-right padding-right_3"></i>{{items.length}} linked account
                            </a>
                            <a @click="selectable_toggle" class="link float-right margin-left_3 margin-right_3 flex-1">manage &nbsp; <i class="fal fa-pencil"></i></a>
                        </div>
                    </div>
                    <div class="cell shrink texture_light back_secondary-3 margin-right_3 color_secondary-3">
                        <ul class="flag no-bullet">
                            <li class="padding_3 center member" v-bind:class="{ active: member }"><i class="fal fa-user-md"></i></li>
                            <li class="padding_3 center accbadge" v-bind:class="{ active: accbadge }"><i class="fal fa-badge-check"></i></li>
                            <li class="padding_3 center iscience" v-bind:class="{ active: iscience }"><i class="fal fa-flask"></i></li>
                            <li class="padding_3 center bruteforce" v-bind:class="{ active: bruteforce }"><i class="fal fa-lock-alt"></i></li>
                            <li class="padding_3 center expobadge" v-bind:class="{ active: expobadge }"><i class="fal fa-exclamation-circle"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    	</transition>
    	<transition-group name="slideInDown" tag="div">
    		<linkedResult v-if="showChildren" v-for="item in items" v-bind:key="item"/>
    	</transition-group>
    </div>
</template>
<script>
import linkedResult from "@/components/linkedResult.vue";
export default {
    name: "searchResults",
    components: {
        linkedResult
    },
    props:{
    	fullName:String,
    	personifyNumber:String,
    	badgeNumber:String,
    	email:String,
    	location:String,
    	userName:String,
    	password:String,
    	memberType:String,
    },
    data() {
        return {
            selectable: false,
            selected: true,
            member: true,
            accbadge: false,
            iscience: false,
            bruteforce: false,
            expobadge: false,
            showChildren:false,
            items: [1,2,3]
        };
    },
    methods: {
    	badgeIsTrue:function(){
    		return this.badgeNumber != 0;
    	},
        set_selectable: function($set) {
            this.selectable = $set;
        },
        selectable_toggle: function() {
            this.selectable = !this.selectable;
        },        
        showChildren_toggle: function() {
            this.showChildren = !this.showChildren;
        },
        select_toggle: function() {
            if (this.selectable) {
                this.selected = !this.selected;
            }
        }
    }
};
</script>
<style lang="scss">
.slideIn-enter-active, .slideIn-leave-active {
  transition: transform .5s ease, opacity .25s ease .25s;
}
.slideIn-enter, .slideIn-leave-to /* .slideIn-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}
.slideIn-enter-to{
	transform: translateX(1);
	opacity: 1;
}
.slideInDown-enter-active, .slideInDown-leave-active {
  transition: transform .5s ease, opacity .25s ease .25s;
}
.slideInDown-enter, .slideInDown-leave-to /* .slideIn-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
  opacity: 0;
}
.slideInDown-enter-to{
	transform: translateY(1);
	opacity: 1;
}
.slideInDown-move{ 
	transition: transform .5s ease,}

.result {
    display: flex;
    flex-direction: row;
    position: relative;
}

.searchResults {
    z-index: 100;
}

.select-container {
    flex: 0 0 2.25rem;
    padding: 0;
    text-align: center;
    max-width: 0;
    transition: max-width 0.5s;
}

.selectable .select-container {
    max-width: 200px;
}

.detail-container {
    flex: 1 1 auto;
}

.flag .active {
    color: white;
}

.flag .member.active {
    background-color: #2e3192;
}

.flag .accbadge.active {
    background-color: #00a400;
}

.flag .iscience.active {
    background-color: #6233c9;
}

.flag .bruteforce.active {
    background-color: #c70a0a;
}

.flag .expobadge.active {
    background-color: #db6d12;
}

.bounce-transition {
    display: inline-block;
}

.bounce-enter {
    width: 2rem;
    animation: bounce-in 0.5s;
}

.bounce-leave-to {
    animation: bounce-out 0.5s;
}

@keyframes bounce-in {
    0% {
        transform: translateX(0rem) scaleX(1);
    }

    25% {
        transform: translateX(0.25rem) scaleX(1.25);
    }

    100% {
        transform: translateX(-2rem) scaleX(0);
    }
}

@keyframes bounce-out {
    0% {
        transform: translateX(0rem) scaleX(1);
    }

    25% {
        transform: translateX(0.25rem) scaleX(1.25);
    }

    100% {
        transform: translateX(-2rem) scaleX(0);
    }
}
</style>