export interface ButtonProps {
    text: string;
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