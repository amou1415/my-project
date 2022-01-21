// store.js
import {defineStore} from "pinia";

// 定义容器 
// 参数1:容器 ID，必须唯一，之后pinia会把所有容器挂载到根容器
// 参数2:选项对象
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useMainStore = defineStore({
    id: "main",
    /**
     * state: 返回对象的函数
     * 类似组件的data，用来储存全局状态
     * 1、必须是函数,为了在服务端渲染的时候避免交叉请求导致的数据状态感染
     * 2、必须是箭头函数，为了更好的TS类型推倒
     */
    state: () => {
        return {
            userMsg:{},
        }
    },

    /**
     * 类似组件的computed，用来封装计算属性，有缓存功能
     */
    getters: {},

    /**
     * 类似组件的methods，封装业务逻辑，修改state
     */
    actions: {
        loginUser(msg){
            this.userMsg = msg;
        },
        removeUser(){
            this.userMsg = {};
        }
    }
});