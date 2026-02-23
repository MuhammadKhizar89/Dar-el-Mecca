import { dummyAllPackages } from './_data/dummyData';

export async function generateStaticParams() {
    // Build static params from local dummy data to avoid external fetches
    const staticParams = Object.entries(dummyAllPackages).flatMap(([, packages]) =>
        packages.map((pkg) => ({
            type: 'U',
            id: String(pkg.id),
        }))
    );

    return staticParams;
}

export default async function generateSitemap() {
    const params = await generateStaticParams();
    const HOST = process.env.NEXT_PUBLIC_HOST_NAME || 'http://localhost:3000';

    const sitemap = [
        { url: `${HOST}/` },
        ...params.map(({ type, id }) => ({ url: `${HOST}/${type}-packages/${id}` })),
    ];

    return sitemap;
}
