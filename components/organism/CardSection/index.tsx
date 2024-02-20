import { Button } from "@/components/atom";
import { Card } from "@/components/molecules";
import { cardItems } from "@/utils/constants";

const CardSection = () => {
  return (
    <section className="px-12 pt-8 pb-20 bg-zinc-50 gap-6 flex flex-col">
      <h1 className="text-[20px] md:text-[32px] font-medium">
        Lorem ipsum dolor sit
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {cardItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            index={index}
          />
        ))}
      </div>
      <div>
        <Button text="See the details" route="details"/>
      </div>
    </section>
  );
};

export default CardSection;
