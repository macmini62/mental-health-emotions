import Link from "next/link";

const Footer = () => {
  const options = [
    "help",
    "about",
    "careers",
    "privacy",
    "terms"
  ]

  return (
    <div className="flex flex-col gap-2 items-center text-sm my-4">
      <div className="flex gap-3">
        {
          options.map((o: string, i: number) => (
            <Link href={`/emotions/${o}`} key={i} className="hover:underline hover:text-black capitalize">{o}</Link>
          ))
        }
      </div>
      <p className="text-black">emotions&trade; &copy; {(1970+(Date.now()/(1000*60*60*24*366))).toFixed(0)}</p>
    </div>
  )
}

export default Footer;
