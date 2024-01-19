export default function Home() {
  const events = [
    {
      title: "First Post",
      content: "This is the content of the first post. It can contain any relevant information.",
      date: "2024-01-19",
      type: "announcement"
    },
    {
      title: "Event Recap",
      content: "Recapping the amazing event that took place last weekend. Great memories!",
      date: "2024-01-15",
      type: "event"
    },
    {
      title: "Tips and Tricks",
      content: "Sharing some useful tips and tricks for better productivity. Stay tuned for more!",
      date: "2024-01-10",
      type: "tutorial"
    },
    {
      title: "New Product Launch",
      content: "Exciting news! We're launching a new product soon. Get ready for the big reveal.",
      date: "2024-01-05",
      type: "product"
    }
  ];

  
  return (
    <main className="flex items-center flex-col">
      {events.map((event)=>{
        return <div className="border-b w-2/3 border-gray-500 border-opacity-40 pb-1 m-4">
          <p className="flex justify-between">
            <span className="font-bold">{event.title}</span> <span className="font-bold text-sm bg-blue-200 rounded-full px-2 text-center">{event.type}</span> 
          </p>
          <p>{event.content}</p>
        </div>
      })}
    </main>
  )
}
