import { Navigation } from "@/components/layout/Navigation";
import { EventGrid } from "@/components/events/EventGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Featured Events</h1>
        </header>

        <section className="space-y-8">
          <EventGrid />
        </section>
      </main>
    </div>
  );
};

export default Index;