export default {
    name: 'exhibitions',
    title: 'Exhibitions',
    type: 'document',
    fields: [
        {
            name: 'exhibition_name',
            title: 'Name of Gallery',
            type: 'string',
        },
        {
            name: 'exhibition_image',
            title: 'Exhibition Image',
            type: 'image',
        },
        {
            name: 'exhibition_alt',
            title: 'Alt',
            type: 'string'
        },
        {
            name: 'exhibition_dates',
            title: 'Dates',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'exhibition_status',
            title: 'Exhibition Status',
            type: 'string', 
            options: {
                list: [
                    {title: 'Past', value: 'past'},
                    {title: 'Current', value: 'current'},
                    {title: 'Future', value: 'future'}
                ],
                layout: 'radio',
            }
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'exhibition_name',
            }
        },
        {
            name: 'ref_gallery',
            title: 'Refer to Gallery',
            type: 'reference',
            description: '...or, refer to an existing gallery.',
            to: [{ type: 'set' }]
        }
        // {
        //     name: 'exhibition_gallery',
        //     type: 'block',
        //     title: 'Exhibition Gallery',
        //     marks: {
        //         annotations: [
        //             {
        //                 name: 'galleryLink',
        //                 type: 'object',
        //                 title: 'Link to Gallery',
        //                 fields: [
        //                     {
        //                         name: 'reference',
        //                         type: 'reference',
        //                         title: 'Gallery Link Reference',
        //                         to: [
        //                             { type: 'set'}
        //                         ]
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // }
    ]
}