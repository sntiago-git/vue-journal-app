export default {

    //path: '/daybook',
    name: 'daybook',
    redirect: { name: "daybook-default" },
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DaybookLayout'),
    children: [

        {
            path: '',
            name: 'daybook-default',
            component: () => import(/* webpackChunkName: "daybook-NoEntrySelected" */ '@/modules/daybook/views/NoEntrySelected'),
        },

        {
            path: ':id',
            name: 'daybook-entry',
            component: () => import(/* webpackChunkName: "daybook-Entry" */ '@/modules/daybook/views/EntryView'),
        },

    ]

}