const description = "Let's make regular expressions a cool weapon.";
const title = 'regex tutorial';
const url = 'https://regex-tutorial.vercel.app/';

export default {
  defaultTitle: title,
  canonical: url,
  description,
  openGraph: {
    type: 'website',
    url,
    title,
    site_name: title,
    description,
    images: [
      {
        url: 'https://bhgmqkodnxddurjfgawv.supabase.co/storage/v1/object/public/thumbnails/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Regex tutorial logo image',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
