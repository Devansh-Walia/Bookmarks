export interface bookmarkType {
    createdAt: string
    deletedAt: null | string
    description: string
    id: string
    imageUrl: string
    isFavorite: boolean
    name: string
    updatedAt: null | string
    url: string
}
export interface bookamrksType {
    [id: string]: bookmarkType
}

export interface folderType {
    createdAt: string;
    deletedAt: null | string;
    id: string;
    name: string;
    updatedAt: null | string;
    childrenIds?: string[];
    bookmarkIds?: string[];
}

export interface foldersType {
    [id: string]: folderType
}


export interface ICardProps {
    bookmark: {
        createdAt?: string;
        deletedAt?: string;
        description?: string;
        id?: string;
        imageUrl?: string;
        isFavorite?: boolean;
        name?: string;
        updatedAt?: string;
        url?: string;
    };
}
export interface loginProps { email: string; password: string; }