import NewsElement from "@/src/components/blocks/NewsElement";
import BannerNews from "@/src/components/blocks/Banner_News";
import { getNewsById, getAllNewsIds } from '@/lib/news';

export default function NewsPage({ news }) {
    return (
        <div>
            <BannerNews />
            <NewsElement news={news} />
        </div>
    );
}

export async function getStaticPaths() {
    const paths = await getAllNewsIds();
    return {
        paths,
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params }) {
    const news = await getNewsById(params.id);
    
    if (!news) {
        return {
            notFound: true,
        }
    }

    return {
        props: { news },
        revalidate: 3600 // ISR - обновление каждые 60 минут
    };
}