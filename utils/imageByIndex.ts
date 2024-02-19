import image1 from '../public/assets/1.jpg'
import image2 from '../public/assets/2.jpg'
import image3 from '../public/assets/3.jpg'
import image4 from '../public/assets/4.jpg'
import image5 from '../public/assets/5.jpg'
import image6 from '../public/assets/6.jpg'

export const images: string[] = [image1.src, image2.src, image3.src, image4.src, image5.src, image6.src]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex;
