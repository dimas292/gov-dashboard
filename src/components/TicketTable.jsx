function badgeTone(value) {
  if (value === "Baru") return "warning";
  if (value === "Diproses") return "info";
  if (value === "Selesai") return "success";
  if (value === "MBG") return "primary";
  if (value === "Infrastruktur") return "info";
  return "neutral";
}

export default function TicketTable({ tickets }) {
  return (
    <article className="card">
      <header className="card__header flex-wrap">
        <span className="card__title">Ticket/Laporan Terbaru</span>
        <form className="input-group ms-auto w-full md:w-60" role="search">
          <span className="input-group__text">Cari</span>
          <input className="input" type="search" placeholder="ID, pelapor, ringkasan..." aria-label="Cari ticket" />
        </form>
      </header>

      <div className="table-responsive">
        <table className="table table--hover table--align-middle">
          <thead className="table__head--alt">
            <tr>
              <th scope="col">ID Ticket</th>
              <th scope="col">Ringkasan</th>
              <th scope="col">Kategori</th>
              <th scope="col">Status</th>
              <th scope="col">Tanggal</th>
              <th scope="col" className="text-end">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <th scope="row"><a href="#" className="link"><code>{ticket.id}</code></a></th>
                <td>{ticket.summary}</td>
                <td><span className={`badge badge--soft badge--${badgeTone(ticket.category)}`}>{ticket.category}</span></td>
                <td><span className={`badge badge--soft badge--${badgeTone(ticket.status)}`}>{ticket.status}</span></td>
                <td>{ticket.date}</td>
                <td className="text-end"><button className="button button--sm button--neutral" type="button">Detail</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
