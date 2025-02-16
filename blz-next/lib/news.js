import { news } from "@/newsConfig";

export function getAllNewsIds() {
    return news.map(item => ({
        params: { id: item.id.toString() }
    }));
}

export function getNewsById(id) {
    return news.find(item => item.id.toString() === id) || null;
}