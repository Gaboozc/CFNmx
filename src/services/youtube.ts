import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    publishedAt: string;
    channelTitle: string;
    isLive?: boolean;
}

// Mock data for fallback
const MOCK_VIDEOS: Video[] = [
    {
        id: 'mock-1',
        title: "Propósito en Tiempos de Crisis",
        description: "Mensaje dominical sobre encontrar propósito en medio de las dificultades.",
        thumbnail: "https://images.unsplash.com/photo-1644965736489-854d8be3bc53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHN1bnJpc2V8ZW58MXx8fHwxNzYyNjYzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        publishedAt: new Date().toISOString(),
        channelTitle: "CFN Church",
        isLive: false
    },
    {
        id: 'mock-2',
        title: "Fe que Transforma Montañas",
        description: "Una enseñanza sobre el poder de la fe.",
        thumbnail: "https://images.unsplash.com/photo-1729089049653-24312fdca908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjB3b3JzaGlwfGVufDF8fHx8MTc2MjY0ODA5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
        channelTitle: "CFN Church",
        isLive: false
    },
    {
        id: 'mock-3',
        title: "Familia: El Diseño Original",
        description: "Restaurando los fundamentos de la familia.",
        thumbnail: "https://images.unsplash.com/photo-1596510914965-9ae08acae566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZmFtaWxpZXMlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjI2NjE3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        publishedAt: new Date(Date.now() - 86400000 * 14).toISOString(),
        channelTitle: "CFN Church",
        isLive: false
    },
    {
        id: 'mock-4',
        title: "Esperanza Viva",
        description: "Renovando nuestra esperanza en Cristo.",
        thumbnail: "https://images.unsplash.com/photo-1507692049790-de58293a469d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3BlfGVufDF8fHx8MTc2MjY2Mzc4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        publishedAt: new Date(Date.now() - 86400000 * 21).toISOString(),
        channelTitle: "CFN Church",
        isLive: false
    },
    {
        id: 'mock-5',
        title: "Caminando en Luz",
        description: "Viviendo como hijos de luz en un mundo oscuro.",
        thumbnail: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5saWdodHxlbnwxfHx8fDE3NjI2NjM3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        publishedAt: new Date(Date.now() - 86400000 * 28).toISOString(),
        channelTitle: "CFN Church",
        isLive: false
    },
    {
        id: 'mock-6',
        title: "El Poder de la Oración",
        description: "Cómo la oración transforma circunstancias.",
        thumbnail: "https://images.unsplash.com/photo-1491396023581-4344e51f4575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXJ8ZW58MXx8fHwxNzYyNjYzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        publishedAt: new Date(Date.now() - 86400000 * 35).toISOString(),
        channelTitle: "CFN Church",
        isLive: false
    },
    {
        id: 'mock-7',
        title: "Unidad en el Espíritu",
        description: "La importancia de la comunión en la iglesia.",
        thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHl8ZW58MXx8fHwxNzYyNjYzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        publishedAt: new Date(Date.now() - 86400000 * 42).toISOString(),
        channelTitle: "CFN Church",
        isLive: false
    }
];

export async function fetchLiveStream(): Promise<Video | null> {
    if (!API_KEY || !CHANNEL_ID) {
        console.warn('YouTube API credentials missing, using mock data');
        return null;
    }

    try {
        const response = await fetch(
            `${BASE_URL}/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const item = data.items[0];
            return {
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high.url,
                publishedAt: item.snippet.publishedAt,
                channelTitle: item.snippet.channelTitle,
                isLive: true
            };
        }
        return null;
    } catch (error) {
        console.error('Error fetching live stream:', error);
        return null;
    }
}

export async function fetchRecentVideos(maxResults: number = 4): Promise<Video[]> {
    if (!API_KEY || !CHANNEL_ID) {
        console.warn('YouTube API credentials missing, using mock data');
        return MOCK_VIDEOS.slice(0, maxResults);
    }

    try {
        // The "Uploads" playlist ID is usually the Channel ID with "UC" replaced by "UU"
        const uploadsPlaylistId = CHANNEL_ID.replace(/^UC/, 'UU');

        const response = await fetch(
            `${BASE_URL}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.error) {
            console.error('YouTube API Error:', data.error);
            return MOCK_VIDEOS.slice(0, maxResults);
        }

        let videos: Video[] = [];
        if (data.items) {
            videos = data.items.map((item: any) => ({
                id: item.snippet.resourceId.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
                publishedAt: item.snippet.publishedAt,
                channelTitle: item.snippet.channelTitle,
                isLive: false
            }));
        }

        // Pad with mock videos if we don't have enough
        if (videos.length < maxResults) {
            const needed = maxResults - videos.length;
            console.log(`[YouTube] Padding with ${needed} mock videos. Original: ${videos.length}, Target: ${maxResults}`);
            const mockPadding = MOCK_VIDEOS.slice(0, needed);
            videos = [...videos, ...mockPadding];
        }

        console.log(`[YouTube] Returning ${videos.length} videos`);
        return videos;
    } catch (error) {
        console.error('Error fetching recent videos:', error);
        return MOCK_VIDEOS.slice(0, maxResults);
    }
}

export function formatDate(dateString: string): string {
    try {
        return format(new Date(dateString), "d 'de' MMMM, yyyy", { locale: es });
    } catch (e) {
        return dateString;
    }
}
