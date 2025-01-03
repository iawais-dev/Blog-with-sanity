import { type SchemaTypeDefinition } from 'sanity'
import blog from '../blog'
import {post} from '../post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,post],
}
