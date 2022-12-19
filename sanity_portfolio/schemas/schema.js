import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './category';
import set from './setsSchema';
import exhibitions from './exhibitionsSchema';
import about from './aboutSchema';
import shop from './shopSchema'
import userGuide from './userguide'


export default createSchema({

  name: 'default',

  types: schemaTypes.concat([
    category,
    set,
    exhibitions,
    about,
    shop,
    userGuide
  ]),
})
