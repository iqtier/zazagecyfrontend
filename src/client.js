import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const PROJECT_ID = "dgjco587"
const DATASET = 'production'
export const client = sanityClient({
    projectId: PROJECT_ID,
    dataset:DATASET,
    apiVersion: '2022-09-15',
    useCdn: true,
    token:process.env.ZAZ_AGENCY_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);