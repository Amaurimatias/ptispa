import Link from "next/link";

export default function Card({ data }) {
    return (
        <div className="flex flex-col w-40 itens-center">
            <img className="rounded"
                src={data.imageUrl}
                alt="Imagem"
            />
            <span className="text-zinc-400">
                {data.title}
            </span>

            <span className="">
                {data.description}
            </span>

            <Link className="" href={data.linkUrl}>
                Read more
            </Link>
        </div>
    )
}