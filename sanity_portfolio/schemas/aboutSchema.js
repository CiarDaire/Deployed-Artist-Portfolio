export default {
    name: 'about',
    type: 'document',
    title: 'About',
    fields: [
        {
            name: 'aboutImage',
            title: 'About',
            type: 'image',
        },
        {
            name: 'alt',
            title: 'Alt',
            type: 'string'
        },
        {
            name: "aboutText",
            title: 'About Me',
            type: 'text'
        }
    ]
}