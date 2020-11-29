import { useRouter } from "next/dist/client/router";
import { Event, EventParticipant } from "interfaces/event";

interface Props {
  event: Event,
  idx: number,
  participant?: EventParticipant,
  popupCb: (event: Event) => void
}

const TalksTableRow: React.FC<Props> = ({ event, idx, participant, popupCb }) => {
  const router = useRouter();

  const isRegistered = !!participant;
  const status = isRegistered ? "Terdaftar" : "Belum terdaftar";

  const clickHandler = () => {
    if (isRegistered) {
      router.push(`/dashboard/arkav-talks/${event.slug}`);
    } else {
      popupCb(event);
    }
  };

  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{event.name}</td>
      <td>{event.category}</td>
      <td>{status}</td>
      <td>
        <a onClick={clickHandler}>{isRegistered ? "Lihat" : "Daftar"}</a>
      </td>
      <style jsx>{`
        tr {background-color: #ffffff;}
        tr:nth-child(even) {background-color: #f8f8f8;}

        tr:hover {background-color: #ddd;}

        td {
          border: 1px solid #ddd;
          padding: 0.5rem;
        }  

        a {
          color: #613FB6;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </tr>
  );
};

export default TalksTableRow;