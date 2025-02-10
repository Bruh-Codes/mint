import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import EventImage from "../../../public/event.svg";

export function EventDetails() {
	return (
		<Card className="mb-8 bg-cream border-none">
			<CardContent className="pt-6">
				<h1 className="text-3xl md:text-4xl text-center font-bold mb-4">
					StarkCon IIT Madras ~ StarkWare x Web3Chennai
				</h1>
				<div className="space-y-2 text-gray-600">
					<span className="block text-center font-semibold text-2xl text-orange-600">
						Thu, 22 Dec, 15:00 - 18:00 GMT+5:30
					</span>
					<span className="block text-center font-medium text-xl text-black">
						IITM Research Park
					</span>
				</div>
				<div className="mt-6 rounded-e-xl overflow-clip">
					<img
						src={EventImage}
						alt="Event banner"
						className="w-full rounded-lg"
						loading="lazy"
					/>
				</div>
			</CardContent>
		</Card>
	);
}
