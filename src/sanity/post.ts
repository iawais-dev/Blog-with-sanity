import { defineType, defineArrayMember, defineField } from "sanity";


export const post = defineType({
    name: 'post',
    type: 'document',
    title: 'post',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (e) => e.required()
        }),
        defineField({
            name: 'description',
            type: 'string',
            title: 'Description',
            validation: (e) => e.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 100
            }
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
        }),
    ]
})

