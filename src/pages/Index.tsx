import { Navigation } from "@/components/layout/Navigation";
import { EventGrid } from "@/components/events/EventGrid";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Featured Events</h1>
          <Link
            to="/create-event"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Create Event
          </Link>
        </header>

        <section className="space-y-8">
          <EventGrid />
        </section>
      </main>
    </div>
  );
};

export default Index;