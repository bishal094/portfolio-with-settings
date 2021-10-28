import { AppContext } from 'context/AppContext'
import Head from 'next/head'

const Meta = ({ title, description, image, siteName, url }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={description}></meta>
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url} />
                <meta property="og:site_name" content={siteName} />
                <meta name="google-site-verification" content="fVjYKjpHxxr3isJ5mr3Ak65yhdT06ZbIwcBF6zX1uZY" />
            </Head>
        </div>
    )
}
Meta.defaultPropTypes = {
    title: "",
    description: "",
    image: "",
    siteName: "",
    url: "",
}


export default Meta