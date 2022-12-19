export default {
    name: 'set',
    type: 'document',
    title: 'Set',
    fields: [
        {
            name: 'set_name',
            type: 'string',
            title: 'Set Name',
            description: 'Required'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'set_name',
            },
            description: 'Required'
        },
        {
            name: 'set_images',
            type: 'array',
            title: 'Set Images',
            of: [
                {
                    name: 'imageItem',
                    type: 'object',
                    title: 'Image Item',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image',
                            description: 'Required'
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Name',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            name: 'date',
                            type: 'string',
                            title: 'Date',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            name: 'size',
                            type: 'string',
                            title: 'Size',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            name: 'materials',
                            type: 'string',
                            title: 'Materials',
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ]
        }
    ]
}