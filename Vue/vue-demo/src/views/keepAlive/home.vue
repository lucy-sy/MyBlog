<template>
    <div>
        <ul v-for="(item, index) in tab" :key="index" @click="visitedLi(item)">
            <li :class="visited === item.tabTitle ? 'visitedLi': ''">{{item.tabTitle}}</li>
        </ul>
        <component
        :is="currentTab">
        </component>
    </div>
</template>

<script>
import tabA from './tabA.vue'
import tabB from './tabB.vue'
import tabC from './tabC.vue'
export default {
    name: 'home',
    data() {
        return {
            tab: [
                {
                    tabTitle: 'A',
                    comp: tabA
                },
                {
                    tabTitle: 'B',
                    comp: tabB
                },
                {
                    tabTitle: 'C',
                    comp: tabC
                }
            ],
            currentTab: 'tabA',
            visited: 'A'
        }
    },
    methods: {
        visitedLi(item) {
            this.visited = item.tabTitle
            this.currentTab = item.comp
        }
    },
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    float: left;
    width: 20px;
    height: 20px;
    font-size: 18px;
    font-weight: bolder;
    margin-right: 20px;
}
li:hover {
    cursor: pointer;
    color: rgb(223, 23, 23);
}
.visitedLi {
    color: rgb(223, 23, 23);
}
</style>