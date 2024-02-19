import { ContainerImageProps } from "@/utils/interface";

const ContainerImage = ({ src }: ContainerImageProps) => {
    return (
        <div className={`w-[160px] h-[160px] xl:w-[300px] xl:h-[300px] bg-cover shadow-md`} style={{ backgroundImage: `url(${src})` }} />
    );
};

export default ContainerImage;
