export interface Product{
    id: string ,
    name: string,
    description: string,
    price: number,
    discount: number,
    stock: number,
    images: 
    {
        list_images: Image[],
        thumbnails: Thumbnail[]
    }
  }

export interface Image{
    id: number,
    url: string
};

export interface Thumbnail{
    id: number,
    url: string,
    select: boolean
};