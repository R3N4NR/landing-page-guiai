import EventCard from "../Basics/EventCards";
import { EventsInterface } from "../../types/EventsInterface";

interface Props {
  events: EventsInterface[];
  loading: boolean;
  onSelectEvent: (event: EventsInterface) => void;
}

export default function OfficialEventsSection({ events, loading, onSelectEvent }: Props) {
  return (
    <section className="py-24 px-8 text-center bg-[#0E0637]">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Eventos Oficiais</h1>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12">
        Escolha um evento real do nosso banco de dados e participe!
      </p>

      {loading ? (
        <p className="text-gray-400">Carregando eventos...</p>
      ) : events.length === 0 ? (
        <p className="text-gray-400">Nenhum evento cadastrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onDetails={() => onSelectEvent(event)} />
          ))}
        </div>
      )}
    </section>
  );
}
