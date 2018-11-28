export default {
    menus: [    // 菜单相关路由
        {key: '/app/center/index', title: '个人中心', icon: 'rocket',component:'Center'},
        { key: '/app/calendar/calendarPlan', title: '计划表', icon: 'rocket',component:'CalendarPlan'},
        {
            key:'/app/docs',title:'文档管理',icon:'folder',
            subs:[
                { key: '/app/docs/all', title: '全部文档', component: 'AsynchronousTable'},
                { key: '/app/docs/share', title: '分享的文档', component: 'AsynchronousTable'},
                { key: '/app/docs/liked', title: '关注的文档', component: 'AsynchronousTable'},
                { key: '/app/docs/others', title: '共享给我的文档', component: 'AsynchronousTable'},
            ],
        },
        {
            key: '/app/ui', title: '文档编辑', icon: 'scan',
            subs: [
                { key: '/app/ui/wysiwyg', title: '富文本', component: 'WysiwygBundle'},
            ],
        }
    ],
    others: []  // 非菜单相关路由
}