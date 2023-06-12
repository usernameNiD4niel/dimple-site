export interface CustomParamSlug {
    params: CustomParamSlugSingle
}

interface CustomParamSlugSingle {
    slug: string,
    id: number
}

export interface CustomNavParam {
    title: string,
    parentStyle: string,
    textStyle: string,
    iconLeftSrc: string,
    path: string
}
