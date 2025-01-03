export default {
    name: 'Blog',
    type: 'document',
    title: 'Blog-website',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'SubHeading',
            type: 'string',
            title: 'SubHeading'
        },
        {
            name: 'descrition',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'author',
            type: 'string',
            title: 'author'
        },
        {
            name:'image',
            type:'image',
            title:'Image',
            options:{
                hotspot:true
            }
        },
    ]
}