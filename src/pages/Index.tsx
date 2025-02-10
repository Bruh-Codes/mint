import { EventHeader } from "@/components/events/EventHeader";
import { EventDetails } from "@/components/events/EventDetails";
import { EventOrganizers } from "@/components/events/EventOrganizers";
import { EventRegistrationForm } from "@/components/events/EventRegistrationForm";
import { EventInformation } from "@/components/events/EventInformation";

const Index = () => {
	return (
		<div className="min-h-screen bg-cream">
			<EventHeader />

			<main className="container md:max-w-5xl mx-auto px-4 py-8">
				<EventDetails />
				<EventOrganizers />
				<EventRegistrationForm />
				<EventInformation />
			</main>
		</div>
	);
};

export default Index;
