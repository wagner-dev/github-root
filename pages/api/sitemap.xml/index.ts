import { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export default async function SiteMap(request: NextApiRequest, response: NextApiResponse) {

    const pages = [
        { url: '/', changefreq: 'daily', priority: 1 },
        { url: '/login', changefreq: 'daily', priority: 1 },
        { url: '/no-follow-back', changefreq: 'daily', priority: 1 },
        { url: '/unfollowers', changefreq: 'daily', priority: 1 },
    ]
    // set head
    response.writeHead(200, {
        "Content-Type": 'application/xml'
    })
    
    const stream = new SitemapStream({ hostname: `https://${request.headers.host}` }) 
    
    const xmlString = await streamToPromise(
        Readable.from(pages).pipe(stream)
    ).then(data => data.toString())

    response.end(xmlString)
}