import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'none',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Home Hero',
          value: 'homeHero',
        },
      ],
      required: true,
    },
    {
      name: 'featuredPost',
      type: 'relationship',
      admin: {
        condition: (_, { type } = {}) => ['homeHero'].includes(type),
      },
      relationTo: 'posts',
      required: true,
    },
  ],
  label: false,
}
