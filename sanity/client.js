import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: false,
});
export default client
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

