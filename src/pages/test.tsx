import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/products";

export default function Test() {
  const { status, fetchStatus } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  console.log(fetchStatus);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Products</h1>
      {/* <ul>
        {data?.list.map((each) => (
          <li key={each.id}>
            <h2>{each.name}</h2>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
