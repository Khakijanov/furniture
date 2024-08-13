"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("http://localhost:4000/tickets");
      const result = await request.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
        repellendus tempore, exercitationem odit, quasi doloremque possimus
        recusandae alias sequi totam soluta natus iure eius, obcaecati sint
        dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed
        voluptates iste cum totam, facere explicabo, fugit suscipit ratione
        aspernatur consequuntur ex mollitia quaerat?
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      {data.map((item) => (
        <div key={item.id}>
          <Link href={`tikkets/${item.id}`}>
            <div className="card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className={`pill ${item.priority}`}>
                {item.priority} priority
              </div>
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
}
