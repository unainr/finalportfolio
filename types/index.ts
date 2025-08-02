export interface LayoutProps{
    children:React.ReactNode
}

export interface Project {
    _id?: string;
	name: string;
	description: string;
	images: string;
	projectLink: string;
}


export interface FormAction{
    name: string,
    email: string,
    message: string
}