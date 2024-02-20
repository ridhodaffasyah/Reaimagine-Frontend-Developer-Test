export interface ButtonProps {
    text: string;
    route: string;
};

export interface LayoutProps {
    children: React.ReactNode;
};

export interface ListMenuProps {
    items: Array<{name: string; link: string}>;
};

export interface ContainerImageProps {
    src: string;
};

export interface CardProps {
    title: string;
    description: string;
    image: string;
    index: number;
};

export interface ListFAQProps {
    question: string;
    answer: string;
};

export interface FormProps {
    email: string;
    password: string;
    error: boolean;
    login: () => void;
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};