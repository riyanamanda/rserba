import { Helmet } from 'react-helmet-async';

type MetaDataProps = {
    title: string;
    description?: string;
    canonical?: string;
};

const MetaData = ({ title, description, canonical }: MetaDataProps) => {
    const desc =
        'Pemulihan adalah sebuah perjalanan, kami menemani Anda setiap langkahnya. Dengan perawatan tepat dan dukungan kuat, Anda akan merasakan perubahan positif dalam hidup.';

    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description ?? desc} />
            <link
                rel='canonical'
                href={canonical ?? import.meta.env.VITE_APP_URL}
            />
        </Helmet>
    );
};
export default MetaData;
