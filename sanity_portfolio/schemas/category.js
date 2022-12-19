export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'category_name',
            type: 'string',
            title: 'Category Name'
        },
        {
            name: 'category_image',
            type: 'image',
            title: 'Category Image'
        },
        {
            name: 'categoryImage_alt',
            title: 'Alt',
            type: 'string'
        },
        {
            name: 'contained_sets',
            type: 'array',
            title: 'Contained Sets',
            of: [{
                type: 'reference',
                to: [{type: 'set'}] 
            }]
        }
    ]
}