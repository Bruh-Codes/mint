import { EventCard } from "./EventCard";

const SAMPLE_EVENTS = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true",
    month: "Dec",
    day: "22",
    title: "StarkCon IIT Madras",
    location: "IITM Research Park",
    description: "The future of Web3, The StarkWare & ZKX Community building in Web3.",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/5d2216b460b7475a8070227dee966556/f818746299c30f04b9245998f5dc5bad533146f7870c403807925bfa4a4825af?placeholderIfAbsent=true",
    month: "Dec",
    day: "22",
    title: "StarkCon IIT Madras",
    location: "IITM Research Park",
    description: "The future of Web3, The StarkWare & ZKX Community building in Web3.",
  },
];

export function EventGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SAMPLE_EVENTS.map((event, index) => (
        <EventCard
          key={index}
          {...event}
        />
      ))}
    </div>
  );
}