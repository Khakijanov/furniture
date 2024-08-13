const getData = async (id) => {
  const request = await fetch("http://localhost:4000/tickets/" + id);

  if (!request.ok) {
    throw new Error("Ticket not found");
  }

  const data = await request.json();
  console.log(data);
  return { data };
};

async function SingleProduct({ params }) {
  try {
    console.log(params);
    const { data } = await getData(params.id);
    console.log(data);

    return (
      <div className="max-w-[800px] mx-auto">
        <h1>Ticket Details</h1>
        <div className="card">
          <h3>{data.title}</h3>
          <span>{data.user_email}</span>
          <p>{data.body}</p>
          <div className={`pill ${data.priority}`}>
            {data.priority} priority
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching ticket data:", error.message);

    return (
      <div className="max-w-[800px] mx-auto">
        <h1>Error</h1>
        <p>Ticket not found. Please try again with a valid ID.</p>
      </div>
    );
  }
}

export default SingleProduct;
