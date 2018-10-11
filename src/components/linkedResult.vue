<template>
    <div class="linkedResult padding-left_3 margin-top_n3 margin_3 padding-right_3 border-bottom-width_2">
        <div class="card result childs shadow_2 texture_medium border_secondary-3 margin-bottom_0 ">
                <div class="detail-container">
                    <div class="grid-x">
                        <div class="cell auto">
                            <div class="member-name font_1 line-height_1 member-name padding-left_4 padding_3 color_white">Member Name</div>
                            <ul class="details no-bullet padding-left_3 padding-right_3 margin-bottom_3 font_n1 color_white grid-x grid-margin-x">
                                <li class="cell small-12 medium-6 border-bottom-width_1 border_secondary-3 border_solid padding_2">
                                    <i class="margin-left_3 margin-right_3  fal fa-user-md"></i> Fellow
                                    <i class="fal fa-user-slash"></i> NPI
                                </li>
                                <li class="cell small-12 medium-6 border-bottom-width_1 border_secondary-3 border_solid padding_2">
                                    <i class="margin-left_3 margin-right_3  fal fa-hashtag"></i>
                                    PERSONIFY NUMBER
                                </li>
                                <li class="cell small-12 medium-6 border-bottom-width_1 border_secondary-3 border_solid padding_2">
                                    <i class="margin-left_3 margin-right_3  fal fa-at"></i>
                                    USER@EMAIL.COM
                                    <a href="#" class="link color_primary-4 float-right padding-right_2 padding-left_2"><i class="fal fa-pencil"></i></a>
                                </li>
                                <li class="cell small-12 medium-6 border-bottom-width_1 border_secondary-3 border_solid padding_2">
                                    <i class="margin-left_3 margin-right_3  fal fa-map-pin"></i>
                                    CITY, COUNTRY
                                </li>
                                <li class="cell small-12 medium-6 border-bottom-width_1 border_secondary-3 border_solid padding_2">
                                    <i class="margin-left_3 margin-right_3  fal fa-badge-check"></i>
                                    BADGE NUMBER
                                    <a href="" class="link color_primary-4 float-right padding-right_2 padding-left_2"><i class="fal fa-exchange-alt"></i></a>
                                </li>
                                <li class="cell small-12 medium-6 border-bottom-width_1 border_secondary-3 border_solid padding_2">
                                    <i class="margin-left_3 margin-right_3  fal fa-user-circle"></i>
                                    USER NAME
                                    <a href="#" class="link color_primary-4 float-right padding-right_2 padding-left_2"><i class="fal fa-pencil"></i></a>
                                </li>
                                <li class="cell small-12 medium-6 padding_2 border-bottom-width_1 border_secondary-3 border_solid padding_2">
                                    <i class="margin-left_3 margin-right_3  fal fa-key"></i>
                                    ************
                                    <a href="#" class="link color_primary-4 float-right padding-right_2 padding-left_2"><i class="fal fa-pencil"></i></a>
                                </li>
                                <li class="cell small-12 large-6 padding_2">
                                   
                                    <a href="#" class="link color_primary-4 padding_2"> <i class="margin-left_3 margin-right_3  fas fa-crown"></i> make primary</a>
                                    <a href="#" class="link color_primary-4 float-right">remove from group<i class="margin-left_3 margin-right_3 fas fa-times"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="cell shrink texture_medium back_secondary-n3 margin-right_3 color_secondary">
                            <ul class="flag no-bullet">
                                <li class="padding_2 center member" v-bind:class="{ active: member }"><i class="fal fa-user-md"></i></li>
                                <li class="padding_2 center accbadge" v-bind:class="{ active: accbadge }"><i class="fal fa-badge-check"></i></li>
                                <li class="padding_2 center iscience" v-bind:class="{ active: iscience }"><i class="fal fa-flask"></i></li>
                                <li class="padding_2 center bruteforce" v-bind:class="{ active: bruteforce }"><i class="fal fa-lock-alt"></i></li>
                                <li class="padding_2 center expobadge" v-bind:class="{ active: expobadge }"><i class="fal fa-exclamation-circle"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: "linkedResult",
    data() {
        return {
            member: false,
            accbadge: false,
            iscience: false,
            bruteforce: false,
            expobadge: false
        };
    }
};
</script>
<style lang="css">
/*.linkedResult{  
	z-index: 0;
    transform: translateY(-95%);
    transition: transform 1s ease;
    overflow: hidden;
}
.selectable.linkedResult{
	transform: translateY(0%);	
}*/

</style>