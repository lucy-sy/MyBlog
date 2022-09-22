import Vue from 'vue'
import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
    state: {
        age: 20,
        grade: 90
    },
    mutations: {
        updateAge (state, age) {
            state.age = age
        },
        updateGrade (state, grade) {
            state.grade = grade
        }
    },
    actions: {
        updateGradeAsync (context, grade) {
            setTimeout(()=>{
                context.commit('updateGrade', grade)
            }, 1000)
        }
    }
})

// 导出store对象
export default store
